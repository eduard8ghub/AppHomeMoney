import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {NewRenderCheckBox, RenderSelect} from "../../Common/FormControls/renderField";
import "./HistoryPopupFilter.scss";
import {searchHistoryPopup} from "../../Common/SearchHistoryPopup/SearchHistoryPopup";

let FormPopup = (props) => {
    const [selectedPeriod, setSelectedPeriod] = useState(props.period[0]);
    const [filterConfigType, setFilterConfigType] = useState([{income: null, outcome: null}]);
    const [filterConfigEvents, setFilterConfigEvents] = useState([]);


    const selectPeriod = (e) => {
        setSelectedPeriod(props.period.filter(p => p.date === e.target.value)[0]);
    };

    const onSetFilter = (value) => {
        const allChecksValue = Object.keys(value);
        let a = [];

        allChecksValue.map(value => {
            props.allCategories.filter(category => {
                if(category.name === value) {
                    a = [...a, category.name];
                }
            });

        });

        setFilterConfigEvents([...a]);
        setFilterConfigType(
            filterConfigType[0] = {
                income: value.Venituri,
                outcome: value.Cheltuieli
            }
        );


        searchHistoryPopup(props.events, selectedPeriod, filterConfigType, a);
    };

    return (
        <form className="modal-body" onSubmit={props.handleSubmit((value) => {
            onSetFilter(value)
        })}>
            <div className="form-group">
                <label className="control-label" htmlFor="period">Alege perioada</label>
                <Field id="period" name="period" component={RenderSelect} onChange={(e) => {
                    selectPeriod(e)
                }}>
                    {
                        props.period.map((itemPeriod, index) => (
                            <option key={index} value={itemPeriod.date}>{itemPeriod.date}</option>
                        ))
                    }
                </Field>
            </div>

            <div className="form-group checkbox-group">
                <label className="control-label label-box">Alege dupa categorie</label>
                {
                    props.eventsType.map((t, idx) => (
                        <Field key={idx} name={t.value} id={t.value} component={NewRenderCheckBox} type="checkbox"/>
                    ))
                }
            </div>

            <div className="form-group checkbox-group">
                <label className="control-label label-box">Alege dupa eveniment</label>
                {
                    props.allCategories && props.allCategories.map((c, idx) => (
                        <Field key={idx} name={c.name} id={c.name} component={NewRenderCheckBox} type="checkbox"/>
                    ))
                }
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => {
                    props.onChangeVisiblePopup(false)
                }}>Отмена
                </button>
                <button type="submit" className="btn btn-primary">Применить</button>
                <button>Reset</button>
            </div>
        </form>
    );
};

FormPopup = reduxForm({form: 'filterPopup'})(FormPopup);

export default FormPopup;