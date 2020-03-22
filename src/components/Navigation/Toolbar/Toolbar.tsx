import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

type toolbarProps = {
  children?: any;
};

const toolbar = (props: toolbarProps) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU,{props.children}</div>
      <div>LOGO</div>
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  );
};

export default toolbar;
