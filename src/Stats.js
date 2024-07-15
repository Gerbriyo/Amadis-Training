import React from 'react';

const Stats = ({ timeLeft, mistakes, wpm, cpm }) => {
  return (
    <div className="content">
      <ul className="result-details">
        <li className="time">
          <p>Time Left:  <span><b>{timeLeft}</b>s</span></p>
        </li>
        <li className="mistake">
          <p>Mistakes: <span><b>{mistakes}</b></span></p>
          
        </li>
        <li className="wpm">
          <p>WPM: <span><b>{wpm}</b></span></p>
          
        </li>
        <li className="cpm">
          <p>CPM: <span><b>{cpm}</b></span></p>
          
        </li>
      </ul>
    </div>
  );
};

export default Stats;
