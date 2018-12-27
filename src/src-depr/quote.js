import React from 'react';

const Quote = ({quote, author}) => {
    return(
    <div className="quote">
        <h2>{quote}</h2>
        <h3>{author}</h3>
    </div>)
};

export default Quote;
