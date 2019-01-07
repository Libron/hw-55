import React, { Component } from 'react';
import './Burger.css';

class Burger extends Component {
    render() {
        const ingredients = [];

        this.props.data.forEach(item => {
            for (let i = 0; i < item.count; i++) {
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
                <p>Общая стоимость: {this.props.totalAmount} сом</p>
            </div>
        );
    }
}
export default Burger;