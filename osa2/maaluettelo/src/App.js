import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState({});

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

  useEffect(() => {
    if (data.length === 1) {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${search}`
        )
        .then((response) => {
          setWeather(response.data.current);
        });
    }
  }, [data.length, search]);

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
                  alt='flag'
                  src={country.flags.png}
                />
                {weather && data.length === 1 && (
                  <>
                    <h2>Weather in {country.capital}</h2>
                    <h3>Temperature: {weather.temperature} Celsius</h3>
                    <img src={weather.weather_icons} alt='weather' />
                    <h3>
                      Wind: {weather.wind_speed} mph direction{' '}
                      {weather.wind_dir}
                    </h3>
                  </>
                )}
              </div>
            );
          })
        ) : (
          data.map((country) => {
            return (
              <div
                key={country.ccn3}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <h2 key={country.ccn3}>{country.name.common}</h2> &nbsp;
                <button
                  style={{ height: 30 }}
                  onClick={() => setSearch(country.name.common)}
                >
                  Show
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default App;
