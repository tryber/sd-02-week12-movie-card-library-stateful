import React, { Component } from 'react';
import SearchBar from './SearchBar'
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
    }
  }

procuraTexto = () => {
  this.setState((state) => {
    return state
  })
}

adicionaFilme(callback){
  console.log(callback)
}

  render() {
    return (
      <div>
        <h2>My awesome Movie Library</h2>
        <SearchBar
          searchText={this.state.procuraTexto}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.adicionaFilme}/>
      </div>
    );
  }
}

export default MovieLibrary;
