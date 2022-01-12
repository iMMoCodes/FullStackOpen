import React from 'react';
import personService from '../services/persons';

const Persons = ({ persons, search }) => {
  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.deletePerson(person.id);
    }
  };

  return persons
    .filter((person) => {
      return person.name.toLowerCase().includes(search);
    })
    .map((person) => {
      return (
        <div
          key={person.name}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <h4>
            {person.name} {person.number}
          </h4>
          <button
            style={{ height: 20, marginLeft: 5 }}
            onClick={() => handleDelete(person)}
          >
            Delete
          </button>
        </div>
      );
    });
};

export default Persons;
