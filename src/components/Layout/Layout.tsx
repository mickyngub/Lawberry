import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

type LayoutProps = {
  children?: any;
};

const layout = (props: LayoutProps) => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <div>T SideDrawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;
