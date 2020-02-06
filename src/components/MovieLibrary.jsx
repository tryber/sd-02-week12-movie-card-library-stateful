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
    // this.onSearchTextChange = this.onSearchTextChange.bind(this)
    // this.onBookmarkedChange = this.onBookmarkedChange.bind(this)
    // this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this)
}

// onSearchTextChange () {}

// onBookmarkedChange () {}

// onSelectedGenreChange () {}



  render() {
    const { movies } = this.state;
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state
    return (
      <div>
        <h2> My awesome movie library </h2>
        {/* <SearchBar
          searchText={searchText}
          onSearchTextChange={onSearchTextChange()}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange()}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange()}a
        /> */}
        <MovieList movies={movies} />
        {/* <AddMovie onClick={onClick} /> */}
      </div>
    );
  }
}

export default MovieLibrary;
