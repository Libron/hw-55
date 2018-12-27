import React, { Component } from 'react';
import './App.css';

import Burger from './components/Burger/Burger'

class App extends Component {
  state = {
      ingredients: [
          {name: 'Meat', count: 0},
          {name: 'Cheese', count: 0}
      ]
  };

  render() {
    return (
      <div className="App">
        <Burger />
      </div>
    );
  }
}

export default App;
