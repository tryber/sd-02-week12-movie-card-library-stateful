import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Nome do Filme:
          <input>
          </input>
          </label>
          <br></br>
          <label>
            Gênero do Filme:
            <input>
            </input>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;
