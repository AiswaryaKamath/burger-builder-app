import React from "react";
import classes from "./BuildControl.css";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    {console.log(props)}
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
    <button className={classes.Less} onClick={props.remove}>Less</button>
  </div>
);

export default buildControl;
