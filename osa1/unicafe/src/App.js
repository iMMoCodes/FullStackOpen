import React, { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total || 0;
  const positive = (good / total) * 100 || 0;
  return (
    <>
      <h3>Good {good}</h3>
      <h3>Neutral {neutral}</h3>
      <h3>Bad {bad}</h3>
      <h3>All {total}</h3>
      <h3>Average {average}</h3>
      <h3>Positive {positive} %</h3>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h1>Statistics</h1>
      {good || neutral || bad !== 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  );
};

export default App;
