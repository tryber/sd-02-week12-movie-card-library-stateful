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

    this.storyLineChange = this.storyLineChange.bind(this);

    this.genreChange = this.genreChange.bind(this);

    this.addMovie = this.addMovie.bind(this);

    this.ratingAndGenre = this.ratingAndGenre.bind(this);

    this.buttonAddMovie = this.buttonAddMovie.bind(this);
  }

  titleChange(event) {
    this.setState({ title: event.target.value });
  }

  subtitleChange(event) {
    this.setState({ subtitle: event.target.value });
  }

  imageChange(event) {
    this.setState({ imagePath: event.target.value });
  }

  storyLineChange(event) {
    this.setState({ storyline: event.target.value });
  }

  genreChange(event) {
    this.setState({ genre: event.target.value });
  }

  ratingChange(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }

  addMovie(onClick) {
    const movie = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    onClick(movie);
  }

  ratingAndGenre() {
    const { rating, genre } = this.state;
    return (
      <div>
        <label htmlFor="rating">
          Avaliação
          <input
            type="number"
            value={rating}
            onChange={(event) => this.ratingChange(event)}
            min="0"
            max="5"
          />
        </label>
        <label htmlFor="genre">
          Gênero
          <select value={genre} onChange={this.genreChange}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }

  buttonAddMovie() {
    const { onClick } = this.props;
    return (
      <button
        onClick={() => this.addMovie(onClick)}
        type="button"
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input type="text" value={title} onChange={this.titleChange} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input type="text" value={subtitle} onChange={this.subtitleChange} />
        </label>
        <label htmlFor="image">
          Imagem
          <input type="text" value={imagePath} onChange={this.imageChange} />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea value={storyline} onChange={this.storyLineChange} />
        </label>
        {this.ratingAndGenre()}
        {this.buttonAddMovie()}
      </form>
    );
  }
}

export default AddMovie;
