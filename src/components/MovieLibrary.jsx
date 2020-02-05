import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    }
  }

  onSearchTextChange(e) {
    console.log(e.target.value);
  }

  onBookmarkedChange(e) {
    console.log(e.target.checked);
  }

  onSelectedGenreChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          selectedGenre={this.onSelectedGenreChange}
          BookmarkedChange={this.onBookmarkedChange}
          SearchTextChange={this.onSearchTextChange}
        />
        <MovieList
          movies={this.props.movies}
        />
        <AddMovie />
      </div>
    );
  }
}
export default MovieLibrary;