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
    this.addMovie = this.addMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
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

  addMovie(movie) {
    this.setState((state) => ({ movies: [...state.movies, movie] }));
  }

  filterMovies() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filterBookmark = bookmarkedOnly ? movies.filter((movie) => movie.bookmarked) : movies;
    const filterGenre = selectedGenre ? filterBookmark.filter((movie) => movie.genre === selectedGenre) : filterBookmark;
    const filterText = filterGenre.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    return filterText;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="container">
        <div className="search-bar">
          <h2> My awesome movie library </h2>
          <SearchBar
            searchText={searchText}
            onSearchTextChange={this.onSearchTextChange}
            bookmarkedOnly={bookmarkedOnly}
            onBookmarkedChange={this.onBookmarkedChange}
            selectedGenre={selectedGenre}
            onSelectedGenreChange={this.onSelectedGenreChange}
          />
        </div>
        <div>
          <MovieList movies={this.filterMovies(this.state)} />
        </div>
        <div className="add-movie">
          <AddMovie onClick={this.addMovie} />
        </div>
      </div>
    );
  }
}

export default MovieLibrary;
