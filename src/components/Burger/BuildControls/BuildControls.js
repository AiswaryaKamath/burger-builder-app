import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Total price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((cntrl) => (
      <BuildControl
        key={cntrl.label}
        label={cntrl.label}
        added={() => props.adIngredient(cntrl.type)}
        remove={() => props.rmIngredient(cntrl.type)}
        disabled={props.disabledIng[cntrl.type]}
      />
    ))}
    <button
      onClick={props.purchasingOrder}
      className={classes.OrderButton}
      disabled={!props.disabledPurchase}
    >
      Order Now!
    </button>
  </div>
);

export default buildControls;
