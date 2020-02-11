import {authAPI} from "../../api/api";

export const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
export const SET_AUTH_LOGOUT = "SET_AUTH_LOGOUT";
export const SET_SHOW_ERROR_LOGIN = "SET_SHOW_ERROR_LOGIN";
export const SET_SHOW_ERROR_SING_UP = "SET_SHOW_ERROR_SING_UP";
export const SET_CORRECT_SING_UP = "SET_CORRECT_SING_UP";

const setAuthSuccess = (email, token) => ({type: SET_AUTH_SUCCESS, email, token});
const setAuthLogout = () => ({type: SET_AUTH_LOGOUT});

const setShowErrorLogin = (payload) => ({type: SET_SHOW_ERROR_LOGIN, payload});
const setShowErrorSingUp = (payload) => ({type: SET_SHOW_ERROR_SING_UP, payload});
const setCorrectSingUp = (payload) => ({type: SET_CORRECT_SING_UP, payload});


export const onSignUp = (value) => (dispatch) => {
    authAPI.signUp(value)
        .then(res => {
            dispatch(setCorrectSingUp(true));
        })
        .catch(error => {
            dispatch(setShowErrorSingUp(true));
            setTimeout(() => {
                dispatch(setShowErrorSingUp(false));
            }, 3000);
        })
};

export const onLogin = (value) => (dispatch) => {
    authAPI.login(value)
        .then(({data}) => {
            if (!data.error) {
                const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
                localStorage.setItem('token', data.idToken);
                localStorage.setItem('userId', data.localId);
                localStorage.setItem('userEmail', data.email);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(setAuthSuccess(data.email, data.idToken))
            }
        })
        .catch(error => {
            dispatch(setShowErrorLogin(true));
            setTimeout(() => {
                dispatch(setShowErrorLogin(false));
            }, 3000);
        })
};


export const autoLogin = () => (dispatch) => {
    const token = localStorage.token;
    if (!token) {
        dispatch(setAuthLogout());
    } else {
        const expirationDate = new Date(localStorage.expirationDate);
        if (expirationDate <= new Date()) {
            dispatch(setAuthLogout())
        } else {
            dispatch(setAuthSuccess(localStorage.userEmail, localStorage.token));
            dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
        }
    }
};

export const onLogout = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('expirationDate');
    dispatch(setAuthLogout())
};

export const autoLogout = (time) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(setAuthLogout())
        }, time * 1000)
    }
};

