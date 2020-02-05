import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { changeText, bookmarkedChange, genreSelected } = this.props;
    return (
      <div>
        <form>
          <label>
            SearchBar:
            <input type="text" name="searchBarText" onChange={(e) => changeText(e)} />
          </label>
          <br />
          <label>
            Favoritos:
            <input type="checkbox" name="bookMarked" onChange={(e) => bookmarkedChange(e)} />
          </label>
          <br />
          <label>
            Genero:
            <select name="select" onChange={(e) => genreSelected(e)}>
              <option value="">Todos</option>
              <option value="action">Acao</option>
              <option value="comedy">Comedia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
