import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  
  render() {
    const ingredientSummary = Object.keys(this.props.ingredient).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredient[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxiliary>
        <h3>Your Order</h3>
        <p>A delicious Burger with following:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          Total Price:<strong>{this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <p>Continue checkout?</p>
        <Button btnType="Success" clicked={this.props.proceedBtn}>
          Proceed
        </Button>
        <Button btnType="Danger" clicked={this.props.cancelBtn}>
          Cancel
        </Button>
      </Auxiliary>
    );
  }
}

export default OrderSummary;
