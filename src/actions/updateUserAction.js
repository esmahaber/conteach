import axios from 'axios';
import config from '../config';

export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";
export const UPDATE_USER_FULFILLED = "UPDATE_USER_FULFILLED";
export const UPDATE_USER_REJECTED = "UPDATE_USER_REJECTED";


export function updateUser(user) {
    return dispatch => {
        
        axios.put(`${config.apiUrl}/kullanicilar`, user)
            .then(res => {
                if (res.data.status) {
                    //localStorage.setItem('userToken', res.data.token);
                    var date = new Date();
                    date.setTime(date.getTime() + (1800 * 1000));
                    var expiry = '; expires=' + date.toUTCString();
                    document.cookie = 'userToken='+ res.data.token + expiry;
                   
                   //document.cookie = "userToken=" + res.data.token
                    dispatch({
                        user: user,
                        type: UPDATE_USER_FULFILLED,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: UPDATE_USER_REJECTED,
                        payload: res.data.message
                    })
                }

            })
            .catch(error =>
                dispatch({
                    type: UPDATE_USER_REJECTED,
                    payload: error
                }));
    }
}
