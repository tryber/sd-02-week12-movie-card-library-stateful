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
      movies: this.props.movies,
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.criaFilme = this.criaFilme.bind(this);
    this.filtraFilmes = this.filtraFilmes.bind(this);
  }

  procuraTexto() {
    this.setState(this.state.searchText);
  }

  updateSearchText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  updateFavorite(event) {
    const { checked } = event.target;
    this.setState({ bookmarkedOnly: checked });
  }

  updateGenre(e) {
    const { value } = e.target;
    this.setState({ selectedGenre: value });
  }

  filtraFilmes(valor) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filmes = valor;
    if (bookmarkedOnly) filmes = filmes.filter((filme) => filme.bookmarked === true);
    if (searchText.length > 0) {
      filmes = filmes.filter((filme) => {
        filmes = filme.title.toLowerCase().includes(searchText.toLowerCase()) ||
        filme.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        filme.storyline.toLowerCase().includes(searchText.toLowerCase());
        return filmes;
      });
    }
    if (selectedGenre.length > 0) {
      filmes = filmes.filter((filme) => filme.genre === selectedGenre);
      return filmes;
    }
    return filmes;
  }

  criaFilme(value) {
    this.setState((state) => ({ movies: state.movies.concat(value) }));
  }

  render() {
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.updateSearchText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.updateFavorite(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.updateGenre(event)}
        />
        <MovieList movies={this.filtraFilmes(this.state.movies)} />
        <AddMovie onClick={this.criaFilme} />
      </div>
    );
  }
}

export default MovieLibrary;
