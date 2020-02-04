import { combineReducers } from "redux"
import {reducer as formReducer} from "redux-form";
import {authReducer} from "./reducer/authReducer";
import {currencyReducer} from "./reducer/currencyReducer";
import {categoriesReducer} from "./reducer/categoriesReducer";

export default combineReducers({
    categories: categoriesReducer,
    currency: currencyReducer,
    auth: authReducer,
    form: formReducer
})