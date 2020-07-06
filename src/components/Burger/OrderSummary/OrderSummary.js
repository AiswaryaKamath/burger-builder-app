import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredient).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredient[igKey]}
      </li>
    );
  });

  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious Burger with following:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price:<strong>{props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue checkout?</p> 
      <Button btnType="Success" clicked={props.proceedBtn}>Proceed</Button>
      <Button btnType="Danger" clicked={props.cancelBtn}>Cancel</Button>
    </Auxiliary>
  );
};

export default orderSummary;
