import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { searchText } = this.props;
    const { onSearchTextChange } = this.props;
    const { bookmarkedOnly } = this.props;
    const { onBookmarkedChange } = this.props;
    const { selectedGenre } = this.props;
    const { onSelectedGenreChange } = this.props;
    return (
      <form>
        <label htmlFor="includes-text">
          Inclui o texto:
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            id="includes-text"
          />
        </label>
        <label htmlFor="show-favs">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="show-favs"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label htmlFor="genre-filter">
            Filtrar por gênero
            <select value={selectedGenre} onChange={onSelectedGenreChange} id="genre-filter">
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </label>
      </form>
    );
  }
}

export default SearchBar;
