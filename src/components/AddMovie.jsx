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
    this.props.onClick({...this.state});
    this.setState({
      ...initialState
    });
  }

  selectBox() {
    return (
      <div>
        <label htmlFor='genre'>Gênero</label>
        <select
          id='genre'
          value={this.state.genre}
          onChange={(e) => this.onChange(e, 'genre')}
        >
          {genreOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>))}
        </select>
      </div>
    )
  }

  rating() {
    return (
      <div>
        <label htmlFor='rating'>Avaliação</label>
        <input
          id='rating'
          type='number'
          value={this.state.rating}
          onChange={(e) => this.onChange(e, 'rating')}
        />
      </div>
    )
  }



  render() {
    return (
      <form onSubmit={this.submithandler}>
        <div>
          <label htmlFor='title'>Título</label>
          <input id='title' type='text' name='title' value={this.state.title} onChange={(e) => this.onChange(e, 'title')} />
        </div>
        <div>
          <label htmlFor='subtitle'>Subtítulo</label>
          <input id='subtitle' type='text' name='subtitle' value={this.state.subtitle} onChange={(e) => this.onChange(e, 'subtitle')} />
        </div>
        <div>
          <label htmlFor='image'>Imagem</label>
          <input id='image' type='text' value={this.state.imagePath} onChange={(e) => this.onChange(e, 'imagePath')} />
        </div>
        <div>
          <label htmlFor='sinopse'>Sinopse</label>
          <textarea id='sinopse' value={this.state.storyline} onChange={(e) => this.onChange(e, 'storyline')} ></textarea>
        </div>
        <div>
          <label htmlFor='rating'>Avaliação</label>
          <input id='rating' type='number' value={this.state.rating} onChange={(e) => this.onChange(e, 'rating')} />
        </div>
        {this.rating()}
        {this.selectBox()}
        <button type='submit' onClick={this.onClick}>Adicionar filme</button>
      </form>
    )
  }
}

export default AddMovie;
