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

    this.titleChange = this.titleChange.bind(this);
    this.subtitleChange = this.subtitleChange.bind(this);
    this.imageChange = this.imageChange.bind(this);
    this.storylineChange = this.storylineChange.bind(this);
    this.ratingChange = this.ratingChange.bind(this);
    this.genreChange = this.genreChange.bind(this);
  }

  createInputTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title">
        Título
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={this.titleChange}
        />
      </label>
    );
  }

  createInputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          value={subtitle}
          onChange={this.subtitleChange}
        />
      </label>
    );
  }

  createImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          type="text"
          value={imagePath}
          onChange={this.imageChange}
        />
      </label>
    );
  }

  createSynopsis() {
    const { storyline } = this.state;
    return (
      <label htmlFor="storyline">
        Sinopse:
        <textarea
          id="storyline"
          value={storyline}
          onChange={this.storylineChange}
          name="storyline"
        />
      </label>
    );
  }

  createRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating">
        Avaliação
        <input
          name="rating"
          type="number"
          value={rating}
          onChange={this.ratingChange}
        />
      </label>
    );
  }

  createGender() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select value={genre} onChange={this.genreChange} name="genre" id="genre">
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        {this.createInputTitle}
        {this.createInputSubtitle}
        {this.createImage}
        {this.createSynopsis}
        {this.createRating}
        {this.createGender}
        <button onClick={onClick} type="button"> Adicionar filme </button>
      </form>
    );
  }
}

export default AddMovie;
