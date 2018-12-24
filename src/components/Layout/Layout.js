import React from "react";
import Topbar from '../Topbar/Topbar';
import Splash from '../Splash/Splash';

const layout = props => (
  <>
    <div>
        <Topbar/>
        <Splash/>
    </div>
    <div className="Main">{props.children}</div>
  </>
);

export default layout;
