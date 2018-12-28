import React, { Component } from 'react';
import { INGREDIENTS } from "../Ingredient/Ingredient";
import './Burger.css';

class Burger extends Component {
    render() {
        const ingredients = [];
        let totalCost = 20;

        this.props.data.forEach((item, index) => {
            for (let i = 0; i < item.count; i++) {
                totalCost += INGREDIENTS[index].price;
                ingredients.push({name: item.name});
            }
        });

        return (
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"> </div>
                    <div className="Seeds2"> </div>
                </div>
                {ingredients.map((item, index) => (
                    <div className={item.name} key={index}> </div>
                ))}
                <div className="BreadBottom"> </div>
                <p>Общая стоимость: {totalCost} сом</p>
            </div>
        );
    }
}

export default Burger;