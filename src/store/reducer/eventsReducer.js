import {SET_ADD_NEW_EVENT, SET_ALL_EVENTS, SET_FOUND_EVENTS} from "../actions/eventsActions";

const initialState = {
    events: null,
    foundEvents: null
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        case SET_ADD_NEW_EVENT:
            return {
                ...state,
                events: [...state.events, ...action.payload]
            };
        case SET_FOUND_EVENTS: {
            return {
                ...state,
                foundEvents: action.payload
            }
        }
        default:
            return state;
    }
};

