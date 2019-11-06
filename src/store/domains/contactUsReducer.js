
import { userConstants } from "../actions/types";

const initialState = {
  contactUsLoading: false,
  isOpen:true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.CONTACT_SUBMIT_LOADING:
      return {
        ...state,
        contactUsLoading: action.payload
      };
      case userConstants.TOGGLE_MODAL:
        return {
          ...state,
          isOpen: action.payload
        };
    default:
      return state;
  }
}

