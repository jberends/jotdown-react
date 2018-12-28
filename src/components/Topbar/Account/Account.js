import React from "react";

import {Fab, Icon, Tooltip} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";

import {AppContext} from "../../../App";

import "./Account.css";

export function Account() {
  return (
    <AppContext.Consumer>
      {({account, logoutHandler}) => (
        <div id="topright" className="Account">
          <Tooltip title={account.username ? account.username : "Login first"}>
            <Fab size="small" onDoubleClick={() => logoutHandler()}>
              {account.username ? <Icon>{account.username}</Icon> : <AccountCircle/>}
            </Fab>
          </Tooltip>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default Account;
