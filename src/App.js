import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <MovieLibrary movies={movies}/>
      </div>
    </div>
  );
}

export default App;
