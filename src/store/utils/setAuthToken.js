import axios from 'axios';

export const  setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};
export const setAgent = (details) => {
  axios.defaults.headers.common['agent'] = details;
};

// export default {setAuthToken, setAgent};
