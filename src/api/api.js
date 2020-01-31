import axios from "axios";

export const authAPI = {
    signUp(value) {
        const authData = {
            email: value.email,
            password: value.password,
            returnSecureToken: true
        };
        return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBG1qYgl8cFGmqUubIZVy2kRtaC1o_lWNU", authData)
            .then(response => response.data)
    },

    login(value) {
        const authData = {
            email: value.email,
            password: value.password,
            returnSecureToken: true
        };
        return axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBG1qYgl8cFGmqUubIZVy2kRtaC1o_lWNU", authData)
    },
};