import React, {Component} from 'react';

import ideas from "../../ideas.json";
import Idea from "./Idea/Idea";

class Ideas extends Component {
  constructor(props) {
    super();
    // this.nextIdea = this.nextQuote.bind(this);
    // this.prevIdea = this.prevQuote.bind(this);
    // this.randomIdea = this.randomQuote.bind(this);
    this.state = { counter: 1, ideaArrayPosition: 0 };
  }

  render() {
    return (
      <div>
        <Idea idea={ideas[this.state.ideaArrayPosition]} />
        {/*<p>Ideas here please</p>*/}
      </div>
    );
  }
}

export default Ideas;
