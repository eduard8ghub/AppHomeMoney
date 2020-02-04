import {
    SET_ADD_NEW_CATEGORY,
    SET_ALL_CATEGORIES,
    SET_DELETE_CATEGORY,
    SET_UPDATE_CATEGORY
} from "../actions/categoriesActions";


const initialState = {
    allCategories: null
};


export const categoriesReducer = (state = initialState, action ) => {
  switch (action.type) {
      case SET_ALL_CATEGORIES:
          return {
              ...state,
              allCategories: [...action.payload]
          };
      case SET_ADD_NEW_CATEGORY:
          return {
              ...state,
              allCategories: [...state.allCategories, ...action.payload]
          };
      case SET_UPDATE_CATEGORY:
          return {
              ...state,
              allCategories: state.allCategories.map(category => {
                  if(category.id === action.payload.id) {
                      category = action.payload;
                  }
                  console.log(category);
                  return category
              })
          };
      case SET_DELETE_CATEGORY:
          return {
              ...state,
              allCategories: state.allCategories.filter(category => category.id !== action.payload)
          };
      default:
          return state;
  }
};