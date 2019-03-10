import React, {Component} from "react";
import "./Idea.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-regular-svg-icons/faLightbulb";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons/faTrashAlt";
import CircularProgress from "@material-ui/core/CircularProgress";
import {ideasApi} from "../../../services";

class Idea extends Component {
  deleteIdeaHandler = () => {
    console.log("[deleteDataHandler] deleting an idea", this.props.idea);
    return ideasApi
      .delete(`https://my-json-server.typicode.com/jberends/jotdown-react/ideas/${this.props.idea.id}`)
      .then(response => console.log("[deleteDataHandler] done deleting the idea", response))
      .catch(error => console.log("[deleteDataHandler] failed to delete an idea", error));
  };

  deleteIdeaFSHandler = () => {
    console.log("[deleteIdeaFSHandler] deleting an idea", this.props.idea);
  };

  render() {
    return this.props.idea ? (
      <div className="Idea center">
        <div className="icon">
          <FontAwesomeIcon icon={faLightbulb} size={"5x"}/>
        </div>
        <div className="title">{this.props.idea.title}</div>
        <div className="description">{this.props.idea.description}</div>
        <button className="button delete" onClick={this.deleteIdeaFSHandler}>
          <FontAwesomeIcon icon={faTrashAlt}/> Delete idea
        </button>
      </div>
    ) : (
      <div className="Idea center">
        <CircularProgress size={30} thickness={5}/>
      </div>
    );
  }
}

export default Idea;
