import config from '../config';
const url = (endpoint) => {
    return `${config.apiUrl}/${endpoint}`;
}

const post = (endpoint, data ={}) => {
    const requestUrl = url(endpoint);
    
    return fetch(requestUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
        
      // return axios.post(requestUrl, data).then(res => res);
}

export{
    post
}