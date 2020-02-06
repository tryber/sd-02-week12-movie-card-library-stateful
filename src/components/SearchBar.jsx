import React, { Component } from 'react';

class SearchBar extends Component {
  includeText() {
    return (
      <label htmlFor="title">
        Inclui o texto:
        <input
          id="title"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  showFavorites() {
    return (
      <label htmlFor="bookmarked">
        Mostrar somente favoritos:
        <input
          id="bookmarked"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  genreFilter() {
    return (
      <label htmlFor="genre">
        Filtrar por gênero
        <select
          id="genre"
          onChange={this.props.onSelectedGenreChange}
          value={this.props.selectedGenre}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <fieldset>
          {this.includeText()}<br />
          {this.showFavorites()}
          <br />
          {this.genreFilter()}
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
