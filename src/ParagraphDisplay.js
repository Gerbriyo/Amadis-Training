// src/ParagraphDisplay.js
import React from 'react';

const ParagraphDisplay = ({ typingTextRef }) => {
  return (
    <div className="typing-text">
      <p  ref={typingTextRef}> </p>
    </div>
  );
};

export default ParagraphDisplay;
