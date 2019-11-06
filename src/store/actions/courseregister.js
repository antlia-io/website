import {userConstants} from './types'
import { toast } from 'react-toastify';
import { ApiUrl } from '../config';
import axios from 'axios';

export const userCourseRegisterHandler = userData => dispatch => {
  console.log('action', userData)
    dispatch({
      type: userConstants.COURSE_REGISTER_LOADING,
      payload: userData,
    });
 
    // axios
    //   .post(ApiUrl + '/rnsadmin/contactAdd', userData)
    //   .then(res => {
    //     dispatch({
    //         type: userConstants.COURSE_REGISTER_LOADING,
    //         payload: false,
    //       });
    //     toast.success(res.data.message);
    //   })
    //   .catch(err => {
    //     dispatch({
    //         type: userConstants.COURSE_REGISTER_LOADING,
    //         payload: false,
    //       });
    //     toast.error(err.response.data.message);
    //   })
  };