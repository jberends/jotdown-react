import React, { Component } from "react";
import "./Topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle} from '@fortawesome/free-solid-svg-icons/faUserCircle';

class Topbar extends Component {
  render() {
    return (
      <div className="TopBar">
        <div id="topleft"/>
        <div id="center" />
        <div id="topright" className="Account">
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
        </div>
      </div>
    );
  }
}

export default Topbar;

