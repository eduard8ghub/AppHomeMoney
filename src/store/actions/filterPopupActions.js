export const SET_CHANGE_VISIBLE_POPUP_FILTER = "SET_CHANGE_VISIBLE_POPUP_FILTER";

const setChangeVisiblePopup = (payload) => ({type: SET_CHANGE_VISIBLE_POPUP_FILTER, payload});



export const onChangeVisiblePopup = (status) => (dispatch) => {
    dispatch(setChangeVisiblePopup(status))
};