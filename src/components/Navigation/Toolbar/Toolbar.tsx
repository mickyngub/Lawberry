import React from "react";
import classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
// import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

type toolbarProps = {
  children?: any;
  showSideDrawer?: any;
  drawerToggleClicked?: any;
};

const toolbar = (props: toolbarProps) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.showSideDrawer} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      {/* <div>MENU</div> */}
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
