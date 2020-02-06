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
    this.createMovieCard = this.createMovieCard.bind(this);
  }

  createMovieCard(value) {
    this.setState((state) => ({ movies: state.movies.concat(value) }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar 
          searchText={this.state.searchText}
          onSearchTextChange={this.state.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.state.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.state.onSelectedGenreChange}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.createMovieCard} />
      </div>
    );
  }
}

export default MovieLibrary;
