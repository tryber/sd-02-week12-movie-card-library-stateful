import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList'
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

    this.upSearchText = this.upSearchText.bind(this);

    this.upBookmarked = this.upBookmarked.bind(this);

    this.changeGenre = this.changeGenre.bind(this);

    this.adicionaNovoFilme = this.adicionaNovoFilme.bind(this);

    this.filtrafilmes = this.filtrafilmes.bind(this);
  }

  upSearchText(event) {
    this.setState({ searchText: event.target.value });
  }

  upBookmarked(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  changeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filtrafilmes() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const filterBookmark = bookmarkedOnly ? movies.filter((movie) => movie.bookmarked) : movies;
    const filterGenre = selectedGenre
      ? filterBookmark.filter((movie) => movie.genre === selectedGenre) : filterBookmark;
    const filterText = filterGenre.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));

    return filterText;
  }

  adicionaNovoFilme(novoFilme) {
    this.setState((state) => ({ movies: [...state.movies, novoFilme] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(event) => this.upSearchText(event)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(event) => this.upBookmarked(event)}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(event) => this.changeGenre(event)} />
        <MovieList movies={this.filtrafilmes(this.state)} />
        <AddMovie onClick={this.adicionaNovoFilme} />
      </div>
    )
  }
}
export default MovieLibrary;
