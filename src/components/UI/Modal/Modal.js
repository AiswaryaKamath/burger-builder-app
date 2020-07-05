import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary";

const modal = (props) => (
  <Auxiliary>
    <Backdrop show={props.show} click={props.clicked} />
    <div
      style={{
        transform: props.show ? "translate(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={classes.Modal}>
      {props.children}
    </div>
  </Auxiliary>
);

export default modal;
