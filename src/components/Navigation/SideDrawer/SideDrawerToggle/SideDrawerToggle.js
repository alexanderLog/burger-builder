import React from "react";
import classes from "./SideDrawerToggle.module.css";

const manu = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default manu;
