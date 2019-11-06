import { userConstants } from "../actions/types";

const initialState = {
  requestDemoLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.REQUEST_DEMO_LOADING:
      return {
        ...state,
        requestDemoLoading: action.payload
      };

    default:
      return state;
  }
}

