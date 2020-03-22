import React from "react";
import Logo from "./components/Logo/Logo";

import "./App.css";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <p>Khean ter ai sus</p>
      </Layout>
      <Logo />
    </div>
  );
}

export default App;
