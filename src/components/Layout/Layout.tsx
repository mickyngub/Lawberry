import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

type LayoutProps = {
  children?: any;
  show?: any;
};

class Layout extends Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer />
        <div className={classes.Content}>SideDrawer, Backdrop</div>

        <main className={classes.Content}>
          {this.props.children}
          <p>Where Am I?</p>
        </main>
      </Aux>
    );
  }
}

export default Layout;
