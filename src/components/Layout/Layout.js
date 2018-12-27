import React from "react";
import Topbar from "../Topbar/Topbar";
import Splash from "../Splash/Splash";

import './Layout.css';

const Layout = props => (
  <>
    <Splash/>
    <div className="Layout">
      <Topbar/>
      {props.children}
    </div>
  </>
);

export default Layout;
