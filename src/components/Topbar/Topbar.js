import React from "react";
import PropTypes from "prop-types";
import "./Topbar.css";
import { Account } from "./Account/Account";

const Topbar = ({ account }) => {
  console.log("[Topbar @ 6] ", account);

  return (
    <div className="TopBar">
      <div id="topLeft" />
      <div id="topCenter" />
      <Account id="topRight" account={account} />
    </div>
  );
};

Account.propTypes = {
  account: PropTypes.object
};

export default Topbar;
