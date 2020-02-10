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
    this.onClickAddMovie = this.onClickAddMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  onClickAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
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

  filterBookMarkedMovies(movies) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly === true) {
      return movies.filter((movie) => movie.bookmarked === true);
    }
    return movies;
  }

  filterByGenre(movies) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return movies.filter((movie) => movie.genre === selectedGenre);
    }
    return movies;
  }

  filterBySearch(movies) {
    const { searchText } = this.state;
    const lowerCaseSearchText = searchText.toLowerCase();
    if (searchText !== '') {
      return movies.filter((movie) => {
        const { title, subtitle, storyline } = movie;
        const lowerCaseTitle = title.toLowerCase();
        const lowerCaseSubtitle = subtitle.toLowerCase();
        const lowerCaseStoryline = storyline.toLowerCase();

        return lowerCaseTitle.includes(lowerCaseSearchText)
          || lowerCaseSubtitle.includes(lowerCaseSearchText)
          || lowerCaseStoryline.includes(lowerCaseSearchText);
      });
    }
    return movies;
  }

  filterMovies(movies) {
    const bookmarkedMovies = this.filterBookMarkedMovies(movies);
    const genrefied = this.filterByGenre(bookmarkedMovies);
    const searched = this.filterBySearch(genrefied);

    return searched;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredMovies = this.filterMovies(movies);
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
        <MovieList movies={filteredMovies} />
        <AddMovie onClick={this.onClickAddMovie} />
      </section>
    );
  }
}

export default MovieLibrary;
