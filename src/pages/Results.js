// pages/Results.js
import React from 'react';
import { Link } from 'react-router-dom';

function Results() {
  return (
    <div className="results">
      <h1>Results</h1>
      <p>This is where the AI's response will appear.</p>
      <Link to="/ask-question">
        <button>Ask Another Question</button>
      </Link>
    </div>
  );
}

export default Results;
