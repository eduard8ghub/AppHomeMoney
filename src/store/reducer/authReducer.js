import {SET_AUTH_LOGOUT, SET_AUTH_SUCCESS} from "../actions/authActions";


const initialState = {
    token: null,
    userEmail: null
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                userEmail: action.email
            };
        case SET_AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                userEmail: null
            };
        default:
            return state;
    }
};