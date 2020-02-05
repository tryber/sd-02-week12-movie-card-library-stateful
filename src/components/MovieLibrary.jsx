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
      movies: this.props.movies,
    };
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    this.setState(() => ({ searchText: value }))
  }

  onBookmarkedChange(e) {
    const { checked } = e.target;
    this.setState(() => ({ bookmarkedOnly: checked }));
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    this.setState(() => ({ selectedGenre: value }))
  }

  render() {
    const {searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
        <MovieList
          movies={movies}
        />
        <AddMovie />
      </div>
    );
  }
}
export default MovieLibrary;