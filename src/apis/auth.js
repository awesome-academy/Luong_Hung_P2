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

// http://localhost:3000/sliderbars METHOD: GET
export const getSliderBar = () => {
  return axiosService.get(`${API_ENDPOINT}/sliderbars`);
};

// http://localhost:3000/movies METHOD: GET
export const getMovie = () => {
  return axiosService.get(`${API_ENDPOINT}/movies`);
};

// http://localhost:3000/promotion METHOD: GET
export const getPromotion = () => {
  return axiosService.get(`${API_ENDPOINT}/promotion`)
}

// http://localhost:3000/users METHOD: GET
export const getAccount = () => {
  return axiosService.get(`${API_ENDPOINT}/users`);
};

// http://localhost:3000/users:id METHOD: PUT
export const putEditAccount = (data) => {
  return axiosService.put(`${API_ENDPOINT}/users/${data.id}`, data);
};
