import axios from "axios";

const API_URL = 'https://localhost:7151/api/';


//Register User

const register = async (userData)  =>{
    const response = await axios.post(API_URL+'Auth/Register',userData);

    return response.data;
}


const login = async (userData)  =>{
    const response = await axios.post(API_URL+'Auth/Login',userData);
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data));
    }

    return response.data;
}

const logout = () => {
     localStorage.removeItem('user');
} 

const authService = {
    register,
    logout,
    login
};
export default authService;