import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-regular-svg-icons/faLightbulb";
import ContentEditable from "react-contenteditable";

import '../Idea/Idea.css';
import '../OnBoarding/OnBoarding.css'

class NewIdea extends React.Component {
  constructor(props) {
    super(props);
    this.defaults = {
        title: "Give your idea a short title...",
        description: "Please enter description of the idea..."
      };
    this.state = {
      title: this.defaults.title,
      description: this.defaults.description,
    }
  }

  handleKeyPress = field => evt => {
    if (evt.key === 'Enter') {
      this.storeField(field)(evt);
    }
  };

  handleChange = field => evt => {
    this.setState({[field]: evt.target.value});
  };

  storeField = field => evt => {
    if (this.state[field] !== this.defaults[field]) {
      console.log('storing field', field, this.state[field])
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
      <div className="Idea center">
        <div className="icon">
          <FontAwesomeIcon icon={faLightbulb} size="5x"/>
        </div>
        <ContentEditable
          className="title"
          html={this.state.title}
          onChange={this.handleChange("title")}
          onBlur={this.storeField("title")}
          onKeyPress={this.handleKeyPress("title")}
          tabIndex="1"
          onFocus={this.handleFocus}
        />
        <ContentEditable
          className="description"
          html={this.state.description}
          onChange={this.handleChange("description")}
          onBlur={this.storeField("description")}
          onKeyPress={this.handleKeyPress("description")}
          tabIndex="2"
          onFocus={this.handleFocus}
        />
      </div>
    );
  }
}


export default NewIdea;

