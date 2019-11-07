
import { userConstants } from "../actions/types";

const initialState = {
  newsLetterLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case userConstants.NEWS_LETTER_LOADING:
      return {
        ...state,
        newsLetterLoading: action.payload
      };

    default:
      return state;
  }
}

