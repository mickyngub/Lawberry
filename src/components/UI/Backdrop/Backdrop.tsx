import React from "react";
import classes from "./Backdrop.module.css";

type backdropProps = {
  showBackDrop?: any;
  clicked?: any;
};
const backdrop = (props: backdropProps) =>
  props.showBackDrop ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
