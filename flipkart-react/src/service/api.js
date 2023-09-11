import axios from 'axios';

const URL = 'https://flipkart-clone-server-xxwm.onrender.com';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (err) {
        console.log(err);
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (err) {
        return err.response;
    }
}