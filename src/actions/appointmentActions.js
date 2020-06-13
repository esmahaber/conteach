import axios from 'axios';
import config from '../config';

export const APPOINTMENT_PENDING = "APPOINTMENT_PENDING";
export const APPOINTMENT_FULFILLED = "APPOINTMENT_FULFILLED";
export const APPOINTMENT_REJECTED = "APPOINTMENT_REJECTED";
export const APPOINTMENTDELETE_PENDING = "APPOINTMENTDELETE_PENDING";
export const APPOINTMENTDELETE_FULFILLED = "APPOINTMENTDELETE_FULFILLED";
export const APPOINTMENTDELETE_REJECTED = "APPOINTMENTDELETE_REJECTED";
export const FETCHED_APPOINTMENT = "FETCHED_APPOINTMENT";
export const FETCHED_APPOINTMENT_ERROR = "FETCHED_APPOINTMENT_ERROR";

// Appointment POST
export function addAppointment(data) {
    console.log(data);
    return dispatch => {

        axios.post(`${config.apiUrl}/api/randevular`, data)
            .then(res => {
              
                if (res.data.status) {
                    dispatch({
                        type: APPOINTMENT_FULFILLED,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: APPOINTMENT_REJECTED,
                        payload: res.data.message
                    })
                }

            })
            .catch(error =>
                dispatch({
                    type: APPOINTMENT_REJECTED,
                    payload: error
                }));
    }
}

//Appointment GET
export function fetchAppointment() {
 
    return dispatch => {

        return axios.get(`${config.apiUrl}/api/randevular`)
            .then(res => res.data)
            .then(data =>
                dispatch({
                    type: FETCHED_APPOINTMENT,
                    payload: data
                }))
            .catch(error =>
                dispatch({
                    type: FETCHED_APPOINTMENT_ERROR,
                    payload: error
                }))

    }
}

//Appointmant DELETE
export function deleteAppointment(data) {

    return dispatch => {

        axios.delete(`${config.apiUrl}/api/randevular/` + data)
            .then(res => {
                if (res.data.status) {
                    dispatch({
                        type: APPOINTMENTDELETE_FULFILLED,
                        payload: res.data
                    })
                } else {
                    dispatch({
                        type: APPOINTMENTDELETE_REJECTED,
                        payload: res.data.message
                    })
                }

            })
            .catch(error =>
                dispatch({
                    type: APPOINTMENTDELETE_REJECTED,
                    payload: error
                }));
    }
}