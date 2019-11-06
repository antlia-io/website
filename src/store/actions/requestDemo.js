import {userConstants} from './types'
import { toast } from 'react-toastify';
import { ApiUrl } from '../config';
import axios from 'axios';

export const requestDemoHandler = userData => dispatch => {
    dispatch({
      type: userConstants.REQUEST_DEMO_LOADING,
      payload: true,
    });
 
    axios
      .post(ApiUrl + '/rnsadmin/demoRequestAdd', userData)
      .then(res => {
        dispatch({
            type: userConstants.REQUEST_DEMO_LOADING,
            payload: false,
          });
        toast.success(res.data.message);
      })
      .catch(err => {
        dispatch({
            type: userConstants.REQUEST_DEMO_LOADING,
            payload: false,
          });
        toast.error(err.response.data.message);
      })
  };