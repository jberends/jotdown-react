import React from 'react';
import './BottomBar.css';

const BottomBar = ({counter, resetCounter}) => {
  return (
    <div className="BottomBar" onClick={resetCounter}>
      {counter}
    </div>
  );
};

export default BottomBar;
