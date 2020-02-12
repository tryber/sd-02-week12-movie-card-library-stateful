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

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    const { onClick } = this.props;
    return (
      <form>
        <label>Título</label>
        <input type="text" value={title} onChange={this.titleChange} />
        <label>Subtítulo</label>
        <input type="text" value={subtitle} onChange={this.subtitleChange} />
        <label>Imagem</label>
        <input type="text" value={imagePath} onChange={this.imageChange} />
        <label>Sinopse</label>
        <textarea value={storyline} onChange={this.storyLineChange} />
        <label>Avaliação</label>
        <input type="number" value={rating} onChange={(event) => this.ratingChange(event)} min="0" max="5" />
        <label>Gênero</label>
        <select value={genre} onChange={this.genreChange}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
        <button
          onClick={() => this.addMovie(onClick)}
          type="button">Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
