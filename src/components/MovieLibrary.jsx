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
    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateBookmarked = this.updateBookmarked.bind(this);
    this.updateSelectedGenre = this.updateSelectedGenre.bind(this);
    this.filtered = this.filtered.bind(this);
  }

  createMovieCard(value) {
    this.setState((state) => ({ movies: state.movies.concat(value) }));
  }

  filtered(value) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let arrFilmes = value;
    if (bookmarkedOnly) arrFilmes = arrFilmes.filter((filme) => filme.bookmarked === true);
    if (searchText.length > 0) {
      arrFilmes = arrFilmes.filter((filme) => {
        arrFilmes = filme.title.toLowerCase().includes(searchText.toLowerCase()) ||
        filme.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        filme.storyline.toLowerCase().includes(searchText.toLowerCase());
        return arrFilmes;
      });
    }
    if (selectedGenre.length > 0) {
      arrFilmes = arrFilmes.filter((filme) => filme.genre === selectedGenre);
      return arrFilmes;
    }
    return arrFilmes;
  }

  updateSearchText(e) {
    const { value } = e.target;
    this.setState(() => ({ searchText: value }));
  }

  updateBookmarked(e) {
    const { checked } = e.target;
    this.setState(() => ({ bookmarkedOnly: checked }));
  }

  updateSelectedGenre(e) {
    const { value } = e.target;
    this.setState(() => ({ selectedGenre: value }));
  }

  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(e) => this.updateSearchText(e)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(e) => this.updateBookmarked(e)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(e) => this.updateSelectedGenre(e)}
        />
        <MovieList movies={this.filtered(this.state.movies)} />
        <AddMovie onClick={this.createMovieCard} />
      </div>
    );
  }
}

export default MovieLibrary;
