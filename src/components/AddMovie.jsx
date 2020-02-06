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
    this.trocarTitle = this.trocarTitle.bind(this);
    this.trocarSubtitle = this.trocarSubtitle.bind(this);
    this.trocarImagePath = this.trocarImagePath.bind(this);
    this.trocarStoryline = this.trocarStoryline.bind(this);
    this.trocarRating = this.trocarRating.bind(this);
    this.trocarGenre = this.trocarGenre.bind(this);
  }
  trocarTitle(event) {
    this.setState({ title: event.target.value });
  }
  trocarSubtitle(event) {
    this.setState({ subtitle: event.target.value });
  }
  trocarImagePath(event) {
    this.setState({ imagePath: event.target.value });
  }
  trocarStoryline(event) {
    this.setState({ storyline: event.target.value });
  }
  trocarRating(event) {
    this.setState({ rating: parseFloat(event.target.value) });
  }
  trocarGenre(event) {
    this.setState({ genre: event.target.value });
  }


  // addFilme = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     subtitle: "",
  //     title: "",
  //     imagePath: "",
  //     storyline: "",
  //     rating: 0,
  //     genre: "action",
  //   })
  // }
  render() {
    const estado = this.state;
    return (
      <form>
        <label htmlFor='name'>Título</label><br></br>
        <input id='name' name="title" type="text" value={estado.title}
          onChange={this.trocarTitle}
        /><br />
        <label htmlFor='sub'>Subtítulo</label><br></br>
        <input id='sub' name="subtitle" type="text" value={estado.subtitle}
          onChange={this.trocarSubtitle}
        /><br />
        <label htmlFor='img'>Imagem</label><br></br>
        <input id='img' name="imagePath" type="text" value={estado.imagePath}
          onChange={this.trocarImagePath}
        /><br />
        <label htmlFor='sin'>Sinopse</label><br></br>
        <textarea id='sin' name="storyline" value={estado.storyline}
          onChange={this.trocarStoryline}
        /><br />
        <label htmlFor='av'>Avaliação</label><br></br>
        <input id='av' name="rating" type="number" value={estado.rating}
          onChange={this.trocarRating}
        /><br />
        <label htmlFor='gen'>Gênero</label><br></br>
        <select id='gen' name="genre"
          onChange={this.trocarGenre} value={estado.genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select><br />
        <button onClick={this.props.callbackAddFilme}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
