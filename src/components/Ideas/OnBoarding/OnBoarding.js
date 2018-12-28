import React, { Component } from "react";

import "../Idea/Idea.css";
import "./OnBoarding.css";
import ContentEditable from "react-contenteditable";

class OnBoarding extends Component {
  constructor(props) {
    super(props);
    this.welcomeText = "Your name here";
    this.state = {
      username: props.account ? props.account.username : this.welcomeText
    };
  }

  handleChange = evt => {
    console.log("handleChange", evt);
    this.setState({ username: evt.target.value });
  };

  handleAccountName = evt => {
    console.log("[OnBoarding > handleAccountName @ 21]", evt);
    if (this.state.username !== this.welcomeText) {
      localStorage.setItem("account", JSON.stringify({ username: this.state.username }));
      console.log(
        "[OnBoarding > handleAccountName @ 25] saving username to localstorage",
        localStorage.getItem("account")
      );
    }
  };

  render() {
    return (
      <div className="Idea">
        <span className="greeting">
          <span className="message">Good morning, </span>
          <ContentEditable
            className="name"
            html={this.state.username}
            onChange={this.handleChange}
            onBlur={this.handleAccountName}
          />
          {/*<span className="name" contentEditable={true} spellCheck={false}>*/}
          {/*{this.props.accountname ? this.props.accountname : showUserNameInputField}*/}
          {/*</span>*/}
          <span className="punctuation">{this.state.username !== this.welcomeText ? "." : "..."}</span>
        </span>
      </div>
    );
  }
}

export default OnBoarding;
