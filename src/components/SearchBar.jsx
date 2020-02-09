import React, { Component } from 'react';

class SearchBar extends Component {
  includesText() {
    return (
      <label htmlFor="search">
        Inclui o texto:
        <input
          type="text"
          id="search"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  includesFavorites() {
    return (
      <label htmlFor="favorito">
        Mostrar somente favoritos
          <input
            type="checkbox"
            id="favorito"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
      </label>
    );
  }

  includesGenero() {
    return (
      <label htmlFor="genero">
        Filtrar por gênero
        <select
          value={this.props.selectedGenre}
          id="genero"
          onChange={this.props.onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.includesText()}
          <br />
          {this.includesFavorites()}
          <br />
          {this.includesGenero()}
        </form>
      </div>
    );
  }
}

export default SearchBar;
