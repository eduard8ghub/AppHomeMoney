import {currencyAPI, eventsAPI} from "../../api/api";

export const SET_ALL_EVENTS = "SET_ALL_EVENTS";
export const SET_ADD_NEW_EVENT = "SET_ADD_NEW_EVENT";
export const SET_UPDATE_CURRENCY_VALUE = "SET_UPDATE_CURRENCY_VALUE";

const setAllEvents = (payload) => ({type: SET_ALL_EVENTS, payload});
const setAddNewEvent = (payload) => ({type: SET_ADD_NEW_EVENT, payload});
const setUpdateCurrencyValue = (payload) => ({type: SET_UPDATE_CURRENCY_VALUE, payload});

export const onGetAllEvents = () => (dispatch) => {
    eventsAPI.getEvents()
        .then(data => {
            dispatch(setAllEvents(data))
        })
};

export const onAddNewEvent = (newEvent) => (dispatch) => {
    eventsAPI.addNewEvent(newEvent)
        .then(res => {
            dispatch(setAddNewEvent(res));
            currencyAPI.getCurrency()
                .then(data => {
                    dispatch(setUpdateCurrencyValue(data[0].value))
                })
        });
};


