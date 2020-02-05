import React, { Component } from 'react';

class SearchBar extends Component {

  inputFields = (onSearchTextChange, onBookmarkedChange) => {
    const { searchText, bookmarkedOnly } = this.props;
    return (
      <div>
        <label>
          Inclui o texto:
          <input type="text" value={searchText} name="searchText" onChange={onSearchTextChange} />
        </label>
        <br />
        <label>
          Mostrar somente favoritos:
          <input type="checkbox" checked={bookmarkedOnly} name="bookmarkedOnly" onChange={onBookmarkedChange} />
        </label>
        <br />
      </div>
    )
  }

  selectFields = (onSelectedGenreChange) => {
    const{ selectedGenre } = this.props;
    return (
      <label>
        Filtrar por gênero:
        <select name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    )
  }

  render() {
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          {this.inputFields(onSearchTextChange, onBookmarkedChange)}
          {this.selectFields(onSelectedGenreChange)}
        </form>
      </div>
    );
  }
}

export default SearchBar;
