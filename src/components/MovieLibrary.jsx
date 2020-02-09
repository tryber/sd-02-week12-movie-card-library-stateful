import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;
    this.setSearchedText = this.setSearchedText.bind(this);
    this.setBookMarkedOnly = this.setBookMarkedOnly.bind(this);
    this.setSelectedGenre = this.setSelectedGenre.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  setSearchedText(event) {
    this.setState({ searchText: event.target.value });
  }

  setBookMarkedOnly(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  setSelectedGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    console.log(this.state)
    return (
      <section>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.setSearchedText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.setBookMarkedOnly}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.setSelectedGenre}
        />
        <MovieList movies={movies} />
        <AddMovie />
      </section>
    );
  }
}

export default MovieLibrary;
