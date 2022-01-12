import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    const addedPerson = {
      name: newName,
    };
    setPersons(persons.concat(addedPerson));
    setNewName('');
  };

  const handleNewPerson = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewPerson} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h1>Numbers</h1>
      {persons.map((person) => {
        return <h4 key={person.name}>{person.name}</h4>;
      })}
    </div>
  );
};

export default App;
