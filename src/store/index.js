import { combineReducers } from "redux"
import {reducer as formReducer} from "redux-form";
import {authReducer} from "./reducer/authReducer";
import {currencyReducer} from "./reducer/currencyReducer";
import {categoriesReducer} from "./reducer/categoriesReducer";
import {eventsReducer} from "./reducer/eventsReducer";
import {filterPopupReducer} from "./reducer/filterPopupReducer";

export default combineReducers({
    events: eventsReducer,
    categories: categoriesReducer,
    currency: currencyReducer,
    filterPopup: filterPopupReducer,
    auth: authReducer,
    form: formReducer
})