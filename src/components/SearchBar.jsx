import React, { Component } from 'react';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="search">Inclui o texto</label>
        <input id="search" type="text"
          value={searchText}
          onChange={onSearchTextChange} />
        <label htmlFor="bookmarked">Mostrar somente favoritos</label>
        <input id="bookmarked" type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange} />
        <label htmlFor="genre">Filtrar por gênero</label>
        <select id="genre" value={selectedGenre}
          onChange={onSelectedGenreChange}>
          {genreOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </form>
    );
  }
}

export default SearchBar;
