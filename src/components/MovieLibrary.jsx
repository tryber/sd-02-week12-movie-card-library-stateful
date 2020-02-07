import React, { Component, } from 'react';

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
    this.filter = this.filter.bind(this);
  }

  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({
      searchText: value
    });
  }

  onBookmarkedChange(e) {
    const { checked } = e.target;
    this.setState({
      bookmarkedOnly: checked
    });
  }

  onSelectedGenreChange(e) {
    const value = e.target.value;
    this.setState({
      selectedGenre: value,
    });
  }

  filter(state) {
    const { searchText, bookmarkedOnly, selectedGenre } = state;
    let arr = state.movies;

    arr = [...this.state.movies.filter(movie =>
        movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
        movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      )
    ];

    arr = [...(bookmarkedOnly) ?
        arr.filter(movie => movie.bookmarked) :
        arr
    ];

    arr = [...(selectedGenre.length > 0) ?
      arr.filter(movie => movie.genre === selectedGenre) :
      arr
    ];

    return arr;
  }

  onClick = (newState) => {
    const array = [...this.state.movies, newState];
    this.setState({
      ...this.state,
      movies: [...array ]
    });
  }

  render() {
    return (
      <>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange.bind(this)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange.bind(this)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange.bind(this)}
        />
        <MovieList movies={this.filter(this.state)} />
        <AddMovie onClick={this.onClick} />
      </>
    )
  }
}

export default MovieLibrary;
