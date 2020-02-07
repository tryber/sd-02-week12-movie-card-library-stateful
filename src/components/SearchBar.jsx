import React, { Component } from 'react';

class SearchBar extends Component {
  inputText() {
    return (
      <label htmlFor="texto">
        Inclui o texto:
        <input
          id="texto"
          type="text"
          onChange={this.props.onSearchTextChange}
          value={this.props.searchText}
        />
      </label>
    );
  }

  inputCheckbox() {
    return (
      <label htmlFor="check">
        <input
          id="check"
          type="checkbox"
          onChange={this.props.onBookmarkedChange}
          checked={this.props.bookmarkedOnly}
        />
        Mostrar somente favoritos:
    </label>
    );
  }

  selectBox() {
    return (
      <label htmlFor="selectGen">
        Filtrar por gênero:
        <select
          id="selectGen"
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
        {<fieldset>
          {this.inputText()}
          <br />
          {this.inputCheckbox()}
          <br />
          {this.selectBox()}
        </fieldset>}
      </form>
    );
  }
}

export default SearchBar;
