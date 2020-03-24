import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";
// import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

type LayoutProps = {
  children?: any;
  show?: any;
};

class Layout extends Component<LayoutProps> {
  constructor(props: LayoutProps) {
    super(props);
  }

  state = {
    showSideDrawer: false,
    showBackDrop: false
  };

  closedSideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
    this.setState({ showBackDrop: false });
  };

  openSideDrawerHandler = () => {
    this.setState({ showSideDrawer: true });
    this.setState({ showBackDrop: true });
  };

  drawerToggleHandler = () => {
    this.setState((prevState: any) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar
          showSideDrawer={this.openSideDrawerHandler}
          drawerToggleClicked={this.drawerToggleHandler}
        />
        <SideDrawer
          showSideDrawer={this.state.showSideDrawer}
          showBackDrop={this.state.showBackDrop}
          sideDrawerClosed={this.closedSideDrawerHandler}
        />
      </Aux>
    );
  }
}

export default Layout;

{
  /* <div className={classes.Content}>SideDrawer, Backdrop</div> */
}

{
  /* <main className={classes.Content}>
          {this.props.children}
          <p>Where Am I?</p>
        </main> */
}
