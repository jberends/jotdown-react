import React from 'react';
import './Idea.css';

const Idea = (idea) => {
    console.log('in idea with', idea)
    return (
        <div className="Idea">
          <div><h1>{idea.idea.title}</h1></div>
          <div><h3>{idea.idea.description}</h3></div>
        </div>
    );
};

export default Idea;


