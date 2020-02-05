import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          Inclui o texto:
          <input
            name='isGoing'
            type='text'
            value={this.searchText}
            onChange={this.onSearchTextChange}
          />
        </label>
        <label>
          Mostrar somente favoritos
          <input
            name='isGoing'
            type='checkbox'
            checked={this.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
          />
        </label>
        <label>
          Filtrar por gênero
          <select value={this.selectGenre} onChange={this.onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
