import axios from 'axios';

const baseURL = '/api/persons';

const getAll = () => {
  return axios.get(baseURL);
};

const create = (addedPerson) => {
  return axios.post(baseURL, addedPerson);
};

const deletePerson = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

const update = (id, addedPerson) => {
  return axios.put(`${baseURL}/${id}`, addedPerson);
};

const personService = {
  getAll,
  create,
  deletePerson,
  update,
};

export default personService;
