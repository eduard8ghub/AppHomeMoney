import {categoriesAPI} from "../../api/api";
import { reset } from 'redux-form';


export const SET_ADD_NEW_CATEGORY = "SET_ADD_NEW_CATEGORY";
export const SET_ALL_CATEGORIES = "SET_ALL_CATEGORIES";
export const SET_UPDATE_CATEGORY = "SET_UPDATE_CATEGORY";
export const SET_DELETE_CATEGORY = "SET_DELETE_CATEGORY";

const setAllCategories = (payload) => ({type: SET_ALL_CATEGORIES, payload});
const setNewCategories = (payload) => ({type: SET_ADD_NEW_CATEGORY, payload});
const setUpdateCategory = (payload) => ({type: SET_UPDATE_CATEGORY, payload});
const setDeletedCategory = (payload) => ({type: SET_DELETE_CATEGORY, payload});


export const onAddAllCategories = () => (dispatch) => {
    categoriesAPI.getCategories()
        .then(res => {
            let categories = res.map(item => {
                let category = item.data();
                category = {...category, id: item.id};
                return category;
            });
            dispatch(setAllCategories(categories))
        })
};

export const onAddNewCategory = (capacity, name) => (dispatch) => {
    categoriesAPI.addNewCategory(capacity, name)
        .then(res => {
            dispatch(setNewCategories(res));
            dispatch(reset('addCategories'))
        })

};

export const onUpdateCategory = (editCategory) => (dispatch) => {
    categoriesAPI.updateCategory(editCategory)
        .then(data => {
            const updatedCategory = {
                capacity: data[0].capacity,
                name: data[0].name,
                id: editCategory.id
            };
            dispatch(setUpdateCategory(updatedCategory))
        })

};

export const onDeleteCategory = (idCategory) => (dispatch) => {
    categoriesAPI.deleteCategory(idCategory)
        .then(() => {
            console.log(idCategory);
            dispatch(setDeletedCategory(idCategory))
        })

};