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
  trocarEstado = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  addFilme = (event) => {
    event.preventDefault();
    this.setState({
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    })
  }
  render() {
    const estado = this.state;
    console.log(estado)
    return (
      <form>
        <label>Título</label><br></br>
        <input name="title" type="text" value={estado.title} onChange={this.trocarEstado} /><br></br>
        <label>Subtítulo</label><br></br>
        <input name="subtitle" type="text" value={estado.subtitle} onChange={this.trocarEstado} /><br></br>
        <label>Imagem</label><br></br>
        <input name="imagePath" type="text" value={estado.imagePath} onChange={this.trocarEstado} /><br></br>
        <label>Sinopse</label><br></br>
        <textarea name="storyline" value={estado.storyline} onChange={this.trocarEstado} /><br></br>
        <label>Avaliação</label><br></br>
        <input name="rating" type="number" value={estado.rating} onChange={this.trocarEstado} /><br></br>
        <label>Gênero</label><br></br>
        <select name="genre" onChange={this.trocarEstado} value={estado.genre}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select><br></br>
        <button onClick={this.props.callbackAddFime}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
