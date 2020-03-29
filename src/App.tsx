import React from "react";
// import Logo from "./components/Logo/Logo";
import "./App.css";
import Layout from "./components/Layout/Layout";
// import classes from "./App.module.css";
import Aux from "./hoc/Aux";
import { Button } from "antd";
import { Route, Switch } from "react-router";
import HomePage from "./containers/HomePage/HomePage";
import ExternalLinks from "./containers/ExternalLinks/ExternalLinks";

function App() {
  return (
    <Aux>
      <Layout>
        <Switch>
          <Route path="/externalLinks" component={ExternalLinks} />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
      {/* <div className={classes.Logo}>
        <Logo />
      </div> */}
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    </Aux>
    // </div>
  );
}

export default App;
