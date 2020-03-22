import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import SideDrawer from "../SideDrawer/SideDrawer";
type toolbarProps = {
  children?: any;
};

const toolbar = (props: toolbarProps) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU,{props.children}</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
      <SideDrawer />
    </header>
  );
};

export default toolbar;
