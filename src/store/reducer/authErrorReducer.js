import {SET_CORRECT_SING_UP, SET_SHOW_ERROR_LOGIN, SET_SHOW_ERROR_SING_UP} from "../actions/authActions";

const initialState = {
    showErrorLogin: false,
    showErrorSingUp: false,
    correctSingUp: false,
    errorMessageLogin: "Parola sau email gresit!!!",
    errorMessageSingUp: "Asa email exista!!!"
};

export const authErrorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOW_ERROR_LOGIN:
            return {
                ...state,
                showErrorLogin: action.payload,
            };
        case SET_SHOW_ERROR_SING_UP:
            return {
                ...state,
                showErrorSingUp: action.payload,
            };
        case SET_CORRECT_SING_UP:
            return {
                ...state,
                correctSingUp: action.payload,
            };
        default:
            return state;
    }
};