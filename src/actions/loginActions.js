import axios from 'axios';
import config from '../config';

export const LOGIN_USER_PENDING = "LOGIN_USER_PENDING";
export const LOGIN_USER_FULFILLED = "LOGIN_USER_FULFILLED";
export const LOGIN_USER_REJECTED = "LOGIN_USER_REJECTED";

export const PROFILE_BUTTON = "PROFILE_BUTTON";
export const SETTINGS_BUTTON = "SETTINGS_BUTTON";



export function userLogin(user) {
    return dispatch => {
       return axios.post(`${config.apiUrl}/dogrulama`, user)
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
                        type: LOGIN_USER_FULFILLED,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: LOGIN_USER_REJECTED,
                        payload: res.data.message
                    })
                }

            })
            .catch(error =>
                dispatch({
                    type: LOGIN_USER_REJECTED,
                    payload: error
                }));
    }
}


export function userProfile(onClick) {
    console.log(onClick);
    return dispatch => {     
                dispatch({
                    type: PROFILE_BUTTON,
                    payload: onClick
                })
    }
}

export function userSettings(onClick) {
    console.log(onClick);
    return dispatch => {     
                dispatch({
                    type: SETTINGS_BUTTON,
                    payload: onClick
                })
    }
}