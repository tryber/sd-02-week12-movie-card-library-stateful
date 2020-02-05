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
    console.log(event.target.value);
  }

  onBookmarkedChange(event) {
    console.log(event.target.checked);
  }

  onSelectedGenreChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          text={this.state.searchText}
          changeText={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          bookmarkedChange={this.onBookmarkedChange}
          genre={this.state.selectedGenre}
          genreSelected={this.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie addMovie={this.addNewMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
