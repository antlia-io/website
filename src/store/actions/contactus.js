import {userConstants} from './types'
import { toast } from 'react-toastify';
// import { ApiUrl } from '../config';
// import axios from 'axios';

export const userContactHandler = userData => dispatch => {
    dispatch({
      type: userConstants.CONTACT_SUBMIT_LOADING,
      payload: true,
    });
    toast.success("Form submitted successfully")
    // axios
    //   .post(ApiUrl + '/rnsadmin/contactAdd', userData)
    //   .then(res => {
    //     dispatch({
    //         type: userConstants.CONTACT_SUBMIT_LOADING,
    //         payload: false,
    //       });
    //     toast.success(res.data.message);
    //   })
    //   .catch(err => {
    //     dispatch({
    //         type: userConstants.CONTACT_SUBMIT_LOADING,
    //         payload: false,
    //       });
    //     toast.error(err.response.data.message);
    //   })
  };

  export const modalHandler = () => dispatch => {
   
  dispatch({
    type:userConstants.TOGGLE_MODAL,
    payload:false,
  })
  };
