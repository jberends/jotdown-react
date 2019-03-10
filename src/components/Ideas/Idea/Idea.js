import React, {Component} from "react";
import "./Idea.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-regular-svg-icons/faLightbulb";
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons/faTrashAlt";
import {faThumbsDown} from "@fortawesome/free-regular-svg-icons/faThumbsDown";
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons/faThumbsUp";
import CircularProgress from "@material-ui/core/CircularProgress";

import {ideasStore} from "../../../firebaseApi";


class Idea extends Component {

  deleteIdeaFSHandler = () => {
    console.log("[deleteIdeaFSHandler] deleting an idea", this.props.idea);
    ideasStore.doc(this.props.idea.id).delete()
      .then(doc => (console.log('delete finished of idea', this.props.idea)))
      .catch(err => console.log('oops, something happened during deletion', err))
  };

  voteHandler = (vote) => () => {
    console.log("[voteHandler] has voted:", vote)
  };

  render() {
    return this.props.idea ? (
      <div className="Idea center">
        <div className="icon">
          <FontAwesomeIcon icon={faLightbulb} size={"5x"}/>
        </div>
        <div className="title">{this.props.idea.title}</div>
        <div className="description">{this.props.idea.description}</div>

        <div className="ButtonBar">
          <button disabled={false} onClick={this.voteHandler(1)}>
            <FontAwesomeIcon icon={faThumbsUp}/> Upvotes
          </button>
          <button disabled={false} onClick={this.voteHandler(-1)}>
            <FontAwesomeIcon icon={faThumbsDown}/> Downvote
          </button>
          <button className="button delete" onClick={this.deleteIdeaFSHandler}>
            <FontAwesomeIcon icon={faTrashAlt}/> Delete idea
          </button>
        </div>
      </div>
    ) : (
      <div className="Idea center">
        <CircularProgress size={30} thickness={5}/>
      </div>
    );
  }
}

export default Idea;
