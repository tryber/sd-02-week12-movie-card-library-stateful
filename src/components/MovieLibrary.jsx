import React, { Component, useEffect } from 'react';

import MovieList from './MovieList';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';


class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    }
    this.data = this.props.movies;
  }

  onSearchTextChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
      movies: this.data.filter(movie =>
        movie.title.toLowerCase().includes(value.toLowerCase()))
    });
  }

  onBookmarkedChange = (e) => {
    const { checked } = e.target;
    this.setState({
      bookmarkedOnly: checked,
      movies: (checked) ?
        this.data.filter(movie => movie.bookmarked) :
        this.data
    });
  }

  onSelectedGenreChange = (e) => {
    const value = e.target.value;
    this.setState({
      selectedGenre: value,
      movies: this.data.filter(movie => {
        return (value.length > 0) ?
          movie.genre === value :
          true
      })
    });
  }

  onClick = (newState) => {
    this.data[this.data.length] = newState;
    this.setState({
      ...this.state,
      movies: this.data
    });
  }

  test = (e) => {
    this.setState({
      bookmarkedOnly: e.target.checked
    })
  }

  render() {
    return (
      <>
        <h2>My awesome Movie Library</h2>
        <MovieList movies={this.state.movies} />
        <AddMovie onClick={this.onClick} />
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <input type="checkbox" value={this.state.bookmarkedOnly} onChange={this.test} />
      </>
    )
  }
}

export default MovieLibrary;
