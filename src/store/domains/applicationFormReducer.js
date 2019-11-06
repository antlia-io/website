import {userConstants} from '../actions/types'

const initialState = {
    applicationFormLoading: false
  };

export default (state = initialState, action)=>{
    switch (action.type) {
        case userConstants.APPLICATION_FORM_DATA:
            return{
                ...state,
                applicationFormLoading : action.payload
            }
    
        default: return {state};
    }
}