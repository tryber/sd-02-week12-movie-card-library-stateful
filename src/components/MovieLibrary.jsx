import React, { Component } from 'react';
import SearchBar from './SearchBar'

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    }
  }

  render() {
    return (
      <div>
        <SearchBar 
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <h2>My awesome Movie Library</h2>
      </div>
    );
  }
}

export default MovieLibrary;
