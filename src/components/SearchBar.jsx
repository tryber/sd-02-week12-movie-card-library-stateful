import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <form>
        <label>Inclui o texto</label>
        <input type = "text" value = {this.props.searchText} onChange={this.props.onSearchTextChange}/>
        <label>Mostrar somente favoritos</label>
        <input type = "checkbox" checked = {this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}/>
        <label>Filtrar por gênero</label>
        <select value = {this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </form>
    )
  }
}

export default SearchBar;
