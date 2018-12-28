import React from "react";

import "../Idea/Idea.css";
import "./OnBoarding.css";
import ContentEditable from "react-contenteditable";

class OnBoarding extends React.Component {
  constructor(props) {
    super(props);
    this.welcomeText = "Your name here";
    this.state = {
      username: props.account ? props.account.username : this.welcomeText,
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
    if (this.state.username !== this.welcomeText) {
      this.props.registerHandler(this.state.username);
    }
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
          />
          <span className="punctuation">{this.state.username !== this.welcomeText ? "." : "..."}</span>
        </span>
      </div>
    );
  }
}

export default OnBoarding;
