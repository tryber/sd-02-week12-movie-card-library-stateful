import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.createInputSearch = this.createInputSearch.bind(this);
    this.createCheckbox = this.createCheckbox.bind(this);
    this.createGender = this.createGender.bind(this);
  }

  createInputSearch() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="text">
        Inclui o texto:
        <input
          id="text"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  createCheckbox() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label htmlFor="checkbox">
        Mostrar somente favoritos
        <input
          id="checkbox"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  createGender() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    console.log(this.props)
    return (
      <label htmlFor="gender">
        Filtrar por gênero
        <select
          id="gender"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
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
        {this.createInputSearch()}
        <br />
        {this.createCheckbox()}
        <br />
        {this.createGender()}
        <br />
      </form>
    );
  }
}

export default SearchBar;
