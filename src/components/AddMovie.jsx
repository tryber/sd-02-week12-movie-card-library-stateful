import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle:"",
      title:"",
      imagePath:"",
      storyline:"",
      rating:0,
      genre:'action',
    };
  }

  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value,
  });
}


  render() {
    <form>
    <label>
      Título
      <input
        name='title'
        type='text'
        value={this.state.title}
        onChange={this.handleInputChange}
      />
    </label>



    <label>
      Subtítulo
      <input
        name='subtitle'
        type='text'
        value={this.state.subtitle}
        onChange={this.handleInputChange}
      />
    </label>



    <label>
      Imagem
      <input
        name='imagePath'
        type='text'
        value={this.state.imagePath}
        onChange={this.handleInputChange}
      />
    </label>


    <label>
          Sinopse:
          <textarea value={this.state.storyline} onChange={this.handleInputChange} name='storyline'} />
          
        </label>


    <label>
      Avaliação
      <input
        name='rating'
        type='number'
        value={this.state.rating}
        onChange={this.handleInputChange}
      />
    </label>

    <label>
      Gênero
      <select value={this.state.genre} onChange={this.handleInputChange} name='genre'>
        <option value='action'>Ação</option>
        <option value='comedy'>Comédia</option>
        <option value='thriller'>Suspense</option>
      </select>
    </label>

    <button onClick={activateLasers}>
  Adicionar Filme
</button>

    
  </form>
  }
}

export default AddMovie;
