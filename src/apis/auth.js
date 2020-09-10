import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from '../constants';

// http://localhost:3100/
const url = 'users';

// http://localhost:3100/login METHOD: POST
export const postLogin = (userObj) => {
  return axiosService.post(`${API_ENDPOINT}/login`, userObj);
};

// http://localhost:3100/users/register METHOD: POST
export const postRegister = userObj => {
  return axiosService.post(`${API_ENDPOINT}/${url}/register`, userObj);
};

// http://localhost:3100/sliderbars METHOD: GET
export const getSliderBar = () => {
  return axiosService.get(`${API_ENDPOINT}/sliderbars`);
};

// http://localhost:3100/movies METHOD: GET
export const getMovie = () => {
  return axiosService.get(`${API_ENDPOINT}/movies`);
};

// http://localhost:3100/promotion METHOD: GET
export const getPromotion = () => {
  return axiosService.get(`${API_ENDPOINT}/promotion`)
}

// http://localhost:3100/users METHOD: GET
export const getAccount = () => {
  return axiosService.get(`${API_ENDPOINT}/users`);
};

// http://localhost:3100/users:id METHOD: PUT
export const putEditAccount = (data) => {
  return axiosService.put(`${API_ENDPOINT}/users/${data.id}`, data);
};

// http://localhost:3100/sessions METHOD: GET
export const getBookingTime = () => {
  return axiosService.get(`${API_ENDPOINT}/sessions`)
}

// http://localhost:3100/theaters METHOD: GET
export const getTheaters = () => {
  return axiosService.get(`${API_ENDPOINT}/theaters`)
}

// http://localhost:3100/branchs METHOD: GET
export const getBranchs = () => {
  return axiosService.get(`${API_ENDPOINT}/branchs`)
}

// http://localhost:3100/users METHOD: DELETE
export const deleteUser = (data) => {
  return axiosService.delete(`${API_ENDPOINT}/users/${data.id}`)
}

// http://localhost:3100/movies METHOD: DELETE
export const deleteMovie = (data) => {
  return axiosService.delete(`${API_ENDPOINT}/movies/${data.id}`)
}

// http://localhost:3100/movies METHOD: PUT
export const putEditMovie = (data) => {
  return axiosService.put(`${API_ENDPOINT}/movies/${data.id}`, data)
}

// http://localhost:3100/movies METHOD: POST
export const postAddMovie = (data) => {
  return axiosService.post(`${API_ENDPOINT}/movies/`, data)
}
