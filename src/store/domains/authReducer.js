import isEmpty from '../validation/is-empty';

import { userConstants } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: {},
  updateIpRes: '',
  changePasswordResponse: '',
  currentIP: {},
  signUpError: {},
  signUpLoading: false,
  changePassError: {},
  changePassLoading: false,
  updateIpError: {},
  updateIpLoading: true,
  resetPassLoading: false,
  resetPassError: {},
  publicIp: '',
  userData: {
    decoded: {},
    encoded: {},
  },
  emailVerificationLoading:true,
  emailVerificationError:{},
};
// RESET_PASS_ERROR: 'RESET_PASS_ERROR',
// RESET_PASS_LOADING: 'RESET_PASS_LOADING',
export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.CLEAR_AUTH:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: {},
        updateIpRes: '',
        changePasswordResponse: '',
        currentIP: {},
        signUpError: {},
        signUpLoading: false,
        changePassError: {},
        changePassLoading: false,
        updateIpError: {},
        updateIpLoading: true,
        resetPassLoading: false,
        resetPassError: {},
        userData: {
          decoded: {},
          encoded: {},
        },
        emailVerificationLoading:false,
        emailVerificationError:{},
      };
    case userConstants.SET_CURRENT_USER:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case userConstants.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case userConstants.USER_DATA_RES:
      return {
        ...state,
        userData: {
          decoded: action.payload.decoded,
          encoded: action.payload.encoded,
        },
      };
    case userConstants.CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        changePassLoading: action.payload,
      };
    case userConstants.CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        changePassError: action.payload,
      };
    //find password
    case userConstants.RESET_PASS_LOADING:
      return {
        ...state,
        resetPassLoading: action.payload,
      };
    case userConstants.RESET_PASS_ERROR:
      return {
        ...state,
        resetPassError: action.payload,
      };

    case userConstants.UPDATE_IP_LOADING:
      return {
        ...state,
        updateIpLoading: action.payload,
      };
    case userConstants.UPDATE_IP_ERROR:
      return {
        ...state,
        updateIpError: action.payload,
      };

    case userConstants.SIGN_UP_LOADING:
      return {
        ...state,
        signUpLoading: action.payload,
      };
    case userConstants.SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };
    case userConstants.UPDATE_IP:
      return {
        ...state,
        updateIpRes: action.payload,
      };
    case userConstants.CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        changePasswordResponse: action.payload,
      };
    case userConstants.GET_IP:
      return {
        ...state,
        currentIP: action.payload,
      };
    case userConstants.GET_IP_ERROR:
      return {
        ...state,
        ipError: action.payload,
      };
    case userConstants.GET_MY_IP:
      return {
        ...state,
        publicIp: action.payload,
      };

      // Email verification
      case userConstants.EMAIL_VERIFICATION_LOADING:
        return {
          ...state,
          emailVerificationLoading: action.payload,
        };
      case userConstants.EMAIL_VERIFICATION_ERROR:
        return {
          ...state,
          emailVerificationError: action.payload,
        };

    default:
      return state;
  }
}

// EMAIL_VERIFICATION_LOADING:'EMAIL_VERIFICATION_LOADING',
// EMAIL_VERIFICATION_ERROR:'EMAIL_VERIFICATION_ERROR',