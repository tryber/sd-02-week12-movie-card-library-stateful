import React, { Component } from 'react';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(e) {
    const arrMovies = this.props.movies;
    const { searchText } = this.state;
    const { value } = e.target;
    this.setState(() => ({
      searchText: value,
      movies: arrMovies.filter(element => {
        return (element.title.includes(searchText) || element.subtitle.includes(searchText) ||
          element.storyline.includes(searchText));
      })
    }));
  }

  onBookmarkedChange(e) {
    const { checked } = e.target;
    this.setState(() => ({ bookmarkedOnly: checked }))
    this.setState((state) => ({ movies: (state.bookmarkedOnly) ? state.movies.filter(element => element.bookmarked === state.bookmarkedOnly) : this.props.movies }));
  }

  onSelectedGenreChange(e) {
    const { value } = e.target;
    this.setState(() => ({ selectedGenre: value }));
    this.setState((state) => ({ movies: state.movies.filter(element => element.genre === state.selectedGenre) 
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
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
          movies={movies}
        />
        <AddMovie />
      </div>
    );
  }
}
export default MovieLibrary;