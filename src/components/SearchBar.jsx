import React, { Component } from 'react';

class SearchBar extends Component {
  inputText(a) {
    const { onSearchTextChange } = this.props;
    return (
      <label htmlFor="InputText">
        <p>Inclui o texto</p>
        <input type="text" id="InputText" name="InputText" value={a} onChange={onSearchTextChange} />
      </label>
    );
  }

  checkbox(a) {
    const { onBookmarkedChange } = this.props;
    return (
      <label htmlFor="InputCheck">
        <input id="InputCheck" type="checkbox" checked={a} onChange={onBookmarkedChange} />
        Mostrar somente favoritos
      </label>
    );
  }

  select(a) {
    const { onSelectedGenreChange } = this.props;
    return (
      <div>
        <label htmlFor="Select">
          Filtrar por gênero
          <select
            id="Select"
            name="select"
            value={a}
            onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <form>
          {this.inputText(searchText)}
          <br />
          {this.checkbox(bookmarkedOnly)}
          <br />
          {this.select(selectedGenre)}
        </form>
      </div>
    );
  }
}

export default SearchBar;
