import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    const { selectedGenre } = this.props;
    const { onSelectedGenreChange } = this.props;
    
    return (
      <form>
        <label>
          Inclui o texto:
          <input
            type='text'
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label>
          Mostrar somente favoritos
          <input
            type='checkbox'
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label>
          Filtrar por gênero
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option value=''>Todos</option>
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
