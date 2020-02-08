import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      imagePath: "",
      storyline: "",
      rating: "",
      genre: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <form>
        <label>
          Título:
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>Subtítulo:</label>
        <input type="text" name="subtitle" value={this.state.subtitle} onChange={this.handleChange} />
        <label>Imagem:</label>
        <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
      </form>
    )
  }
}

export default AddMovie;