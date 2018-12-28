import React, {Component} from "react";
import Layout from "./components/Layout/Layout";

import "./App.css";
import Ideas from "./components/Ideas/Ideas";

export const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.registerAccount = this.registerAccount.bind(this);
    this.state = {
      account:
        localStorage.getItem("account") ?
          JSON.parse(localStorage.getItem("account")) :
          {username: null}
      ,
      registerAccount: this.registerAccount,
      logoutHandler: this.logout
    };
  }

  registerAccount(username) {
    console.log("[App > registerAccount @ 28]", username);
    const futureState = {username: username};
    this.setState(
      {account: futureState},
      //console.log('state', this.state)
      localStorage.setItem("account", JSON.stringify(futureState))
    );
  }

  logout() {
    console.log("[App > logout @ 32]");
    this.setState({account: {username: null}});
    localStorage.removeItem("account");
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Layout>
            <Ideas/>
          </Layout>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
