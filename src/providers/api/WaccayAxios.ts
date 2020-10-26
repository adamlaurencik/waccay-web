import Axios from 'axios';
import FirebaseAppService from './FirebaseAppService';

const waccayAxios = Axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

waccayAxios.interceptors.request.use(async (config) => {
  const token = await FirebaseAppService.auth().currentUser?.getIdToken();
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Auhorization = `Bearer ${token}`;
  }
  return config;
});

waccayAxios.interceptors.response.use(undefined, (error) => {
  if (error.config && error.response && error.response.status === 401) {
    return waccayAxios.request({ ...error.config });
  }
  return Promise.reject(error);
});

export default waccayAxios;
