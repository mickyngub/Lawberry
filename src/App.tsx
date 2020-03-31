import React from "react";
// import Logo from "./components/Logo/Logo";
import "./App.css";
import Layout from "./components/Layout/Layout";
// import classes from "./App.module.css";
import Aux from "./hoc/Aux";
// import ExternalLinks from "./containers/ExternalLinks/ExternalLinks";
import { Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage/HomePage";

function App() {
  return (
    // <div className="App">
    <Aux>
      {/* <Router> */}
      <Layout>
        <Switch>
          <Route path="/externalLinks" component={HomePage} />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Layout>
      {/* </Router> */}
    </Aux>
    // </div>
  );
}

export default App;
