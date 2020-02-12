import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.generateGenreField = this.generateGenreField.bind(this);
  }

  generateGenreField() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genre">
        Filtrar por gênero
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
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
      searchText, bookmarkedOnly,
      onSearchTextChange, onBookmarkedChange,
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
        {this.generateGenreField()}
      </form>
    );
  }
}

export default SearchBar;
