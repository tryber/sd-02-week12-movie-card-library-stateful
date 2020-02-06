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
    this.changeHandlerText = this.changeHandlerText.bind(this);
    this.changeBookMarker = this.changeBookMarker.bind(this);
    this.changeGenre = this.changeGenre.bind(this);
    this.filtrarPorText = this.filtrarPorText.bind(this);
    this.filtrarPorGenero = this.filtrarPorGenero.bind(this);
    this.filtrarPorBookmark = this.filtrarPorBookmark.bind(this);
    this.addicionarFilme = this.addicionarFilme.bind(this);
  }
  changeHandlerText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }
  changeBookMarker() {
    const booleano = this.state.bookmarkedOnly;
    const retorno = booleano ? false : true;
    this.setState({ bookmarkedOnly: retorno });
  }
  changeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }
  filtrarPorText(filmes, texto) {
    return filmes.filter(filme => (filme.title.includes(texto) ||
      filme.subtitle.includes(texto) || filme.storyline.includes(texto)));
  }
  filtrarPorGenero(filmes, genero) {
    if (!genero) return filmes;
    return filmes.filter((filme) => filme.genre === genero)
  }
  filtrarPorBookmark(filmes, bookmark) {
    if (bookmark) return filmes.filter((filme) => filme.bookmarked);
    return filmes;
  }
  addicionarFilme(event) {
    event.preventDefault();
    console.log('abc');
  }

  render() {
    const filmes = this.state.movies;
    const conteudoFiltradoPorTexto = this.filtrarPorText(filmes, this.state.searchText);
    const conteudoFiltradoPorGenero = this.
      filtrarPorGenero(conteudoFiltradoPorTexto, this.state.selectedGenre);
    const conteudoFiltradoPorBookmark = this.
      filtrarPorBookmark(conteudoFiltradoPorGenero, this.state.bookmarkedOnly);
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeHandlerText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookMarker}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeGenre}
        />
        <MovieList movies={conteudoFiltradoPorBookmark} />
        <AddMovie callbackAddFilme={this.addicionarFilme} />
      </div>);
  }
}

export default MovieLibrary;
