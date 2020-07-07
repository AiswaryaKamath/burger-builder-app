import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGEDIENT_PRICE = {
  salad: 0.2,
  bacon: 0.5,
  meat: 1.2,
  cheese: 0.7,
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
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseHandler = (ingredients) => {
    //const  = { ...this.state.ingredient };

    const isPurchasable = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    console.log(isPurchasable);
    this.setState({ purchasable: isPurchasable > 0 });
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
    this.updatePurchaseHandler(updatedIngredient);
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
    this.updatePurchaseHandler(updatedIngredient);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  cancelPurchaseHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  proceedPurchaseHandler = () => {
    alert("Success!");
  };

  render() {
    const disabledIngredient = { ...this.state.ingredient }; //object literal spread operator
    for (let key in disabledIngredient) {
      disabledIngredient[key] = disabledIngredient[key] <= 0;
    }
    //console.log(disabledIngredient);
    return (
      <Auxiliary>
        {console.log(this.state.purchasable)}

        <Modal
          show={this.state.purchasing}
          clicked={this.cancelPurchaseHandler}
        >
          <OrderSummary
            ingredient={this.state.ingredient}
            proceedBtn={this.proceedPurchaseHandler}
            cancelBtn={this.cancelPurchaseHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>

        <Burger ingredients={this.state.ingredient} />
        <BuildControls
          purchasingOrder={this.purchaseHandler}
          adIngredient={this.addIngredientHandler}
          rmIngredient={this.removeIngredientHandler}
          disabledIng={disabledIngredient}
          price={this.state.totalPrice}
          disabledPurchase={this.state.purchasable}
        />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
