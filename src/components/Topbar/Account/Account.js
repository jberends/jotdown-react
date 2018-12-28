import React from "react";
import PropTypes from "prop-types";
import { Fab, Icon, Tooltip } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

import "./Account.css";

export function Account({ account }) {
  // const account = props.account ? props.account : {};

  return (
    <div id="topright" className="Account">
      <Tooltip title={account.username ? account.username : "Login first"}>
        <Fab
          size="small"
          onDoubleClick={() => localStorage.setItem("account", JSON.stringify({username: null}))}>
          {account.username ? <Icon>{account.username}</Icon> : <AccountCircle />}</Fab>
      </Tooltip>
    </div>
  );
}

Account.propTypes = {
  account: PropTypes.object
};

export default Account;
