import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterAll = this.filterAll.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    this.setState({ selectedGenre: value });
  }

  filterAll() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let { movies } = this.state;
    const newMovies = movies.filter((el) => el.title.includes(searchText)
      || el.subtitle.includes(searchText)
      || el.storyline.includes(searchText));
    if (searchText !== '') {
      movies = newMovies;
    }
    if (bookmarkedOnly) {
      movies = movies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre.length > 0) {
      movies = movies
        .filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }

  addNewMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.onSearchTextChange(e)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(e) => this.onBookmarkedChange(e)}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.onSelectedGenreChange(e)}
        />
        <MovieList movies={this.filterAll(this.state)} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
