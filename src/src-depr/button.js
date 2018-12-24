import React from 'react';

const Button = ({ Text, onClick, disabled }) => {
    return <button disabled={disabled} onClick={onClick} >{Text}</button>
}

export default Button;
