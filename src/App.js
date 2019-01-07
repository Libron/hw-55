import React, { Component } from 'react';
import './App.css';

import Burger from './components/Burger/Burger'
import Ingredient, { INGREDIENTS } from "./components/Ingredient/Ingredient";


class App extends Component {
  state = {
      ingredients: [
          {name: 'Meat', count: 1},
          {name: 'Cheese', count: 1},
          {name: 'Salad', count: 1},
          {name: 'Bacon', count: 1}
      ],
      totalAmount: 125
  };

  increaseIngr = index => {
      const ingredients = this.state.ingredients;
      ingredients[index].count++;
      let totalAmount = this.state.totalAmount;
      totalAmount += INGREDIENTS[index].price;
      this.setState({ingredients, totalAmount});
  };

  decreaseIngr = index => {
      const ingredients = this.state.ingredients;
      let totalAmount = this.state.totalAmount;

      if (ingredients[index].count > 0) {
          totalAmount -= INGREDIENTS[index].price;
          ingredients[index].count--;
          this.setState({ingredients, totalAmount});
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
                totalAmount={this.state.totalAmount}
              />
          </div>
      </div>
    );
  }
}

export default App;