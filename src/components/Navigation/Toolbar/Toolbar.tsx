import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
type toolbarProps = {
  children?: any;
};

const toolbar = (props: toolbarProps) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU,{props.children}</div>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
