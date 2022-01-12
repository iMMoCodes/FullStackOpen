import axios from 'axios';

const baseURL = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(baseURL);
};

const create = (addedPerson) => {
  return axios.post(baseURL, addedPerson);
};

export default {
  getAll,
  create,
};
