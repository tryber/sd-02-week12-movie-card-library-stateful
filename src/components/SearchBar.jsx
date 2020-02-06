import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label htmlFor="text">
          Inclui o texto:
          <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} id="text" />
        </label>
        <label htmlFor="checkbox">
          Mostrar somente favoritos
          <input type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} id="checkbox" />
        </label>
        <label htmlFor="select">
          Filtrar por gênero
          <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange} id="select">
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
