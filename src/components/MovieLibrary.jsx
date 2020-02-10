import React, { Component } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList'
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies
    }
    this.upSearchText = this.upSearchText.bind(this)
    this.upBookmarked = this.upBookmarked.bind(this)
    this.changeGenre = this.changeGenre.bind(this)
  }

  upSearchText(event) {
    this.setState({
      searchText: event.target.value
    });
  }

  upBookmarked(event) {
    this.setState(
      {bookmarkedOnly: event.target.checked}
    );
  }

  changeGenre(event) {
    this.setState({
      selectedGenre: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={(event) => this.upSearchText(event)}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={(event) => this.upBookmarked(event)}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={(event) => this.changeGenre(event)}/>
        <MovieList movies={this.state.movies}/>
        <AddMovie/>
      </div>
        )
      }
  }
    export default MovieLibrary;
