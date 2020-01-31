import {authAPI} from "../../api/api";
import {SubmissionError} from "redux-form";

export const SET_AUTH_SUCCESS = "SET_AUTH_SUCCESS";
export const SET_AUTH_LOGOUT = "SET_AUTH_LOGOUT";

const setAuthSuccess = (email, token) => ({type: SET_AUTH_SUCCESS, email, token});
const setAuthLogout = () => ({type: SET_AUTH_LOGOUT});


export const onSignUp = (value) => (dispatch) => {
    authAPI.signUp(value)
        .then()
};

// export const onLogin = (value) => (dispatch) => {
//     authAPI.login(value)
//         .then(data => {
//             console.log(data);
//             if(!data.error){
//                 const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
//                 localStorage.setItem('token', data.idToken);
//                 localStorage.setItem('userId', data.localId);
//                 localStorage.setItem('userEmail', data.email);
//                 localStorage.setItem('expirationDate', expirationDate);
//                 dispatch(setAuthSuccess(data.email, data.idToken))
//             }else {
//                 console.log('err');
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         })
// };

export const onLogin = (value) => (dispatch) => {
    authAPI.login(value)
        .then(({data}) => {
            if(!data.error){
                const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
                localStorage.setItem('token', data.idToken);
                localStorage.setItem('userId', data.localId);
                localStorage.setItem('userEmail', data.email);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(setAuthSuccess(data.email, data.idToken))
            }else {
                console.log('err');
            }
        })
        .catch(error => {
            new SubmissionError("errors2")
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