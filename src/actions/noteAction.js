import axios from 'axios';
import config from '../config';
export const NOTE_PENDING = "NOTE_PENDING";
export const NOTE_FULFILLED = "NOTE_FULFILLED";
export const NOTE_REJECTED = "NOTE_REJECTED";

export const FETCHED_NOTE_PENDING = "FETCHED_NOTE_PENDING";
export const FETCHED_NOTE_FULFILLED = "FETCHED_NOTE_FULFILLED";
export const FETCHED_NOTE_REJECTED = "FETCHED_NOTE_REJECTED";


export function leaveNoteScreen(data) {
    
    return dispatch => {
        axios.put(`${config.apiUrl}/kullanicilar/not/degistir/` + data.k_id, data)
            .then(res => {
               
                if (res.data.status) {
                    dispatch({
                        type: NOTE_FULFILLED,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: NOTE_REJECTED,
                        payload: res.data.message
                    })
                }

            })
            .catch(error =>
                dispatch({
                    type: NOTE_REJECTED,
                    payload: error
                }));
    }
}
/*
export function fetchNote(data) {
   
    return dispatch => {
        axios.get(`${config.apiUrl}/kullanicilar/not/` + data)
            .then(res => {
                if (res.data) {
                    dispatch({
                        type: FETCHED_NOTE_FULFILLED,
                        payload: res.data[0]
                    })
                } else {
                    dispatch({
                        type: FETCHED_NOTE_REJECTED,
                        payload: res.data.message
                    })
                }

            })
            .catch(error =>
                dispatch({
                    type: FETCHED_NOTE_REJECTED,
                    payload: error
                }));
    }
}
*/

export function fetchNote() {
    var data = config.adminID
 
    return dispatch => {

        return axios.get(`${config.apiUrl}/kullanicilar/not/`+data)
            .then(res => res.data)
            .then(data =>
                dispatch({
                    type: FETCHED_NOTE_FULFILLED,
                    payload: data
                }))
            .catch(error =>
                dispatch({
                    type:  FETCHED_NOTE_REJECTED,
                    payload: error
                }))

    }
}

