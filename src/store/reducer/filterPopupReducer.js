import {SET_CHANGE_VISIBLE_POPUP_FILTER} from "../actions/filterPopupActions";


const initialState = {
  visiblePopup: false
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