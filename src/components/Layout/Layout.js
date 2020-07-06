import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDraw: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDraw: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState)=>{ 
      return {showSideDraw: !prevState.showSideDraw};
     });
  };

  render() {
    return (
      <Auxiliary>
        <div className={classes.container}>
          <Toolbar clicked={this.sideDrawerToggleHandler}/>
          <SideDrawer
            clicked={this.sideDrawerCloseHandler}
            closed={this.state.showSideDraw}
          />
        </div>
        <main>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
