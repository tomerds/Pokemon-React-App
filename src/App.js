import './App.css';

import React from 'react';

import Pokemon from './components/Pokemon';
import data from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemon: data
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Pokemon App!</h1>
        <Pokemon pokeData={this.state.pokemon} />
      </div>
    )
  }

}

export default App;
