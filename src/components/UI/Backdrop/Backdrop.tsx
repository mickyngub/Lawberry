import React from "react";
import classes from "./Backdrop.module.css";

type backdropProps = {
  show?: any;
  clicked?: any;
};
const backdrop = (props: backdropProps) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
