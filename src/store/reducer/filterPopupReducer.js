import {SET_CHANGE_VISIBLE_POPUP_FILTER} from "../actions/filterPopupActions";


const initialState = {
    visiblePopup: true,
    selectPeriod: [
        {periodSearch: 'd', date: "Ultimile 24 ore"},
        {periodSearch: 'w', date: "Ultimile 7 zile"},
        {periodSearch: 'm', date: "Ultimile 4 saptamini"}
    ],
    eventsType: [
        {name: 'income', value: 'Venituri'},
        {name: 'outcome', value: 'Cheltuieli'}
    ]
};

export const filterPopupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHANGE_VISIBLE_POPUP_FILTER:
            return {
                ...state,
                visiblePopup: action.payload
            };
        default:
            return state;
    }
};