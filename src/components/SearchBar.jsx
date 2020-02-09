import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
      <div>
        <form>

          <label>
            Inclui o texto:
          <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange}>
          </input>
          </label>

          <br></br>

          <label>
            Mostrar somente favoritos
            <input type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}>
            </input>
          </label>

          <br></br>

          <label>
            Filtrar por gênero
            <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
                <option value="">Todos</option>
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;
