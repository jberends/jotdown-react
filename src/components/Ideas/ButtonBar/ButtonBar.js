import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faRandom } from "@fortawesome/free-solid-svg-icons/faRandom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

import "./ButtonBar.css"

class ButtonBar extends Component {
  render() {
    return (
      <div className="ButtonBar">
        <button disabled={false} onClick={this.props.prevIdea}>
          <FontAwesomeIcon icon={faAngleLeft} /> Previous
        </button>
        <button disabled={false} onClick={this.props.randomIdea}>
          <FontAwesomeIcon icon={faRandom} /> Random
        </button>
        <button disabled={false} onClick={this.props.nextIdea}>
          Next <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    );
  }
}

export default ButtonBar;
