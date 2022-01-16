import React from 'react';
import personService from '../services/persons';

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setNotificationMessage,
}) => {
  const addPerson = (e) => {
    e.preventDefault();
    const addedPerson = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((e) => e.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personService
          .update(
            persons.filter((person) => person.name === newName)[0].id,
            addedPerson
          )
          .catch((err) => {
            setNotificationMessage(
              `Information of ${addedPerson.name} has already been removed from the server`
            );
            setTimeout(() => {
              setNotificationMessage(null);
            }, 2000);
          });
        setNotificationMessage(`Updated ${addedPerson.name}`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 2000);
      }
    } else {
      personService
        .create(addedPerson)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNotificationMessage(`Added ${response.data.name}`);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 2000);
        })
        .catch((error) => {
          console.log(error.response.data);
          setNotificationMessage(error.response.data.error);
          setTimeout(() => {
            setNotificationMessage(null);
          }, 2000);
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
