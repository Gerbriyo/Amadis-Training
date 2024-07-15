import React, { useState, useEffect, useRef } from 'react'; //managing state, lifecycle methods
import Lottie from 'react-lottie';
import ParagraphDisplay from './ParagraphDisplay';
import InputField from './InputField';
import Stats from './Stats';
import paragraphs from './paragraphs.json';
import animationData from './Animation.json';
import './style.css';

const App = () => {
  const [maxTime, setMaxTime] = useState(60); //Maximum time for the test.
  const [timeLeft, setTimeLeft] = useState(maxTime); //Time left in the test.
  const [charIndex, setCharIndex] = useState(0); //Current character index in paragraph.
  const [mistakes, setMistakes] = useState(0);
  const [isTyping, setIsTyping] = useState(false); //typing has started.
  const [wpm, setWpm] = useState(0); //Words per minute.
  const [cpm, setCpm] = useState(0); //Characters per minute.
  const [inputValue, setInputValue] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const typingTextRef = useRef(null); //changes the values without re render
  const inpFieldRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    loadParagraph();
    return () => {
      clearInterval(timerRef.current); // Clear the timer when the component unmounts.
    };
  }, []);

  useEffect(() => {
    if (isTyping && timeLeft > 0) { 
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000); //isTyping - true and timeLeft-greater than 0, start a timer decrements timeLeft every second.
    } 
    else if (timeLeft === 0) {
      clearInterval(timerRef.current);
      setIsTyping(false);
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        setShowResults(true);
      }, 3000); // timeLeft - 0, stop the timer, isTyping - false, animation shown for 3 seconds, then results.
    }
    return () => clearInterval(timerRef.current);
  }, [isTyping, timeLeft]);

  const loadParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length); //Selects a random paragraph.
    typingTextRef.current.innerHTML = '';  // Clears the current paragraph display
      // Splits the paragraph into characters and wraps each in a span element
    paragraphs[randomIndex].split("").forEach(char => {
      const span = document.createElement("span");
      span.innerText = char;
      typingTextRef.current.appendChild(span);
    });
      // Sets the first character to be active
    typingTextRef.current.querySelectorAll("span")[0].classList.add("active");
    setCharIndex(0); //Resets state variables
    setMistakes(0);
    setWpm(0);
    setCpm(0);
    setTimeLeft(maxTime);
    setIsTyping(false);
    setInputValue('');
    setIsActive(true);
    setShowResults(false);
    inpFieldRef.current.focus();
  };

  const handleTyping = (e) => {
    const typedValue = e.target.value; // Updates the inputValue state
    setInputValue(typedValue);

 // Retrieves characters and the current typed character
    const characters = typingTextRef.current.querySelectorAll("span");
    const typedChar = typedValue.split("")[charIndex];


  // If there is time left and characters to type
    if (charIndex < characters.length - 1 && timeLeft > 0) {
      if (!isTyping) {
        setIsTyping(true);
      }
       // Handles backspacing
      if (typedChar == null) {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
          if (characters[charIndex].classList.contains("incorrect")) {
            setMistakes(prev => prev - 1);
          }
          characters[charIndex].classList.remove("correct", "incorrect");
        }
      } else {
         // Updates the current character's status (correct/incorrect)
        if (characters[charIndex].innerText === typedChar) {
          characters[charIndex].classList.add("correct");
        } else {
          setMistakes(prev => prev + 1);
          characters[charIndex].classList.add("incorrect");
        }
          // Moves to the next character
        setCharIndex(prev => prev + 1);
      }

// Updates the active character
      characters.forEach(span => span.classList.remove("active"));
      characters[charIndex].classList.add("active");
//Calculates WPM and CPM
      const correctChars = [...characters].filter(span => span.classList.contains("correct")).length; //Filtering Correct Characters:
      const newWpm = Math.round((correctChars / 5) / (maxTime - timeLeft) * 60);
      setWpm(newWpm < 0 || !newWpm || newWpm === Infinity ? 0 : newWpm);

      setCpm(correctChars);
    } else {
      // If the time is up or all characters are typed, stops typing and disables the input
      clearInterval(timerRef.current);
      setIsTyping(false);
      setIsActive(false);
      inpFieldRef.current.blur();
    }
  };

  const handleDurationChange = (e) => {
    const newMaxTime = parseInt(e.target.value);
    setMaxTime(newMaxTime);
    setTimeLeft(newMaxTime);
  };

  const resetTest = () => {
    loadParagraph();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="wrapper">
    <h1 className="heading">Touch-Typist-Test</h1>
    <label className="duration-label">
        Select Duration: 
        <select onChange={handleDurationChange} value={maxTime}>
          <option value={30}>30 seconds</option>
          <option value={60}>60 seconds</option>
          <option value={120}>120 seconds</option>
        </select>
      </label>
      <InputField
        inpFieldRef={inpFieldRef}
        inputValue={inputValue}
        handleTyping={handleTyping}
        isActive={isActive}
      />
      <div className="content-box">
        <ParagraphDisplay typingTextRef={typingTextRef} />
        {!showAnimation && !showResults && (
          <Stats
            timeLeft={timeLeft}
            mistakes={mistakes}
            wpm={wpm}
            cpm={cpm}
          />
        )}
        {showAnimation && (
          <div className="animation-container">
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        )}
        {showResults && (
          <div className="result-box">
            <h2>Results</h2>
            <p>Mistakes: {mistakes}</p>
            <p>WPM: {wpm}</p>
            <p>CPM: {cpm}</p>
          </div>
        )}
        {!showAnimation && (
          <button onClick={resetTest}>Reset</button>
        )}
      </div>
    </div>
  );
};
export default App;
