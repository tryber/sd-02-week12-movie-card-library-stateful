import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    AddMovie.initialState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.state = AddMovie.initialState;
  }

  updateTitle = (event) => {
    this.setState(
      { title: event.target.value }
    );
  }

  updateSubtitle = (event) => {
    this.setState(
      { subtitle: event.target.value }
    );
  }

  updateImagePath = (event) => {
    this.setState(
      { imagePath: event.target.value }
    );
  }

  updateStoryline = (event) => {
    this.setState(
      { storyline: event.target.value }
    );
  }

  updateRating = (event) => {
    this.setState(
      { rating: Number(event.target.value) }
    );
  }

  updateGenre = (event) => {
    this.setState(
      { genre: event.target.value }
    );
  }

  resetAddMovie = () => {
    this.props.onClick(this.state);
    this.setState(AddMovie.initialState);
  }

  render() {
    return (
      <form>
        <label>Título<input type="text" value={this.state.title} onChange={this.updateTitle} /></label>
        <label>Subtítulo<input type="text" value={this.state.subtitle} onChange={this.updateSubtitle} /></label>
        <label>Imagem<input type="text" value={this.state.imagePath} onChange={this.updateImagePath} /></label>
        <label>Sinopse<textarea value={this.state.storyline} onChange={this.updateStoryline} /></label>
        <label>Avaliação<input type="number" value={this.state.rating} onChange={this.updateRating} /></label>
        <label>Gênero
          <select value={this.state.genre} onChange={this.updateGenre}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button onClick={this.resetAddMovie}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
