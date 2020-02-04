import {currencyAPI} from "../../api/api";
export const SET_CURRENCY = "SET_CURRENCY";

const setCurrency = (payload) => ({type: SET_CURRENCY, payload});

export const onGetCurrency = () => (dispatch) => {
    currencyAPI.getCurrency()
        .then(itemDoc => {
            dispatch(setCurrency(itemDoc[0]))
        })
};