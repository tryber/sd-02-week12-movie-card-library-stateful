import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      storyline: '',
      imagePath: '',
      rating: '0',
      genre: 'action'
    };
  }

  render() {
    const { title, subtitle, storyline, rating, genre, imagePath } = this.state;
    return (
      <form>
        <label htmlFor="title">
          <p>Título</p>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
        </label>

        <label htmlFor="subtitle">
          <p>Subitítulo</p>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            value={subtitle}
            onChange={(event) => this.setState({ subtitle: event.target.value })}
          />
        </label>

        <label htmlFor="imagem">
          <p>Imagem</p>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) => this.setState({ imagePath: event.target.files[0] })}
          />
        </label>


        <label htmlFor="storyline">
          <p>Sinopse</p>
          <textarea
            type="text"
            id="storyline"
            name="storyline"
            value={storyline}
            onChange={(event) => this.setState({ storyline: event.target.value })}
          />
        </label>

        <label htmlFor="rating">
          <p>Avaliação</p>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            min="0"
            max="5"
            onChange={(event) => this.setState({ rating: event.target.value })}
          />
        </label>

        <label htmlFor="genre">
          <p>Gênero</p>
          <select
            name="genre"
            id="genre"
            value={genre}
            onChange={(event) => this.setState({ genre: event.target.value })}
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>

        <button
          id="addButton"
          type="button"
          onClick={() => {
            const { onClickAddMovie } = this.props;
            const newMovie = {
              title,
              subtitle,
              storyline,
              imagePath,
              rating,
              genre,
            };
            onClickAddMovie(newMovie);
          }}
        >
          Adicionar filme
        </button>

      </form>
    );
  }
}

export default AddMovie;
