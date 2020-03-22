import React from "react";
import Logo from "./components/Logo/Logo";
import "./App.css";
import Layout from "./components/Layout/Layout";
import classes from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <p>Khean ter ai sus</p>
      </Layout>
      <div className={classes.Logo}>
        <Logo />
      </div>
    </div>
  );
}

export default App;
