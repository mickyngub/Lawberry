import React from "react";
// import Logo from "./components/Logo/Logo";
import "./App.css";
import Layout from "./components/Layout/Layout";
// import classes from "./App.module.css";
import Aux from "./hoc/Lux";
// import ExternalLinks from "./containers/ExternalLinks/ExternalLinks";

function App() {
  return (
    // <div className="App">
    <Aux>
      {/* <Router> */}
      <Layout></Layout>
      {/* </Router> */}
    </Aux>
    // </div>
  );
}

export default App;
