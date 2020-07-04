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
    {controls.map((cntrl) => (
      <BuildControl
        key={cntrl.label}
        label={cntrl.label}
        added={() => props.adIngredient(cntrl.type)}
        remove={() => props.rmIngredient(cntrl.type)}
      />
    ))}
  </div>
);

export default buildControls;
