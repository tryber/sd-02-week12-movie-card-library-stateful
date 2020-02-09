import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

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
    this.addMovie = this.addMovie.bind(this);
  }

  updateSearchText(event) {
    this.setState(
      { searchText: event.target.value },
    );
  }

  updateBookmarkedOnly(event) {
    this.setState(
      { bookmarkedOnly: event.target.checked },
    );
  }

  updateSelectedGenre(event) {
    this.setState(
      { selectedGenre: event.target.value },
    );
  }

  filterMovies(movies) {
    const textFilteredMovies = movies.filter((movie) => movie.title.includes(this.state.searchText)
      || movie.subtitle.includes(this.state.searchText)
      || movie.storyline.includes(this.state.searchText));
    const bookmarkedFilteredMovies = this.state.bookmarkedOnly
      ? movies.filter((movie) => movie.bookmarked) : movies;
    const genreFilteredMovies = this.state.selectedGenre !== ''
      ? movies.filter((movie) => movie.genre === this.state.selectedGenre) : movies;

    return movies.filter((movie) => textFilteredMovies.includes(movie)
      && bookmarkedFilteredMovies.includes(movie)
      && genreFilteredMovies.includes(movie),
    );
  }

  addMovie(newMovie) {
    this.setState(
      {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies: [...this.state.movies, newMovie],
      }
    );
  }

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
        <MovieList movies={this.filterMovies(this.state.movies)} />
        <AddMovie onClick={this.addMovie} />
      </section>
    );
  }
}

export default MovieLibrary;
