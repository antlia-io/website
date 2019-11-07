import { combineReducers } from 'redux';
import contactUsReducer from './contactUsReducer';
import authReducer from './authReducer';
import newsLetterReducer from './newsLetterReducer';
import locale from './locale';

export default combineReducers({
  authUser: authReducer,
  contactUsReducer:contactUsReducer,
  newsLetterReducer: newsLetterReducer,
  locale,
});
