import React, { Component } from 'react';

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
      movies: this.props.movies,
    };
    this.filter = this.filter.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(e) {
    const value = e.target.value;
    this.setState({ searchText: value, });
  }

  onBookmarkedChange(e) {
    const { checked } = e.target;
    this.setState({ bookmarkedOnly: checked, });
  }

  onSelectedGenreChange(e) {
    const value = e.target.value;
    this.setState({ selectedGenre: value, });
  }

  onClick(newState) {
    const array = [...this.state.movies, newState];
    this.setState({
      ...this.state,
      movies: [...array,]
    });
  }

  filter(state) {
    const { searchText, bookmarkedOnly, selectedGenre } = state;
    let arr = state.movies;

    arr = [...this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.subtitle.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.storyline.toLowerCase().includes(searchText.toLowerCase())
      ),
    ];

    arr = [...(bookmarkedOnly) ?
      arr.filter((movie) => movie.bookmarked) :
      arr,
    ];

    arr = [...(selectedGenre.length > 0) ?
      arr.filter((movie) => movie.genre === selectedGenre) :
      arr,
    ];

    return arr;
  }

  render() {
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filter(this.state)} />
        <AddMovie onClick={this.onClick} />
      </div>
    );
  }
}

export default MovieLibrary;
