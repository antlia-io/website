import { combineReducers } from 'redux';
import contactUsReducer from './contactUsReducer';
import authReducer from './authReducer';
import requestDemoReducer from './requestDemoReducer';
import applicationForm  from './applicationFormReducer';
import courseRegisterReducer from './courseRegisterReducer';
import locale from './locale';

export default combineReducers({
  authUser: authReducer,
  contactUsReducer:contactUsReducer,
  requestDemoData:requestDemoReducer,
  applicationForm: applicationForm,
  courseRegisterReducer: courseRegisterReducer,
  locale,
});
