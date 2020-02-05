import React, { Component } from 'react';

class SearchBar extends Component {
  inputText () {
    return (
      <label>
        Inclui o texto:
        <input
          type="text"
          onChange={this.props.onSearchTextChange}
          value={this.props.searchText}
        />
      </label>
    );
  }

  inputCheckbox () {
    return (
      <label>
        <input
          type="checkbox"
          onChange={this.props.onBookmarkedChange}
          checked={this.props.bookmarkedOnly}
        />
        Mostrar somente favoritos:
    </label>
    );
  }

  selectBox () {
    return (
      <label>
        Filtrar por gênero:
        <select
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

  render () {
    return (
      <form>
        <fieldset>
          {this.inputText()} 
          <br />
          {this.inputCheckbox()}
          <br />
          {this.selectBox()}
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
