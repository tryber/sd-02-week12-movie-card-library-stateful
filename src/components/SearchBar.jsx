import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <form>
        <label>
          Inclui o texto:
          <input
            type="text"
            onChange={this.props.onSearchTextChange}
            value={this.props.searchText}
          />
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={this.props.onBookmarkedChange}
            checked={this.props.bookmarkedOnly}
          />
          Mostrar somente favoritos:
        </label>
        <br />
        <label>
        Filtrar por gênero:
          <select
            onChange={this.props.onSelectedGenreChange}
            value={this.props.selectedGenre}
          >
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
