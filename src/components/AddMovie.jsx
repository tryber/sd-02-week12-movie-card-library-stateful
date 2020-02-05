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

    this.changeInput = this.changeInput.bind(this);
    this.changeSelect = this.changeSelect.bind(this);
  }

  changeInput(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  changeSelect() {
    return this.state;
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title-input">
          Título
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.changeInput}
            id="title-input"
          />
        </label>
        <label htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={subtitle}
            onChange={this.changeInput}
            id="subtitle-input"
          />
        </label>
        <label htmlFor="imagePath-input">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={imagePath}
            onChange={this.changeInput}
            id="imagePath-input"
          />
        </label>
        <label htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            onChange={this.changeInput}
            id="storyline-input"
          />
        </label>
        <label htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={this.changeInput}
            id="rating-input"
          />
        </label>
        <label htmlFor="genre-selection">
          Gênero
          <select id="genre-selection" value={genre} onChange={this.changeSelect}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={onClick}>Adicionar filme</button>

      </form>
    );
  }
}

export default AddMovie;
