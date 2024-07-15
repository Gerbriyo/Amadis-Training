import React from 'react';

const InputField = ({ inpFieldRef, inputValue, handleTyping, isActive }) => {
  return (
    <input
      type="text"
      className="input-field"
      ref={inpFieldRef}
      value={inputValue}
      onChange={handleTyping}
      placeholder="Start typing..."
      disabled={!isActive}
    />
  );
};

export default InputField;
