import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      title: event.target.value,
    })
  }
  render() {
    return (
      <form>
        <label>Título:</label>
        <input type="text" value={this.state.title} onChange={this.handleChange} />
      </form>
    )
  }
}

export default AddMovie;
