import React from "react";
import "./Scrollbar.css";

const AutoScrollBar = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <div className="item">Item 1</div>
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
        <div className="item">Item 1</div> {/* Duplicate for seamless loop */}
        <div className="item">Item 2</div>
        <div className="item">Item 3</div>
        <div className="item">Item 4</div>
        <div className="item">Item 5</div>
      </div>
    </div>
  );
};

export default AutoScrollBar;
