import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {searchInput} from "../../Common/SerchHistoryInput/SerchHistoryInput";
import {onSetFoundEvent} from "../../../store/actions/eventsActions";

const HistoryHeader = (props) => {
    const [namesMap] = useState([
        {type:"amount", name: 'Suma'},
        {type:"date", name: 'Data'},
        {type:"category", name: 'Categorii'},
        {type: "type", name: 'Tip'}
    ]);

    const [activeSelectType, setActiveSelectType] = useState(namesMap[2].name);
    const changeTypeFilter = (e) => {
        setActiveSelectType(e.target.value);
    };

    const [activeTypeSearch, setActiveTypeSearch] = useState(namesMap[2].name);
    useEffect(() => {
        setActiveTypeSearch(namesMap.filter(c => c.name === activeSelectType)[0].type);
    }, [activeSelectType, namesMap]);


    const searchEvent = (e) => {
        props.onSetFoundEvent(searchInput(props.events, e.target.value, activeTypeSearch));
    };

    return (
        <div className="card-header bordered">
            <div className="header-block">
                <h3 className="title">Lista evenimentelor</h3>
            </div>
            <div className="form-inline pull-right m-r-2">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder={activeSelectType}
                           onChange={(e) => searchEvent(e)}/>
                </div>
                <div className="btn-group">
                    <select className="form-control" value={activeSelectType} onChange={(e) => {changeTypeFilter(e)}}>
                        {
                            namesMap.map((category, idx) => (
                                <option key={idx}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default HistoryHeader;