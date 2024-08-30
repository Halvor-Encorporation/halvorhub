import React, { useState } from 'react';
import Button from '@mui/material/Button';
import questions from '../data/thisorthat.json'; // Adjust the path as needed

const ThisOrThat = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
