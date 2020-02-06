import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookmarkedOnly = this.updateBookmarkedOnly.bind(this);
    this.updateSelectedGenre = this.updateSelectedGenre.bind(this);
  }

  updateSearchText(event) {
    this.setState(
      { searchText: event.target.value },
    )
    this.setState((state) =>
      ({ movies: this.props.movies.filter(movie => movie.title.includes(state.searchText)
        || movie.subtitle.includes(state.searchText) || movie.storyline.includes(state.searchText)) }),
    )
  }

  updateBookmarkedOnly(event) {
    this.setState(
      { bookmarkedOnly: event.target.checked },
    )
  }

  updateSelectedGenre(event) {
    this.setState(
      { selectedGenre: event.target.value },
    )
  }

  // funcaosemnome = (array) => {
  //   this.setState((state) =>
  //     ({ movies: array.filter(movie => movie.title.includes(state.searchText)
  //       || movie.subtitle.includes(state.searchText) || movie.storyline.includes(state.searchText)) }),
  //   )
  // }

  render() {
    return (
      <section>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.updateSearchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.updateBookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.updateSelectedGenre}
        />
        <MovieList movies={this.state.movies} />
      </section>
    );
  }
}

export default MovieLibrary;
