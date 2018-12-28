import React, { Component } from 'react';
import './App.css';

import Burger from './components/Burger/Burger'
import Ingredient from "./components/Ingredient/Ingredient";

class App extends Component {
  state = {
      ingredients: [
          {name: 'Meat', count: 1},
          {name: 'Cheese', count: 1},
          {name: 'Salad', count: 1},
          {name: 'Bacon', count: 1}
      ],
      totalAmount: 0
  };

  increaseIngr = index => {
      const ingredients = this.state.ingredients;
      ingredients[index].count++;
      this.setState(ingredients);
  };

  decreaseIngr = index => {
      const ingredients = this.state.ingredients;

      if (ingredients[index].count > 0) {
          ingredients[index].count--;
          this.setState(ingredients);
      }
  };

  render() {
    return (
      <div className="App burgerInfo">
          <div className="col">
              {
                  this.state.ingredients.map((item,index) => (
                      <Ingredient
                          name={item.name}
                          index={index}
                          count={item.count}
                          key={index}
                          addClicked={() => this.increaseIngr(index)}
                          removeClicked={() => this.decreaseIngr(index)}
                      />
                  ))
              }
          </div>
          <div className="col">
              <Burger
                data={this.state.ingredients}
              />
          </div>
      </div>
    );
  }
}

export default App;
