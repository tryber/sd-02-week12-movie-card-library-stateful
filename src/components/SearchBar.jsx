import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.inputText = this.inputText.bind(this);
    this.inputBookMarked = this.inputBookMarked.bind(this);
    this.selectFields = this.selectFields.bind(this);
  }

  inputText(onSearchTextChange) {
    const { searchText } = this.props;
    return (
      <label htmlFor="title">
        Inclui o texto:
        <input
          type="text"
          id="title"
          value={searchText}
          name="searchText"
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  inputBookMarked(onBookmarkedChange) {
    const { bookmarkedOnly } = this.props;
    return (
      <label htmlFor="bookmarked">
        Mostrar somente favoritos:
        <input
          type="checkbox"
          id="bookmarked"
          checked={bookmarkedOnly}
          name="bookmarkedOnly"
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  selectFields(onSelectedGenreChange) {
    const { selectedGenre } = this.props;
    return (
      <label htmlFor="genre">
        Filtrar por gênero:
        <select
          id="genre"
          name="selectedGenre"
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
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;
    return (
      <div>
        <form>
          {this.inputText(onSearchTextChange)}
          <br />
          {this.inputBookMarked(onBookmarkedChange)}
          <br />
          {this.selectFields(onSelectedGenreChange)}
        </form>
      </div>
    );
  }
}

export default SearchBar;
