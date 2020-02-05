import {SET_CURRENCY} from "../actions/currencyActions";
import {SET_UPDATE_CURRENCY_VALUE} from "../actions/eventsActions";


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
        case SET_UPDATE_CURRENCY_VALUE:
            return {
                ...state,
                currencyValue: action.payload
            };
        default:
            return state;
    }
};