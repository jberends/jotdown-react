import React from "react";
import Topbar from '../Topbar/Topbar';
import Backdrop from '../Backdrop/Backdrop';

const layout = props => (
  <>
    <div>
        <Topbar/>
        <Backdrop />
    </div>
    <div className="Main">{props.children}</div>
  </>
);

export default layout;
