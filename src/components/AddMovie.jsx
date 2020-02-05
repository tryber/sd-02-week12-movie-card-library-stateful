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

onClick, uma callback


handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value,
  });
}

handleSubmit(event) {
  alert('Um nome foi enviado: ' + this.state.value);
  event.preventDefault();
}



  render() {
    <form>
    <label>
      Título
      <input
        name='title'
        type='text'
        value={this.state.title}
        onChange={this.onClick}
      />
    </label>



    <label>
      Subtítulo
      <input
        name='subtitle'
        type='text'
        value={this.state.subtitle}
        onChange={this.onClick}
      />
    </label>



    <label>
      Imagem
      <input
        name='imagePath'
        type='text'
        value={this.state.imagePath}
        onChange={this.onClick}
      />
    </label>


    <label>
          Sinopse:
          <textarea value={this.state.storyline} onChange={this.onClick} name='storyline'} />
          
        </label>


    <label>
      Avaliação
      <input
        name='rating'
        type='number'
        value={this.state.rating}
        onChange={this.onClick}
      />
    </label>

    <label>
      Gênero
      <select value={this.state.genre} onChange={this.onClick} name='genre'>
        <option value='action'>Ação</option>
        <option value='comedy'>Comédia</option>
        <option value='thriller'>Suspense</option>
      </select>
    </label>

    <button onClick={this.onClick}>
  Adicionar Filme
</button>

    
  </form>
  }
}

export default AddMovie;
