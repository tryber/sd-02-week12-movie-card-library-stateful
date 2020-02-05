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
  }

  onSearchTextChange(event) {
    const { value } = event.target;
    const { movies } = this.state;
    const newMovies = movies.filter((el) => el.title.includes(value)
      || el.subtitle.includes(value)
      || el.storyline.includes(value));
    this.setState({
      searchText: value,
      movies: (value === '') ? this.props.movies : newMovies,
    });
  }

  onBookmarkedChange(event) {
    const { checked } = event.target;
    const { movies } = this.state;
    this.setState({
      bookmarkedOnly: checked,
      movies: (checked === false)
        ? this.props.movies : movies.filter((el) => el.bookmarked === checked),
    });
  }

  onSelectedGenreChange(event) {
    const { value } = event.target;
    const { movies } = this.props;
    this.setState({
      selectedGenre: value,
      movies: (value === '') ? movies : movies.filter((el) => el.genre === value),
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(movies);
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
        <MovieList movies={movies} />
        <AddMovie addMovie={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
