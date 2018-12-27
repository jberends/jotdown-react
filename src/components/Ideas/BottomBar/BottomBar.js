import React from "react";
import "./BottomBar.css";

const BottomBar = ({ counter, resetCounter }) => {
  return (
    <div className="BottomBar" >
      <div id="bottomLeft" />
      <div id="bottomCenter" />
      <div id="bottomRight" onClick={resetCounter}>{counter}</div>
    </div>
  );
};

export default BottomBar;
