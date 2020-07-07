import React, { Component } from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  componentDidUpdate() {
    console.log("Modal Component...");
  }
  render() {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} click={this.props.clicked} />
        <div
          style={{
            transform: this.props.show ? "translate(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Auxiliary>
    );
  }
}

export default Modal;
