import {SET_CURRENCY, SET_MY_BILL} from "../actions/currencyActions";

const defaultState = {
    allCurrency: null,
    myBill: null
};

export const currencyReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENCY:
            return {
                ...state,
                allCurrency: action.payload
            };
        case SET_MY_BILL:
            return {
                ...state,
                myBill: action.payload
            };
        default:
            return state;
    }
};