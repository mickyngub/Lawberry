import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

type sideDrawerProps = {
  showSideDrawer?: any;
  sideDrawerClosed?: any;
  showBackDrop?: any;
};
const sideDrawer = (props: sideDrawerProps) => {
  return (
    <Aux>
      <div
        className={props.showSideDrawer ? classes.SideDrawer : classes.noShow}
      >
        <Backdrop
          showBackDrop={props.showBackDrop}
          clicked={props.sideDrawerClosed}
        />
      </div>

      <div
        className={props.showSideDrawer ? classes.SideDrawer : classes.noShow}
      >
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Aux>
  );
};

export default sideDrawer;
