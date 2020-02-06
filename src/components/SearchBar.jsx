import React, { Component } from 'react';

function labelText(searchText, onSearchTextChange) {
  return (
    <label htmlFor="text">
      Inclui o texto:
      <input type="text" value={searchText} onChange={onSearchTextChange} id="text" />
    </label>
  );
}

function labelCheckbox(bookmarkedOnly, onBookmarkedChange) {
  return (
    <label htmlFor="checkbox">
      Mostrar somente favoritos
      <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} id="checkbox" />
    </label>
  );
}

function labelSelect(selectedGenre, onSelectedGenreChange) {
  return (
    <label htmlFor="select">
      Filtrar por gênero
      <select value={selectedGenre} onChange={onSelectedGenreChange} id="select">
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  );
}

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onBookmarkedChange,
      onSearchTextChange,
      bookmarkedOnly,
      onSelectedGenreChange,
      selectedGenre,
    } = this.props;

    return (
      <form>
        {labelText(searchText, onSearchTextChange)}
        {labelCheckbox(bookmarkedOnly, onBookmarkedChange)}
        {labelSelect(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
