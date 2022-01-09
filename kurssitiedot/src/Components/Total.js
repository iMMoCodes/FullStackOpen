import React from 'react';

const Total = ({ parts }) => {
  const numberOfExercises = parts.reduce((s, p) => {
    return s + p.exercises;
  }, 0);

  return <h3>Total of {numberOfExercises} exercises</h3>;
};

export default Total;
