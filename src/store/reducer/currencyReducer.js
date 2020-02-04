import {SET_CURRENCY} from "../actions/currencyActions";


const initialState = {
    currency: null,
    currencyValue: null
};

export const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCY :
            return {
                ...state,
                currency: action.payload.currency,
                currencyValue: action.payload.value
            };
        default:
            return state;
    }
};