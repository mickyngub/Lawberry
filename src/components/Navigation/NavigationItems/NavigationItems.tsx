import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">Law</NavigationItem>
      <NavigationItem link="/">Berry</NavigationItem>
    </ul>
  );
};

export default navigationItems;
