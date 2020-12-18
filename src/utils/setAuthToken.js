import axios from 'axios'


// this utility will add the auth user's jwt to the request header
//a ny routes that are protected will require the jwt in order to access them

const setAuthToken = (token) => {
    if (token) {
        // apply the token to every request header
        axios.defaults.headers.common['Authorization'] = token;

    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;