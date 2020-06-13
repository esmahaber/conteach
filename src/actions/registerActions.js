import axios from 'axios';
import config from '../config';

export const REGISTER_USER_PENDING = "REGISTER_USER_PENDING";
export const REGISTER_USER_FULFILLED = "REGISTER_USER_FULFILLED";
export const REGISTER_USER_REJECTED = "REGISTER_USER_REJECTED";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";
export const UPDATE_USER_FULFILLED = "UPDATE_USER_FULFILLED";
export const UPDATE_USER_REJECTED = "UPDATE_USER_REJECTED";

export function onNewUserSubmit(user) {
  
        return dispatch => {
           return axios.post(`${config.apiUrl}/kullanicilar`, user)
                .then(res => {
                    if (res.data.status) {
                        //localStorage.setItem('userToken', res.data.token);
                        
                        dispatch({
                            user: user,
                            type: REGISTER_USER_FULFILLED,
                            payload: res.data
                        })
                    } else {
                        dispatch({
                            type: REGISTER_USER_REJECTED,
                            payload: res.data
                        })
                    }
    
                })
                .catch(error =>
                    dispatch({
                        type: REGISTER_USER_REJECTED,
                        payload: error
                    }));
        }
 
    }


export function onUpdateUserSubmit(user) {
    const k_id = sessionStorage.getItem("k_id");

    return dispatch => {
        dispatch({
            type: "UPDATE_USER",
            payload: axios.put(`${config.apiUrl}/kullanicilar/${k_id}`, user)
            .then(res => res.data)
            .catch(error => dispatch({
                type: UPDATE_USER_REJECTED,
                payload: error
            }) )            
        })
        
    }
}