import {SET_CURRENCY} from "../actions/currencyActions";


const initialState = {
    currency: null
};

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY :
            return {
                ...state
            };
        default:
            return state;
    }
};