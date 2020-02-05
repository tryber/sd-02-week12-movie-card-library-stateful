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
    }
    this.changeInput = this.changeInput.bind(this);
  }


  changeInput (e, nome) {
    const { value } = e.target;
    this.setState(() => ({ [nome]: value, }));
    if (nome === 'rating') {
      this.setState(() => ({ [nome]: parseFloat(value), }));
    }
  }

  inputText (label, type, item, func) {
    return (
      <label>
        {label}
        <input
          type={type}
          name={item}
          value={this.state[item]}
          onChange={(e) => func(e, item)}
        />
      </label>
    );
  }

  inputTextArea (label, item, func) {
    return (
      <label>
        {label}
        <textarea
          name={item}
          value={this.state[item]}
          onChange={(e) => func(e, item)}
        />
      </label>
    );
  }

  selectBox (item) {
    return (
      <label>
        Gênero:
        <select
          onChange={(e) => this.changeInput(e, item)}
          value={this.state.genre}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render () {
    return (
      <form>
        <fieldset>
          {this.inputText('Título', 'text', 'title', this.changeInput)}
          {this.inputText('Subtítulo', 'text', 'subtitle', this.changeInput)}
          {this.inputText('Imagem', 'text', 'imagePath', this.changeInput)}
          {this.inputTextArea('Sinopse', 'storyline', this.changeInput)}
          {this.inputText('Avaliação', 'number', 'rating', this.changeInput)}
          {this.selectBox('genre')}
          <button>Adicionar filme</button>
        </fieldset>
      </form>
    );
  }
}

export default AddMovie;
