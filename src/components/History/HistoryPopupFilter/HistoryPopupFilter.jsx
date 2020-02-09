import React from 'react';
import "./HistoryPopupFilter.scss";
import FormPopup from "./FormPopup";


const HistoryPopupFilter = (props) => {
    return (
        <div className="modal fade in" onClick={(e)=>{e.target.className === "modal fade in" && props.onChangeVisiblePopup(false)}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={()=>{props.onChangeVisiblePopup(false)}}>
                            <span>×</span>
                        </button>
                        <h4 className="modal-title">Filtre</h4>
                    </div>

                    <FormPopup
                        onChangeVisiblePopup={props.onChangeVisiblePopup}
                        period={props.selectPeriod}
                        eventsType={props.eventsType}
                        allCategories={props.allCategories}
                        events={props.events}
                    />

                </div>
            </div>
        </div>
    );
};

export default HistoryPopupFilter;