import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.InputTitle = this.InputTitle.bind(this);
    this.InputTitle = this.InputTitle.bind(this);
    this.InputTitle = this.InputTitle.bind(this);
    this.InputTitle = this.InputTitle.bind(this);
    this.InputTitle = this.InputTitle.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  InputTitle() {
    const { title } = this.state;
    return (
      <div>
        <label htmlFor="labelInputTitle">Título</label>
        <input
          id="labelInputTitle"
          type="text"
          value={title}
          onChange={(e) => this.setState({ title: e.target.value })}
        />
      </div>
    );
  }

  InputSubTitle() {
    const { subtitle } = this.state;
    return (
      <div>
        <label htmlFor="labelInputSubTitle">Subtítulo</label>
        <input
          id="labelInputSubTitle"
          type="text"
          value={subtitle}
          onChange={(e) => this.setState({ subtitle: e.target.value })}
        />
      </div>
    );
  }

  InputImage() {
    const { imagePath } = this.state;
    return (
      <div>
        <label htmlFor="labelInputImage">Imagem</label>
        <input
          id="labelInputImage"
          type="text"
          value={imagePath}
          onChange={(e) => this.setState({ imagePath: e.target.value })}
        />
      </div>
    );
  }

  InputSinopse() {
    const { storyline } = this.state;
    return (
      <div>
        <label htmlFor="labelInputSinopse">Sinopse</label>
        <textarea
          id="labelInputSinopse"
          type="textarea"
          value={storyline}
          onChange={(e) => this.setState({ storyline: e.target.value })}
        />
      </div>
    );
  }

  InputRating() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="labelInputRating">Avaliação</label>
        <input
          id="labelInputRating"
          type="number"
          value={rating}
          onChange={(e) => this.setState({ rating: parseFloat(e.target.value) })}
          min="0"
          max="5"
        />
      </div>
    );
  }

  InputGenre() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="InputSelect">Gênero</label>
        <select
          id="InputSelect"
          name="select"
          value={genre}
          onChange={(e) => this.setState({ genre: e.target.value })}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    );
  }

  Click(fun) {
    const state = this.state;
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    fun(state);
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        {this.InputTitle()}
        {this.InputSubTitle()}
        {this.InputImage()}
        {this.InputSinopse()}
        {this.InputRating()}
        {this.InputGenre()}
        <button type="button" onClick={() => this.Click(onClick)}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
