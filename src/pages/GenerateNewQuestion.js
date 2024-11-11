// pages/GenerateNewQuestion.js
import React from 'react';

function GenerateNewQuestion() {
  const generateRandomQuestion = () => {
    // Example questions - you can replace these with a more dynamic approach if desired
    const questions = [
      "What's the meaning of life?",
      "How does artificial intelligence work?",
      "Can you explain quantum computing?",
      "What are some interesting facts about the universe?",
    ];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    alert(`Generated Question: ${randomQuestion}`);
  };

  return (
    <div>
      <h1>Generate New Question</h1>
      <button onClick={generateRandomQuestion}>Generate Question</button>
    </div>
  );
}

export default GenerateNewQuestion;
