import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from '../SideDrawer/ToggleMenu/ToggleMenu';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Menu click={props.clicked} className={classes.Hamberger}/>
    <Logo height="80%" />
    <div className={classes.DesktopOnly}>
      <NavigationItems />
    </div>
  </header>
);

export default toolbar;
