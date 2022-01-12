import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    const addedPerson = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((e) => e.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(addedPerson));
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

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter shown with: <input value={search} onChange={handleSearch} />
      </div>
      <form onSubmit={addPerson}>
        <h2>Add new</h2>
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
      <h1>Numbers</h1>
      {persons
        .filter((person) => {
          return person.name.toLowerCase().includes(search);
        })
        .map((person) => {
          return (
            <h4 key={person.name}>
              {person.name} {person.number}
            </h4>
          );
        })}
    </div>
  );
};

export default App;
