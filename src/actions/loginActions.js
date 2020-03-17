import axios from 'axios';
import config from '../config';

export const LOGIN_USER = "LOGIN_USER";

export function userLogin(user){
    return dispatch => {
        axios.post(`${config.apiUrl}/dogrulama`, user)
        .then(res => {
            console.log(res.data.status)
            if (res.data.status) {
                localStorage.setItem('userToken', res.token);                  
                dispatch({
                    type: LOGIN_USER,
                    payload: res.data.results[0]
                })
            }else{
                console.log(res.data.message);
            }            

        })
        .catch(error => console.log(error))
    }
}
