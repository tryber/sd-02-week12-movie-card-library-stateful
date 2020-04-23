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
    this.updateTitle = this.updateTitle.bind(this);
    this.updateSubtitle = this.updateSubtitle.bind(this);
    this.updateImagePath = this.updateImagePath.bind(this);
    this.updateStoryline = this.updateStoryline.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateGenre = this.updateGenre.bind(this);
    this.resetAddMovie = this.resetAddMovie.bind(this);
  }

  updateTitle(event) {
    this.setState(
      { title: event.target.value },
    );
  }

  updateSubtitle(event) {
    this.setState(
      { subtitle: event.target.value },
    );
  }

  updateImagePath(event) {
    this.setState(
      { imagePath: event.target.value },
    );
  }

  updateStoryline(event) {
    this.setState(
      { storyline: event.target.value },
    );
  }

  updateRating(event) {
    this.setState(
      { rating: Number(event.target.value) },
    );
  }

  updateGenre(event) {
    this.setState(
      { genre: event.target.value },
    );
  }

  labelTitle() {
    return (
      <label htmlFor="title">
        Título
        <input type="text" value={this.state.title} onChange={this.updateTitle} id="title" />
      </label>
    );
  }

  labelSubtitle() {
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          value={this.state.subtitle}
          onChange={this.updateSubtitle}
          id="subtitle"
        />
      </label>
    );
  }

  labelImagePath() {
    return (
      <label htmlFor="image-path">
        Imagem
        <input
          type="text"
          value={this.state.imagePath}
          onChange={this.updateImagePath}
          id="image-path"
        />
      </label>
    );
  }

  labelStoryline() {
    return (
      <label htmlFor="storyline">
        Sinopse
        <textarea value={this.state.storyline} onChange={this.updateStoryline} id="storyline" />
      </label>
    );
  }

  labelRating() {
    return (
      <label htmlFor="rating">
        Avaliação
        <input type="number" value={this.state.rating} onChange={this.updateRating} id="rating" />
      </label>
    );
  }

  labelGenre() {
    return (
      <label htmlFor="genre">
        Gênero
        <select value={this.state.genre} onChange={this.updateGenre} id="genre">
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  resetAddMovie() {
    this.props.onClick(this.state);
    this.setState(AddMovie.initialState);
  }

  buttonReset() {
    return (
      <button type="button" onClick={this.resetAddMovie}>
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <form>
        {this.labelTitle()}
        {this.labelSubtitle()}
        {this.labelImagePath()}
        {this.labelStoryline()}
        {this.labelRating()}
        {this.labelGenre()}
        {this.buttonReset()}
      </form>
    );
  }
}

export default AddMovie;
