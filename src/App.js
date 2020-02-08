import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';
import AddMovie from './components/AddMovie';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
      <AddMovie/>
      <SearchBar/>
    </div>
  );
}

export default App;
