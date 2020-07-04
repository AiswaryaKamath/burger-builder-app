import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGEDIENT_PRICE = {
  salad: 0.2,
  bacon: 0.5,
  meat: 1.2,
  cheese: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredient: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredientHandler = (type) => {
    //set new ingredient count
    const oldCount = this.state.ingredient[type];
    const updatedCount = oldCount + 1;
    const updatedIngredient = {
      ...this.state.ingredient,
    };
    updatedIngredient[type] = updatedCount;

    //set new price
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGEDIENT_PRICE[type];

    this.setState({
      ingredient: updatedIngredient,
      totalPrice: newPrice,
    });
  };

  removeIngredientHandler = (type) => {
    //set new ingredient count
    const oldCount = this.state.ingredient[type];
    // const updatedCount = --oldCount > 0 ? oldCount : 0;
    if (oldCount === 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredient,
    };
    updatedIngredient[type] = updatedCount;

    //set new price
    const oldPrice = this.state.totalPrice;
    let newPrice = oldPrice - INGEDIENT_PRICE[type];
    //newPrice = newPrice >= 4 ? newPrice : 4;
    this.setState({
      ingredient: updatedIngredient,
      totalPrice: newPrice,
    });
  };

  render() {
    const disabledIngredient = { ...this.state.ingredient }; //object literal spread operator
    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0;
    }
    console.log(disabledIngredient);
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredient} />
        <BuildControls
          adIngredient={this.addIngredientHandler}
          rmIngredient={this.removeIngredientHandler}
          disabledIng={disabledIngredient}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
