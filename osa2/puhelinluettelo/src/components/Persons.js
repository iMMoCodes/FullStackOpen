import React from 'react';

const Persons = ({ persons, search }) => {
  return persons
    .filter((person) => {
      return person.name.toLowerCase().includes(search);
    })
    .map((person) => {
      return (
        <h4 key={person.name}>
          {person.name} {person.number}
        </h4>
      );
    });
};

export default Persons;
