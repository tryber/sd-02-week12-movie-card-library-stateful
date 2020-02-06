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
    // this.filtrarPorText = this.filtrarPorText.bind(this);
    // this.filtrarPorGenero = this.filtrarPorGenero.bind(this);
    // this.filtrarPorBookmark = this.filtrarPorBookmark.bind(this);
    this.addicionarFilme = this.addicionarFilme.bind(this);
    this.listaFilmes = this.listaFilmes.bind(this);
  }

  changeHandlerText(event) {
    const { value } = event.target;
    this.setState({ searchText: value });
  }

  changeBookMarker() {
    const { bookmarkedOnly } = this.state;
    const retorno = bookmarkedOnly !== true;
    this.setState({ bookmarkedOnly: retorno });
  }

  changeGenre(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  // filtrarPorGenero(filmes, genero) {
  //   const  xz  = this.state;
  //   if (!genero) return filmes;
  //   return filmes.filter((filme) => filme.genre === genero);
  // }

  // filtrarPorBookmark(filmes, bookmark) {
  //   if (bookmark) return filmes.filter((filme) => filme.bookmarked);
  //   return filmes;
  // }

  addicionarFilme(event) {
    event.preventDefault();
    console.log('abc');
  }

  listaFilmes() {
    const { movies, searchText, selectedGenre, bookmarkedOnly } = this.state;
    const filmesTexto = movies
      .filter((filme) => (filme.title.includes(searchText)
        || filme.subtitle.includes(searchText) || filme.storyline.includes(searchText)));
    const filmesGenero = selectedGenre ? filmesTexto
      .filter((filme) => filme.genre === selectedGenre) : filmesTexto;
    return bookmarkedOnly ? filmesGenero.filter((filme) => filme.bookmarked) : filmesGenero;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.changeHandlerText}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.changeBookMarker}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.changeGenre}
        />
        <MovieList movies={this.listaFilmes()} />
        <AddMovie callbackAddFilme={this.addicionarFilme} />
      </div>
    );
  }
}

export default MovieLibrary;
