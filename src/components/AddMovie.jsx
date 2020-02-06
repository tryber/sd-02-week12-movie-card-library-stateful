import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }
    this.actualTitle = this.actualTitle.bind(this);
    this.currentState = this.currentState.bind(this);

  }

  actualTitle(event) {
    const { value } = event.target
    this.setState(() => {
      return ({
        title: value,
      });
    });
  }


  actualSubTitle(event) {
    const { value } = event.target
    this.setState(() => {
      return ({
        subtitle: value,
      });
    });

  }

  actualImagePath(event) {
    const { value } = event.target
    this.setState(() => {
      return ({
        imagePath: value,
      });
    });
  }

  actualStoryLine(event) {
    const { value } = event.target
    this.setState(() => {
      return ({
        storyline: value,
      });
    });

  }

  actualRating(event) {
    const { value } = event.target
    this.setState(() => {
      return ({
        rating: parseFloat(value),
      });
    });
  }

  actualGenre(event) {
    const { value } = event.target
    this.setState(() => {
      return ({
        genre: value,
      });
    });
  }

  currentState(callback) {
    console.log(callback)
  }

  render() {
    return (
      <div>
        <form>

          <label htmlFor="title">
            Título
            <input type="text" name="title" value={this.state.title} onChange={(event) => this.actualTitle(event)}>
            </input>
          </label>

          <br></br>

          <label htmlFor="subtitle">
            Subtítulo
            <input type="text" name="subtitle" value={this.state.subtitle} onChange={(event) => this.actualSubTitle(event)}>
            </input>
          </label>

          <br></br>

          <label htmlFor="imagePath">
            Imagem
            <input type="text" name="imagePath" value={this.state.imagePath} onChange={(event) => this.actualImagePath(event)}>
            </input>
          </label>

          <br></br>

          <label htmlFor="Sinopse">
            Sinopse
            <textarea type="text" name="Sinopse" value={this.state.storyline} onChange={(event) => this.actualStoryLine(event)}>
            </textarea>
          </label>

          <br></br>

          <label htmlFor="rating">
            Avaliação
            <input type="number" name="rating" value={this.state.rating} onChange={(event) => this.actualRating(event)}>
            </input>
          </label>

          <br></br>

          <label htmlFor="genre">
            Gênero
            <select type="radio" name="genre" value={this.state.genre} onChange={(event) => this.actualGenre(event)}>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>

          <br></br>

          <button type="button" onClick={() => this.currentState(this.state)}>
          Adicionar filme</button>

        </form>
      </div>
    )
  }
}

export default AddMovie;
