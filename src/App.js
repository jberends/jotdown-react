import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

import "./App.css";
import Ideas from "./components/Ideas/Ideas";

class App extends Component {
  render() {
    return <div className="App">
        <Layout>
          <Ideas />
          <p>button bar</p>
        </Layout>
      </div>;
  }
}

export default App;
