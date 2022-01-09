import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
  ];
  const [selected, setSelected] = useState(0);
  const points = Array(anecdotes.length).fill(0);
  const [copy, setCopy] = useState([...points]);
  const [update, setUpdate] = useState(true);

  const handleClick = () => {
    const randomValue = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomValue);
  };

  const handleVote = () => {
    copy[selected] += 1;
    setCopy(copy);
    setUpdate(!update);
  };

  const highestNumberOfVotes = Math.max(...copy);
  const indexOfHighestAnecdote = copy.indexOf(highestNumberOfVotes);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <h2>{anecdotes[selected]}</h2>
      <h3>has {copy[selected]} votes</h3>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      {highestNumberOfVotes !== 0 ? (
        <div>
          <h2>{anecdotes[indexOfHighestAnecdote]}</h2>
          <h3>has {highestNumberOfVotes} votes</h3>
        </div>
      ) : (
        <h2>None has been rated yet</h2>
      )}
    </>
  );
};

export default App;
