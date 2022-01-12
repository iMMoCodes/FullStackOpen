import React from 'react';
import axios from 'axios';
import personService from '../services/persons';

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const addPerson = (e) => {
    e.preventDefault();
    const addedPerson = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((e) => e.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      personService.create(addedPerson).then((response) => {
        setPersons(persons.concat(response.data));
      });
    }
    setNewName('');
    setNewNumber('');
  };

  const handleNewPerson = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNewPerson} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
