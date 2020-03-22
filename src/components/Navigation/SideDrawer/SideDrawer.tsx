import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";

type sideDrawerProps = {
  show?: any;
  showSideDrawer?: any;
  sideDrawerClosed?: any;
};
const sideDrawer = (props: sideDrawerProps) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.sideDrawerClosed} />
      <div className={props.showSideDrawer ? classes.SideDrawer : ""}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Aux>
  );
};

export default sideDrawer;
