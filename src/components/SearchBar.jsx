import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    const { selectedGenre, BookmarkedChange, SearchTextChange } = this.props;
    return (
      <div>
        <form>
          <label>
            <p> Inclui o Texto</p>
            <input type="text" name="InputText" onChange={(e) => SearchTextChange(e)} />
          </label>
          <br />
          <label>
            <input type="checkbox" onChange={(e) => BookmarkedChange(e)} />
            Mostrar Somente Favoritos
          </label>
          <br />
          <label>
            Filtrar Por Genero
            <select name="select" onChange={(e) => selectedGenre(e)}>
              <option value="">Todos</option>
              <option value="1">Ação</option>
              <option value="2">Comedia</option>
              <option value="3">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
