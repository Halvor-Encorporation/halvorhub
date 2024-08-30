import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import questionsData from '../data/thisorthat.json'; // Adjust the path as needed

const shuffleArray = (array) => {
  // Function to shuffle the array using the Fisher-Yates algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ThisOrThat = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    // Shuffle questions when the component mounts
    const shuffledQuestions = shuffleArray([...questionsData]);
    setQuestions(shuffledQuestions);
  }, []);

  // Function to handle the next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0); // Restart from the first question
    }
  };

  // Get the current question
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="App-body">
      <h1>This or That</h1>
      {currentQuestion ? (
        <>
          <div className="question-container">
            <p>{currentQuestion.option1} or {currentQuestion.option2}?</p>
          </div>
          <div className="buttonContainer">
            <Button variant="contained" size="large" onClick={nextQuestion}>
              Next
            </Button>
          </div>
        </>
      ) : (
        <p>No questions available.</p>
      )}
    </div>
  );
};

export default ThisOrThat;
