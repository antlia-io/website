import axios from 'axios';
import { setAuthToken } from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { userConstants } from './types';
import history from '../history';
import { ApiUrl } from '../config';

export const registerUser = userData => dispatch => {
  dispatch({
    type: userConstants.SIGN_UP_ERROR,
    payload: {},
  });
  dispatch({
    type: userConstants.SIGN_UP_LOADING,
    payload: true,
  });
  axios
    .post(ApiUrl + '/user/signup', userData)
    .then(res => {
      dispatch({
        type: userConstants.SIGN_UP_ERROR,
        payload: {},
      });
      history.push('/signupsuccess');
      dispatch({
        type: userConstants.SIGN_UP_LOADING,
        payload: false,
      });
    })
    .catch(err => {
      dispatch({
        type: userConstants.SIGN_UP_LOADING,
        payload: false,
      });
      setTimeout(() => {
        dispatch({
          type: userConstants.SIGN_UP_ERROR,
          payload: {},
        });
      }, 4000);
      dispatch({
        type: userConstants.SIGN_UP_ERROR,
        payload: err.response.data,
      });
    });
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  dispatch({
    type: userConstants.GET_ERRORS,
    payload: {},
  });
  dispatch({
    type: userConstants.IS_LOADING,
    payload: true,
  });
  axios
    .post(ApiUrl + '/user/signin', userData)
    .then(res => {
      const { token } = res.data;
      // Set token to ls
      // localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      // setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      dispatch({
        type: userConstants.USER_DATA_RES,
        payload: {
          decoded: decoded,
          encoded: res.data,
        },
      });
      if (decoded.smsStatus === true || decoded.twofaStatus === true) {
        history.push('/twofaauth');
      } else if (decoded.smsStatus === false || decoded.twofaStatus === false) {
        // Save to localStorage
        // const { token } = res.data;
        // Set token to ls
        localStorage.setItem('jwtToken', res.data.token);
        // Set token to Auth header
        setAuthToken(res.data.token);
        // Decode token to get user data
        const decoded = jwt_decode(res.data.token);
        localStorage.setItem('socketId', decoded.UserId);
        // Set current user
        setTimeout(() => {
          dispatch(setIdHandler(decoded.UserId));
          dispatch(setIdHandlerTrading(decoded.UserId));
        }, 500);
        dispatch(setCurrentUser(decoded));
        history.push('/dashboard');
      }

      dispatch({
        type: userConstants.IS_LOADING,
        payload: false,
      });
    })
    .catch(err => {
      dispatch({
        type: userConstants.IS_LOADING,
        payload: false,
      });
      setTimeout(() => {
        dispatch({
          type: userConstants.GET_ERRORS,
          payload: {},
        });
      }, 4000);
      dispatch({
        type: userConstants.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: userConstants.SET_CURRENT_USER,
    payload: decoded,
  };
};

