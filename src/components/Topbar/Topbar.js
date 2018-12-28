import React from "react";
import "./Topbar.css";
import {Account} from "./Account/Account";

const Topbar = props => {
  return (
    <div className="TopBar">
      <div id="topLeft"/>
      <div id="topCenter"/>
      <Account id="topRight"/>
    </div>
  );
};

Account.propTypes = {};

export default Topbar;
