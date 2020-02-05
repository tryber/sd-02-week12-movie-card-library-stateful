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

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
    this.handleChangeImagePath = this.handleChangeImagePath.bind(this);
    this.handleChangeStoryline = this.handleChangeStoryline.bind(this);
    this.handleChangeRating = this.handleChangeRating.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);
  }

  handleChangeTitle(event) {
    const { value } = event.target;
    this.setState(() => ({ title: value }));
  }

  handleChangeSubtitle(event) {
    const { value } = event.target;
    this.setState(() => ({ subtitle: value }));
  }

  handleChangeImagePath(event) {
    const { value } = event.target;
    this.setState(() => ({ imagePath: value }));
  }

  handleChangeStoryline(event) {
    const { value } = event.target;
    this.setState(() => ({ storyline: value }));
  }

  handleChangeRating(event) {
    const { value } = event.target;
    this.setState(() => ({ rating: Number(value) }));
  }

  handleChangeGenre(event) {
    const { value } = event.target;
    this.setState(() => ({ genre: value }));
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
            onChange={this.handleChangeTitle}
            id="title-input"
          />
        </label>
        <label htmlFor="subtitle-input">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            value={subtitle}
            onChange={this.handleChangeSubtitle}
            id="subtitle-input"
          />
        </label>
        <label htmlFor="imagePath-input">
          Imagem
          <input
            type="text"
            name="imagePath"
            value={imagePath}
            onChange={this.handleChangeImagePath}
            id="imagePath-input"
          />
        </label>
        <label htmlFor="storyline-input">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            onChange={this.handleChangeStoryline}
            id="storyline-input"
          />
        </label>
        <label htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={this.handleChangeRating}
            id="rating-input"
          />
        </label>
        <label htmlFor="genre-selection">
          Gênero
          <select id="genre-selection" value={genre} onChange={this.handleChangeGenre}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={onClick(this.state)}>Adicionar filme</button>

      </form>
    );
  }
}

export default AddMovie;
