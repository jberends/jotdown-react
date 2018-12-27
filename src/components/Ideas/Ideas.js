import React, { Component } from "react";

import ideas from "../../ideas.json";
import Idea from "./Idea/Idea";
import ButtonBar from "./ButtonBar/ButtonBar";
import BottomBar from "./BottomBar/BottomBar";

class Ideas extends Component {
  constructor(props) {
    super(props);
    this.nextIdea = this.nextIdea.bind(this);
    this.prevIdea = this.prevIdea.bind(this);
    this.randomIdea = this.randomIdea.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = {
      counter: 1,
      ideaArrayPosition: 2,
      numIdeas: ideas.length
    };
  }

  componentWillMount() {
    let localCounter = parseInt(localStorage.getItem("counter"));
    if (localCounter) {
      this.setState({ counter: localCounter });
    }
  }

  nextIdea() {
    const { ideaArrayPosition, numIdeas } = this.state;
    if (ideaArrayPosition === numIdeas - 1) {
      this.setState(prevState => ({
        ideaArrayPosition: 0,
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        ideaArrayPosition: prevState.ideaArrayPosition + 1,
        counter: prevState.counter + 1
      }));
    }
    localStorage.counter = this.state.counter;
  }

  prevIdea() {
    const { ideaArrayPosition, numIdeas } = this.state;
    if (ideaArrayPosition === 0) {
      this.setState(prevState => ({
        ideaArrayPosition: numIdeas - 1,
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        ideaArrayPosition: prevState.ideaArrayPosition - 1,
        counter: prevState.counter + 1
      }));
    }
    localStorage.counter = this.state.counter;
  }

  randomIdea() {
    const { numIdeas } = this.state;
    const randomIdea = Math.floor(Math.random() * Math.floor(numIdeas - 1));
    this.setState(prevState => ({
      ideaArrayPosition: randomIdea,
      counter: prevState.counter + 1
    }));
    localStorage.counter = this.state.counter;
  }

  resetCounter() {
    this.setState({counter: 1})
    localStorage.counter = 1
  }

  render() {
    return (
      <>
        <Idea idea={ideas[this.state.ideaArrayPosition]} />
        <ButtonBar
          nextIdea={this.nextIdea}
          prevIdea={this.prevIdea}
          randomIdea={this.randomIdea}
        />
        <BottomBar counter={this.state.counter} resetCounter={this.resetCounter} />
      </>
    );
  }
}

export default Ideas;
