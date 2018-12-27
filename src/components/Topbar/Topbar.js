import React, {Component} from "react";
import "./Topbar.css";
import {Account} from './Account/Account';

class Topbar extends Component {
  render() {
    return (
      <div className="TopBar">
        <div id="topLeft"/>
        <div id="topCenter"/>
        <Account id="topRight"/>
      </div>
    );
  }
}

export default Topbar;

