import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:3000/
const url = 'users';

// http://localhost:3000/login METHOD: POST
export const postLogin = (userObj) => {
  return axiosService.post(`${API_ENDPOINT}/login`, userObj);
};

// http://localhost:3000/users/register METHOD: POST
export const postRegister = userObj => {
  return axiosService.post(`${API_ENDPOINT}/${url}/register`, userObj);
};
