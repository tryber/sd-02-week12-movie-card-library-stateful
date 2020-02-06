import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    const propriedades = this.props;
    return (
      <form>
        <label>Inclui o texto</label><br />
        <input name="searchText" type="text" value={propriedades.searchText}
          onChange={propriedades.onSearchTextChange} /><br />
        <input name="bookmarkedOnly" type="checkbox" checked={propriedades.bookmarkedOnly}
          onChange={propriedades.onBookmarkedChange} />
        <label>Mostrar somente favoritos</label><br />
        <label>Filtrar por gênero</label><br />
        <select name="selectedGenre" onChange={propriedades.onSelectedGenreChange}
          value={propriedades.selectedGenre}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select><br />
      </form>
    );
  }
}

export default SearchBar;
