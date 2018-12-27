import React, { Component } from "react";

import "./App.css";
import Button from "./src-depr/button";
import Quote from "./src-depr/quote";
import quotes from "./quotes.json";

class App extends Component {
  constructor(props) {
    super();

    this.nextQuote = this.nextQuote.bind(this);
    this.prevQuote = this.prevQuote.bind(this);
    this.randomQuote = this.randomQuote.bind(this);
    this.state = { counter: 1, quoteArrayPosition: 0 };
  }

  prevQuote() {
    const { quoteArrayPosition } = this.state;
    if (quoteArrayPosition === 0) {
      this.setState(prevState => ({
        quoteArrayPosition: quotes.length - 1,
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        quoteArrayPosition: prevState.quoteArrayPosition - 1,
        counter: prevState.counter + 1
      }));
    }
  }

  nextQuote() {
    const { quoteArrayPosition } = this.state;
    if (quoteArrayPosition === quotes.length - 1) {
      this.setState(prevState => ({
        quoteArrayPosition: 0,
        counter: prevState.counter + 1
      }));
    } else {
      this.setState(prevState => ({
        quoteArrayPosition: prevState.quoteArrayPosition + 1,
        counter: prevState.counter + 1
      }));
    }
  }

  randomQuote() {
    const randomInput = Math.floor(
      Math.random() * Math.floor(quotes.length - 1)
    );
    console.log(randomInput);
    this.setState(prevState => ({
      quoteArrayPosition: randomInput,
      counter: prevState.counter + 1
    }));
  }

  render() {
    const { counter, quoteArrayPosition } = this.state;

    return (
      <div className="App">
        <div className="counter">
          <p className="counter__number">{counter}</p>
        </div>
        <Quote
          quote={quotes[quoteArrayPosition].quote}
          author={quotes[quoteArrayPosition].author}
        />
        <div className="buttons">
          <Button Text="Prev Quote" onClick={this.prevQuote} />
          <Button Text="Random Quote" onClick={this.randomQuote} />
          <Button Text="Next Quote" onClick={this.nextQuote} />
        </div>
      </div>
    );
  }
}

export default App;
