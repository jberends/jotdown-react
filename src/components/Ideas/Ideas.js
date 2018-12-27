import React, { Component } from "react";

import ideas from "../../ideas.json";
import Idea from "./Idea/Idea";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons/faLightbulb';

class Ideas extends Component {
  constructor(props) {
    super();
    // this.nextIdea = this.nextQuote.bind(this);
    // this.prevIdea = this.prevQuote.bind(this);
    // this.randomIdea = this.randomQuote.bind(this);
    this.state = { counter: 1, ideaArrayPosition: 2 };
  }

  render() {
    return (
      <>
        <Idea idea={ideas[this.state.ideaArrayPosition]} />
      </>
    );
  }
}

export default Ideas;
