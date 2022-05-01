import axios from 'axios';

const API = (props) => {
}

// static
API.db = axios.create({
  // baseURL: `${process.env.SERVER_API}`,
  timeout: 1000,
  headers: {
    'content-type': 'application/json'
  },
});

API.initAxios = function() {
  // this.db.interceptors.response.use(response => {
  //   return response;
  // }, error => {
  //   const handledError = (error) => {
  //     if (axios.isCancel(error))
  //       return Error('is canceled');
  //     console.log('API error=', error);
  //     if (error.response && error.response.data) {
  //       return error.response.data;
  //     }
  //     return error;
  //   };
  //   return Promise.reject(handledError);
  // });
}

export default API;