import React, { Component } from "react";
import Layout from "./components/Layout/Layout";

import "./App.css";
import Ideas from "./components/Ideas/Ideas";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null
    };
  }

  componentWillMount() {
    const localAccount = localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account"))
      : { username: null };
    if (localAccount) {
      this.setState({ account: localAccount });
      console.log("[App > componentWillMount @ 17] initate the account from localstore", localAccount);
    }
  }

  render() {
    return (
      <div className="App">
        <Layout account={this.state.account}>
          <Ideas account={this.state.account} />
        </Layout>
      </div>
    );
  }
}

export default App;
