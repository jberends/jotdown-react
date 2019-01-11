import React from "react";
import "./Idea.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from '@fortawesome/free-regular-svg-icons/faLightbulb';
import CircularProgress from '@material-ui/core/CircularProgress';

const Idea = (props) => {
  return (
    (props.idea) ? (
      <div className="Idea center">
        <div className="icon">
          <FontAwesomeIcon icon={faLightbulb} size="5x"/>
        </div>
        <div className="title">{props.idea.title}</div>
        <div className="description">{props.idea.description}</div>
      </div>
    ) : (
      <div className="Idea center"><CircularProgress size={30} thickness={5} /></div>
    )
  );
};

export default Idea;
