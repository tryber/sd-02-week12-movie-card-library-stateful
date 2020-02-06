import React from "react";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }
  trocarTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  trocarSubtitle = (event) => {
    this.setState({ subtitle: event.target.value })
  }
  trocarImagePath = (event) => {
    this.setState({ imagePath: event.target.value })
  }
  trocarStoryline = (event) => {
    this.setState({ storyline: event.target.value })
  }
  trocarRating = (event) => {
    this.setState({ rating: parseFloat(event.target.value) })
  }
  trocarGenre = (event) => {
    this.setState({ genre: event.target.value })
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
    console.log(estado)
    return (
      <form>
        <label>Título</label><br></br>
        <input name="title" type="text" value={estado.title} onChange={this.trocarTitle} /><br></br>
        <label>Subtítulo</label><br></br>
        <input name="subtitle" type="text" value={estado.subtitle} onChange={this.trocarSubtitle} /><br></br>
        <label>Imagem</label><br></br>
        <input name="imagePath" type="text" value={estado.imagePath} onChange={this.trocarImagePath} /><br></br>
        <label>Sinopse</label><br></br>
        <textarea name="storyline" value={estado.storyline} onChange={this.trocarStoryline} /><br></br>
        <label>Avaliação</label><br></br>
        <input name="rating" type="number" value={estado.rating} onChange={this.trocarRating} /><br></br>
        <label>Gênero</label><br></br>
        <select name="genre" onChange={this.trocarGenre} value={estado.genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select><br />
        <button onClick={this.props.callbackAddFilme}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
