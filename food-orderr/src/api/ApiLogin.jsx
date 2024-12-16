import axios from 'axios';
const API_URL = "http://localhost:4000/api/user"; // URL cơ bản cho các yêu cầu

const ApiLogin = {
    login: async (data) => {
        try {
            const response = await axios.post(`${API_URL}/login`, data);
            return response.data;
        } catch (error) {
            console.error("Login API Error: ", error);
            return { success: false, message: "Login failed. Please try again." };
        }
    },
    register: async (url, data) => {
        try {
            const response = await axios.post(`${API_URL}/register`, data);
            return response.data;
        } catch (error) {
            console.error("Register API Error: ", error);
            return { success: false, message: "Registration failed. Please try again." };
        }
    },
};

export default ApiLogin;
