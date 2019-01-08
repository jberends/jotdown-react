import React from "react";

import "../Idea/Idea.css";
import "./OnBoarding.css";
import ContentEditable from "react-contenteditable";

class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.defaults = {welcomeText: "Your name..."};
    this.state = {
      username: props.account ? props.account.username : this.defaults.welcomeText,
      showSnack: false
    };
  }

  handleKeyPress = evt => {
    if (evt.key === 'Enter') {
      this.handleAccountName(evt)
    }
  };

  handleChange = evt => {
    this.setState({username: evt.target.value});
  };

  handleAccountName = evt => {
    if (this.state.username !== this.defaults.welcomeText) {
      this.props.registerHandler(this.state.username);
    }
  };

  handleFocus = evt => {
    // from: https://stackoverflow.com/questions/6139107/programmatically-select-text-in-a-contenteditable-html-element/6150060#6150060
    // document.execCommand('selectAll',false,null)
    const range = document.createRange();
    range.selectNodeContents(evt.target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  render() {
    return (
      <div className="Idea">
        <span className="greeting">
          <span className="message">Good morning, </span>
          <ContentEditable
            tagname="span"
            className="name"
            html={this.state.username}
            onChange={this.handleChange}
            onBlur={this.handleAccountName}
            onKeyPress={this.handleKeyPress}
            onFocus={this.handleFocus}
            tabIndex="1"
          />
          <span className="punctuation">{this.state.username !== this.welcomeText ? "." : "..."}</span>
        </span>
      </div>
    );
  }
}

export default OnBoarding;
