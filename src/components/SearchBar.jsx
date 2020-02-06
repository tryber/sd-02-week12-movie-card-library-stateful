import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.labelText = this.labelText.bind(this);
    this.labelCheckbox = this.labelCheckbox.bind(this);
    this.labelSelect = this.labelSelect.bind(this);
  }

  labelText(searchText, onSearchTextChange) {
    return (
      <label htmlFor="text">
        Inclui o texto:
        <input type="text" value={searchText} onChange={onSearchTextChange} id="text" />
      </label>
    );
  }

  labelCheckbox(bookmarkedOnly, onBookmarkedChange) {
    return (
      <label htmlFor="checkbox">
        Mostrar somente favoritos
        <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} id="checkbox" />
      </label>
    );
  }

  labelSelect(selectedGenre, onSelectedGenreChange) {
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
        {this.labelText(searchText, onSearchTextChange)}
        {this.labelCheckbox(bookmarkedOnly, onBookmarkedChange)}
        {this.labelSelect(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
