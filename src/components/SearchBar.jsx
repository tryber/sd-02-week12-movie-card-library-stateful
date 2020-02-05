import React, { Component } from 'react';

class SearchBar extends Component {
//   constructor(props){

//   this.searchText = this.searchText.bind(this);
//   this.onSearchTextChange = this.onSearchTextChange.bind(this);
//   this.bookmarkedOnly = this.bookmarkedOnly.bind(this);
//   this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
//   this.selectedGenre = this.onSelectedGenreChange.bind(this);
//   this.searchText = this.searchText.bind(this);  
// }

  searchText = ""
  onSearchTextChange = () =>
  bookmarkedOnly = Boolean
  onBookmarkedChange = () =>
  selectedGenre = ""
  onSelectedGenreChange = () =>

  render() {
    return (
      <form>
        <label>
          Inclui o texto:
          <input
            
            type='text'
            value={this.searchText}
            onChange={this.onSearchTextChange}
          />
        </label>
        <label>
          Mostrar somente favoritos
          <input
           
            type='checkbox'
            checked={this.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
          />
        </label>
        <label>
          Filtrar por gênero
          <select value={this.selectGenre} onChange={this.onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
