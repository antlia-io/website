import {userConstants} from './types'

export const userNewsLetterHandler = userData => dispatch => {
    dispatch({
      type: userConstants.NEWS_LETTER_LOADING,
      payload: true,
    });
  };