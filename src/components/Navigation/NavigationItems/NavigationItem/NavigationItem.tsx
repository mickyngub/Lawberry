import React from "react";
import classes from "./NavigationItem.module.css";

type navigationItemProps = {
  link?: any;
  active?: any;
  children?: any;
};

const navigationItem = (props: navigationItemProps) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? classes.active : ""}>
        {props.children}
      </a>
    </li>
  );
};

export default navigationItem;
