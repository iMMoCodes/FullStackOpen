import React, { useState } from 'react';

const Button = ({ text, value, setValue }) => {
  return <button onClick={() => setValue(value + 1)}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / total || 0;
  const positive = (good / total) * 100 + '%' || 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text='good' value={good} setValue={setGood} />
      <Button text='neutral' value={neutral} setValue={setNeutral} />
      <Button text='bad' value={bad} setValue={setBad} />
      <h1>Statistics</h1>
      {total !== 0 ? (
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={total} />
            <StatisticLine text='average' value={average} />
            <StatisticLine text='positive' value={positive} />
          </tbody>
        </table>
      ) : (
        <h3>No feedback given</h3>
      )}
    </div>
  );
};

export default App;
