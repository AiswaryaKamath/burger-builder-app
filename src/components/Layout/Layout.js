import React from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";
const layout = (props) => (
  <Auxiliary>
    <div className={classes.container}>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Auxiliary>
);

export default layout;
