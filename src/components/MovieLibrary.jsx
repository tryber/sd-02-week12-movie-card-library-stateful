import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.createNew = this.createNew.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filter = this.filter.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(e) {
    const { value } = e.target;
    this.setState(() => ({ searchText: value }));
  }

  onBookmarkedChange(e) {
    const { checked } = e.target;
    this.setState(() => ({ bookmarkedOnly: checked }));
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    this.setState(() => ({ selectedGenre: value }));
  }

  filter(arr) {
    let aux = arr;
    const { searchText, selectedGenre, bookmarkedOnly } = this.state;
    if (searchText !== '') {
      aux = this.state.movies.filter((element) => (element.title.includes(searchText)
        || element.subtitle.includes(searchText)
        || element.storyline.includes(searchText)));
    }
    if (selectedGenre !== '') {
      aux = aux.filter(
        (element) => element.genre === selectedGenre,
      );
    }
    if (bookmarkedOnly) {
      aux = aux.filter(
        (element) => element.bookmarked === bookmarkedOnly);
    }
    return aux;
  }

  createNew(e) {
    this.setState((state) => ({ movies: [...state.movies, e] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.onSearchTextChange(e)}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={(e) => this.onBookmarkedChange(e)}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.onSelectedGenreChange(e)}
        />
        <MovieList
          movies={this.filter(this.state.movies)}
        />
        <AddMovie onClick={this.createNew} />
      </div>
    );
  }
}
export default MovieLibrary;
