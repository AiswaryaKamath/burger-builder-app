import React from "react";
import classes from "./ToggleMenu.css";

const menu = (props)=>(
    <div onClick={props.click} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);


export default menu;
