import React from "react";
// import Logo from "../../Logo/Logo";
// import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Aux";
import { Button } from "antd";
import { RocketTwoTone } from "@ant-design/icons";

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
        <RocketTwoTone
          className={classes.Logo}
          style={{ fontSize: "30px", textAlign: "center" }}
        />
        <Button href="/" style={{ color: "" }} type="primary" block>
          Law
        </Button>
        <Button href="/" type="primary" block>
          Berry
        </Button>
      </div>
    </Aux>
  );
};

export default sideDrawer;
