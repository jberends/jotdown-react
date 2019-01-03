import React, { Component } from "react";
import { AppContext } from "../../App";

import ideas from "../../ideas.json";
import Idea from "./Idea/Idea";
import ButtonBar from "./ButtonBar/ButtonBar";
import BottomBar from "./BottomBar/BottomBar";
import OnBoarding from "./OnBoarding/OnBoarding";
import NewIdea from "./NewIdea/NewIdea";


class Ideas extends Component {
  constructor(props) {
    super(props);
    this.nextIdea = this.nextIdea.bind(this);
    this.prevIdea = this.prevIdea.bind(this);
    this.randomIdea = this.randomIdea.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.newIdea = this.newIdea.bind(this);
    this.state = {
      counter: 1,
      ideaArrayPosition: 2,
      newIdea: false,
      numIdeas: ideas.length,
      account: props.account ? props.account.username : {}
    };
  }

  componentWillMount() {
    let localCounter = parseInt(localStorage.getItem("counter"));
    if (localCounter) {
      this.setState({ counter: localCounter });
    }
    this.randomIdea();
  }

  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   localStorage.setItem("counter", nextState.counter)
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem("counter", this.state.counter);
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
  }

  randomIdea() {
    const { numIdeas } = this.state;
    const randomIdea = Math.floor(Math.random() * Math.floor(numIdeas - 1));
    this.setState(prevState => ({
      ideaArrayPosition: randomIdea,
      counter: prevState.counter + 1
    }));
  }

  newIdea() {
    // displays the new idea component, instead of idea.
    this.setState({newIdea: true})
  }

  resetCounter() {
    this.setState({ counter: 1 });
    localStorage.setItem("counter", 1);
  }

  render() {
    const showIdea = this.state.newIdea ? <NewIdea/> : <Idea key={this.state.ideaArrayPosition} idea={ideas[this.state.ideaArrayPosition]} />;
    const showOnBoarding = (
      <AppContext.Consumer>
        {({ registerAccount }) => <OnBoarding registerHandler={registerAccount} />}
      </AppContext.Consumer>
    );

    return (
      <AppContext.Consumer>
        {({ account }) => {
          console.log('[Ideas > account @ 96] ', account);
          return(
            <>
              {account && account.username ? showIdea : showOnBoarding}
              <ButtonBar nextIdea={this.nextIdea} prevIdea={this.prevIdea} newIdea={this.newIdea} randomIdea={this.randomIdea} />
              <BottomBar counter={this.state.counter} resetCounter={this.resetCounter} />
            </>
          )
        }}
      </AppContext.Consumer>
    );
  }
}

export default Ideas;
