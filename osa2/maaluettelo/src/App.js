import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    if (search !== '') {
      axios
        .get(`https://restcountries.com/v3.1/name/${search}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => setData([]));
    }
  }, [search]);

  return (
    <>
      <div>
        find countries:
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        {data.length > 10 ? (
          <h2>Too many matches, specify another filter</h2>
        ) : data.length < 1 ? (
          <h2>No matches found</h2>
        ) : data.length === 1 ? (
          data.map((country) => {
            const languages = Object.values(country.languages);
            return (
              <div key={country.ccn3}>
                <h1>{country.name.common}</h1>
                <h3>Capital {country.capital}</h3>
                <h3>Population {country.population}</h3>
                <h2>Languages</h2>
                <ul>
                  {languages.map((language) => {
                    return <li key={language}>{language}</li>;
                  })}
                </ul>
                <img
                  style={{ maxHeight: 300, maxWidth: 300 }}
                  src={country.flags.png}
                />
              </div>
            );
          })
        ) : (
          data.map((country) => {
            return <h2 key={country.ccn3}>{country.name.common}</h2>;
          })
        )}
      </div>
    </>
  );
};

export default App;
