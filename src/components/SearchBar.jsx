import React, { Component } from 'react';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          <div>
            <label>Inclui o texto</label>
            <input type="text" value={searchText} onChange={onSearchTextChange} />
          </div>
          <div>
            <label>Mostrar somente favoritos</label>
            <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}/>
          </div>
          <div>
            <label>Filtrar por gênero</label>
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
              {genreOptions.map(option => (
                <option key={option.value} value={option.value} >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    )}
}

export default SearchBar;
