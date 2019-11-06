import axios from 'axios';
import { userConstants } from './types';
import { toast } from 'react-toastify';
import { ApiUrl } from '../config';


export const applicationForm = ApplicationData => dispatch => {
    dispatch({
        type: userConstants.APPLICATION_FORM_DATA,
        payload: true
    })
    console.log('this is data', ApplicationData)

    axios
        // .post("https://api.rnssol.com/api/rnsadmin/careerAdd", ApplicationData)
        .post(ApiUrl + '/rnsadmin/careerAdd', ApplicationData)
        .then(res => {
            console.log('form res', res.data)

            dispatch({
                type: userConstants.APPLICATION_FORM_DATA,
                payload: false,
            });
            toast.success(res.data.message);
        })
        .catch(err => {
            dispatch({
                type: userConstants.APPLICATION_FORM_DATA,
                payload: false,
            });
            toast.error(err.response.data.message);
        })
};