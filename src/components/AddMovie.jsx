import React from 'react';

import './AddMovie.css';

const genreOptions = [
  { value: 'action', text: 'Ação' },
  { value: 'comedy', text: 'Comédia' },
  { value: 'thriller', text: 'Suspense' },
];

const initialState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action'
}

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
  }

  onChange = (e, name) => {
    let value = e.target.value;
    if (name === 'rating') {
      value = parseFloat(e.target.value, 10);
    }
    this.setState({
      [name]: value
    });
  }

  submithandler = (e) => {
    e.preventDefault();
  }

  onClick = () => {
    this.props.onClick({...this.state})
    this.setState({
      ...initialState
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.submithandler}>
          <div>
            <label>Título</label>
            <input type='text' name='title' value={this.state.title} onChange={(e) => this.onChange(e, 'title')} />
          </div>
          <div>
            <label>Subtítulo</label>
            <input type='text' name='subtitle' value={this.state.subtitle} onChange={(e) => this.onChange(e, 'subtitle')} />
          </div>
          <div>
            <label>Imagem</label>
            <input type='text' value={this.state.imagePath} onChange={(e) => this.onChange(e, 'imagePath')} />
          </div>
          <div>
            <label>Sinopse</label>
            <textarea value={this.state.storyline} onChange={(e) => this.onChange(e, 'storyline')} ></textarea>
          </div>
          <div>
            <label>Avaliação</label>
            <input type='number' value={this.state.rating} onChange={(e) => this.onChange(e, 'rating')} />
          </div>
          <div>
            <label>Gênero</label>
            <select value={this.state.genre} onChange={(e) => this.onChange(e, 'genre')}>
              {genreOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          <button type='submit' onClick={this.onClick} >Adicionar filme</button>
        </form>
      </>
    )
  }
}

export default AddMovie;
