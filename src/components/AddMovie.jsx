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
    this.inputTitle = this.inputTitle.bind(this);
    this.updatedTitle = this.updatedTitle.bind(this);
    this.inputSubtitle = this.inputSubtitle.bind(this);
    this.updatedSubTitle = this.updatedSubTitle.bind(this);
    this.inputImage = this.inputImage.bind(this);
    this.updatedImage = this.updatedImage.bind(this);
    this.inputStoryline = this.inputStoryline.bind(this);
    this.updatedStoryline = this.updatedStoryline.bind(this);
    this.inputRating = this.inputRating.bind(this);
    this.updatedRating = this.updatedRating.bind(this);
    this.selectGenre = this.selectGenre.bind(this);
    this.updatedGenre = this.updatedGenre.bind(this);
    this.resetState = this.resetState.bind(this);
  }


  updatedTitle(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  updatedSubTitle(event) {
    const subtitle = event.target.value;
    this.setState({ subtitle });
  }

  updatedImage(event) {
    const imagePath = event.target.value;
    this.setState({ imagePath });
  }

  updatedStoryline(event) {
    const storyline = event.target.value;
    this.setState({ storyline });
  }

  updatedRating(event) {
    const rating = parseFloat(event.target.value);
    this.setState({ rating });
  }

  updatedGenre(event) {
    const genre = event.target.value;
    this.setState({ genre });
  }

  inputTitle() {
    const { title } = this.state;
    return (
      <label htmlFor="title">
        Título
        <input
          type="text"
          id="title"
          value={title}
          name="searchText"
          onChange={this.updatedTitle}
        />
      </label>
    );
  }

  inputSubtitle() {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitle">
        Subtítulo
        <input
          type="text"
          id="subtitle"
          value={subtitle}
          name="searchText"
          onChange={this.updatedSubTitle}
        />
      </label>
    );
  }

  inputImage() {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagePath">
        Imagem
        <input
          type="text"
          id="imagePath"
          value={imagePath}
          name="searchText"
          onChange={this.updatedImage}
        />
      </label>
    );
  }

  inputStoryline() {
    const { storyline } = this.state;
    return (
      <label htmlFor="sinopses">
        Sinopse
        <textarea
          id="sinopses"
          value={storyline}
          name="searchText"
          onChange={this.updatedStoryline}
        />
      </label>
    );
  }

  inputRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating">
        Avaliação
        <input
          type="number"
          id="rating"
          value={rating}
          name="searchText"
          onChange={this.updatedRating}
        />
      </label>
    );
  }

  selectGenre() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
        Gênero
        <select
          id="genre"
          name="genre"
          value={genre}
          onChange={this.updatedGenre}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  resetState(onClick) {
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

  buttonAdd() {
    const { onClick } = this.props;
    return (
      <button
        type="button"
        name="buttonAdd"
        onClick={() => this.resetState(onClick)}
      >
        Adicionar filme
      </button>
    );
  }

  render() {
    console.log(this.state);
    return (
      <form>
        {this.inputTitle()}
        <br />
        {this.inputSubtitle()}
        <br />
        {this.inputImage()}
        <br />
        {this.inputStoryline()}
        <br />
        {this.inputRating()}
        <br />
        {this.selectGenre()}
        <br />
        {this.buttonAdd()}
      </form>
    );
  }
}

export default AddMovie;
