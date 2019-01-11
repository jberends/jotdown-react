import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-regular-svg-icons/faLightbulb";
import ContentEditable from "react-contenteditable";

import '../Idea/Idea.css';
import '../OnBoarding/OnBoarding.css'
import axios from 'axios';

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
    console.log('[NewIdea > handlekeypress @ 23]', evt.key);
    if (evt.key === 'Enter') {
      console.log('[NewIdea > Enterkeypressed @ 25] Store the key', evt.key);
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

  /**
   * Stores a new idea to the database and returns a Promise.
   */
  postIdeaHandler = () => {
  console.log('[postIdeaHandler] posting a new idea', this.state);
    const data = {
      title: this.state.title,
      description: this.state.description
    };
    return axios.post("https://my-json-server.typicode.com/jberends/jotdown-react/ideas", data)
      .then(response => (console.log('[postIdeahandler] done posting new idea', response)))
      .catch(error => (console.log('[postIdeaHandler] failed to post a new idea', error )))
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
        <button onClick={this.postIdeaHandler}>Add Idea to server</button>
      </div>
    );
  }
}


export default NewIdea;

