import axios from 'axios';

export function userRegisterRequest(userData){
    
return dispatch => {
    return axios.post('http://localhost:3000/kullanicilar', userData)
}
    
}