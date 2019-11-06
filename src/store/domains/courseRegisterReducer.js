
import { userConstants } from "../actions/types";

const initialState = {
  courseRegisterLoading: false,
  registerForm: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.COURSE_REGISTER_LOADING:
      console.log('reducer', action.payload)
      return {
        ...state,
        courseRegisterLoading: action.payload
      };


    default:
      return state;
  }
}

