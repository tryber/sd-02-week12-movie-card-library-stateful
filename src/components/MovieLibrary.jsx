import React, { Component } from 'react';
import SearchBar from './SearchBar'

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }
  changeHandler = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  changeBookMarker = () => {
    const booleano = this.state.bookmarkedOnly
    const retorno = booleano ? false : true
    this.setState({ bookmarkedOnly: retorno })
  }
  changeGenre = (event) => {
    this.setState({ selectedGenre: event.target.value })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.changeHandler}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.changeBookMarker}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.changeGenre}
        />
      </div>)
  }
}

export default MovieLibrary;
