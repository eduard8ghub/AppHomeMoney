import {eventsAPI} from "../../api/api";


export const onAddNewEvent = (newEvent, updatedCapacityCategory) => (dispatch) => {
    eventsAPI.addNewEvent(newEvent, updatedCapacityCategory)
        .then();
};


