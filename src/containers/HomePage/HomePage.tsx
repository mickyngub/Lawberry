import React, { Component } from "react";
import Logo from "../../components/Logo/Logo";
import classes from "./HomePage.module.css";

class HomePage extends Component {
  render() {
    return (
      <div className={classes.Logo}>
        <Logo />
        Home Home Home Home Home Home
      </div>
    );
  }
}

export default HomePage;
