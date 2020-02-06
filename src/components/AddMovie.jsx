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
          onChange={'AAAA'}
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
          onChange={'AAAA'}
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
          onChange={'AAAA'}
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
          onChange={'AAAA'}
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
          onChange={'AAAA'}
        />
      </div>
    );
  }

  InputGenre() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="InputSelect">
          Filtrar por gênero
          <select
            id="InputSelect"
            name="select"
            value={genre}
            onChange={'aa'}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    )
  }

  render() {
    return (
      <form>
        {this.InputTitle()}
        {this.InputSubTitle()}
        {this.InputImage()}
        {this.InputSinopse()}
        {this.InputRating()}
        {this.InputGenre()}
        <button onClick={'aa'}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
