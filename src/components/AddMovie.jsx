import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.actualTitle = this.actualTitle.bind(this);
    this.currentState = this.currentState.bind(this);
  }

  actualTitle(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }


  actualSubTitle(event) {
    const { value } = event.target;
    this.setState({ subtitle: value });
  }

  actualImagePath(event) {
    const { value } = event.target;
    this.setState({ imagePath: value });
  }

  actualStoryLine(event) {
    const { value } = event.target;
    this.setState({ storyline: value });
  }

  actualRating(event) {
    const { value } = event.target;
    this.setState({ rating: parseFloat(value) });
  }

  actualGenre(event) {
    const { value } = event.target;
    this.setState({ genre: value });
  }

  currentState(onClick) {
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  labelTitle() {
    return (
      <label htmlFor="title">
        Título
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={(event) => this.actualTitle(event)}
        />
      </label>
    );
  }

  labelSubTitle() {
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={this.state.subtitle}
          onChange={(event) => this.actualSubTitle(event)}
        />
      </label>
    );
  }

  labelImage() {
    return (
      <label htmlFor="imagePath">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={this.state.imagePath}
          onChange={(event) => this.actualImagePath(event)}
        />
      </label>
    );
  }

  labelSinopse() {
    return (
      <label htmlFor="Sinopse">
        Sinopse
        <textarea
          type="text"
          name="Sinopse"
          value={this.state.storyline}
          onChange={(event) => this.actualStoryLine(event)}
        />
      </label>
    );
  }

  labelRating() {
    return (
      <label htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          value={this.state.rating}
          onChange={(event) => this.actualRating(event)}
        />
      </label>
    );
  }

  labelGenre() {
    return (
      <label htmlFor="genre">
        Gênero
        <select
          type="radio"
          name="genre"
          value={this.state.genre}
          onChange={(event) => this.actualGenre(event)}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <div>
        <form>
          {this.labelTitle()}
          <br />
          {this.labelSubTitle()}
          <br />
          {this.labelImage()}
          <br />
          {this.labelSinopse()}
          <br />
          {this.labelRating()}
          <br />
          {this.labelGenre()}
          <br />
          <button type="button" onClick={() => this.currentState(this.props.onClick)}>
          Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
