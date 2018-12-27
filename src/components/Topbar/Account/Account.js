import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons/faUserCircle";

import './Account.css';

export function Account() {
  return (
    <div id="topright" className="Account">
      <FontAwesomeIcon icon={faUserCircle} size="2x" />
    </div>
  );
}
