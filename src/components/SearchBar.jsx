import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const {
      searchText, bookmarkedOnly, selectedGenre,
      onSearchTextChange, onBookmarkedChange, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="text">
          Inclui o texto
          <input id="text" type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="bookmarked">
          Mostrar somente favoritos
          <input
            id="bookmarked"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label htmlFor="genre">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
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
