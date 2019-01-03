import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-regular-svg-icons/faLightbulb";
import ContentEditable from "react-contenteditable";

import '../Idea/Idea.css';
import '../OnBoarding/OnBoarding.css'

class NewIdea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title here...",
      description: "description here",
    }

  }

  handleKeyPress = evt => {
    if (evt.key === 'Enter') {
      this.handleAccountName(evt)
    }
  };

  handleChange = evt => {
    this.setState({username: evt.target.value});
  };

  handleTitle = evt => {
    if (this.state.title !== this.welcomeText) {
      this.props.registerHandler(this.state.title);
    }
  };

  render() {
    return (
      <div className="Idea center">
        <div className="icon">
          <FontAwesomeIcon icon={faLightbulb} size="5x"/>
        </div>
        <ContentEditable
          className="title"
          html={this.state.title}
          onChange={(evt) => this.setState({title: evt.target.value})}
          onBlur={this.handleTitle}
          onKeyPress={this.handleKeyPress}
        />
        <div className="description">{this.state.description}</div>
      </div>
    );
  }
}


export default NewIdea;

