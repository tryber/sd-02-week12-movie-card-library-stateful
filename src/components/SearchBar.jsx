import React, { Component } from 'react';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class SearchBar extends Component {
  searchText() {
    return (
      <div>
        <label htmlFor="search">Inclui o texto</label>
        <input
          id="search"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </div>
    );
  }

  bookmarked() {
    return (
      <div>
        <label htmlFor="bookmarked">Mostrar somente favoritos</label>
        <input
          id="bookmarked"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </div>
    );
  }

  genre() {
    return (
      <div>
        <label htmlFor="genre">Filtrar por gênero</label>
        <select
          id="genre"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
        {genreOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
        </select>
      </div>
    );
  }

  render() {
    return (
      <form>
        {this.searchText()}
        {this.bookmarked()}
        {this.genre()}
      </form>
    );
  }
}

export default SearchBar;
