import React from "react";
import Logo from "./components/Logo/Logo";
import "./App.css";
import Layout from "./components/Layout/Layout";
import classes from "./App.module.css";
import Aux from "./hoc/Aux";
import { Button } from "antd";

function App() {
  return (
    // <div className="App">
    <Aux>
      <Layout />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </Aux>
    // </div>
  );
}

export default App;
