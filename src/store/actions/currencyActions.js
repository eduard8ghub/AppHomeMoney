// import {currencyAPI} from "../../api/api";
// export const SET_CURRENCY = "SET_CURRENCY";
//
// const setCurrency = (payload) => ({type: SET_CURRENCY, payload});
//
// export const onGetCurrency = () => (dispatch) => {
//     currencyAPI.getCurrency()
//         .then(itemDoc => {
//             dispatch(setCurrency(itemDoc[0]))
//         })
// };


import {currencyAPI} from "../../api/api";

export const SET_CURRENCY = "SET_CURRENCY";
export const SET_MY_BILL = "SET_MY_BILL";

const setCurrency = (payload) => ({type: SET_CURRENCY, payload});
const setBill = (payload) => ({type: SET_MY_BILL, payload});


export const onGetBill = () => (dispatch) => {
    currencyAPI.getBill()
        .then(itemDoc => {
            dispatch(setBill(itemDoc[0].value))
        })
};

export const onGetCurrency = () => (dispatch) => {
    currencyAPI.getCurrency()
        .then(data => {
            let currency = data[0].currency;
            let rate = data[0].rate;
            let getValute = (text) => {
                let limit = text.length / 3;
                let idx = [];
                for (let i = 1; i <= limit; i++) {
                    let t = 3 * i;
                    idx.push(t);
                }
                let res = [];
                for (let i = 0; i < idx.length; i++) {
                    res.push(text.substring(idx[i] - 3, idx[i]))
                }
                return res
            };

            let currencyValute = getValute(currency);

            let arrRate = rate.split(' Lei');
            let newArrRate = arrRate.map(item => {
                if (item) {
                    let newItem = Number(item.replace(',', '.'));
                    return +newItem.toFixed(2);
                }
                return undefined;
            }).filter(notUndefinde => notUndefinde !== undefined);

            let allCurrency = [];
            for (let i = 0; i < currencyValute.length; i++){
                allCurrency.push({
                    currencyValute: currencyValute[i],
                    newArrRate: newArrRate[i]
                });
            }
            dispatch(setCurrency(allCurrency));
        })
};