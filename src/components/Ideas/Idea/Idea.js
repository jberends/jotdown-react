import React from "react";
import "./Idea.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from '@fortawesome/free-regular-svg-icons/faLightbulb';

const Idea = idea => {
  // console.log("in idea with", idea);
  return (
    <div className="Idea center">
      <div className="icon">
        <FontAwesomeIcon icon={faLightbulb} size="5x"/>
      </div>
      <div className="title">{idea.idea.title}</div>
      <div className="description">{idea.idea.description}</div>
    </div>
  );
};

export default Idea;
