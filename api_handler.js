import axios from 'axios';

// login api handler
export const login_handler = async ({email, password}) => {
    try {
        const res = await axios.post(`https://api.escuelajs.co/api/v1/auth/login`, {email, password});
        console.log("Login api data>>", res.data);
        // Check if res is successful
        if (res.status === 201) {
            console.log("data is submitted>>", res.data);
            return res.data;
        }
    } catch(error) {
        if (error.response && error.response.status === 401) {
            console.log(error.response.data.message);
        }
    }
}