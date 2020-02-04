import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {format} from 'date-fns'
import {required} from "../../Common/FormControls/validators";
import {RenderInput, RenderRadioButton, RenderSelect} from "../../Common/FormControls/renderField";
import "./FormAddEvents.scss";


let currentDate = format(new Date(), 'MM.dd.yyyy  kk.mm.ss');



let FormAddEvents = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(props.allCategories[0]);
    const selectCategory = (e) => {
        const activeCategory = props.allCategories.filter(category => category.name === e.target.value);
        setSelectedCategory(...activeCategory);
    };


    const onSendFormEvents = (values) => {
        let newEvent = {
            amount: +values.amount,
            category: selectedCategory.id,
            date: currentDate,
            description: values.description,
            type: values.type
        };
        let updatedCapacityCategory;
        if (values.type === "income") {
            updatedCapacityCategory = selectedCategory.capacity + (+values.amount);
        } else {
            updatedCapacityCategory = selectedCategory.capacity - (+values.amount);
        }
        props.onAddNewEvent(newEvent, updatedCapacityCategory);
        props.resetForm()
    };

    return (
        <div className="card">
            <div className="card-header bordered">
                <div className="header-block">
                    <h3 className="title">Добавить событие</h3>
                </div>
            </div>

            <div className="card-block">
                <form onSubmit={props.handleSubmit(values => {
                    onSendFormEvents(values)
                })}>
                    <label className="control-label" htmlFor="category">Выберите категорию</label>
                    <Field name="category" component={RenderSelect} onChange={selectCategory}>
                        {
                            props.allCategories.map((itemCategories, index) => (
                                <option key={index} value={itemCategories.name}>{itemCategories.name}</option>
                            ))
                        }
                    </Field>
                    <label className="control-label" htmlFor="category">Выберите тип</label>
                    <Field validate={[required]} required={true} type="radio" name="type" component={RenderRadioButton}
                           options={[
                               {title: "Доход", value: 'income'},
                               {title: "Расход", value: 'outcome'}
                           ]}/>
                    <label className="control-label" htmlFor="amount">Введите сумму</label>
                    <Field
                        name="amount"
                        type="number"
                        placeholder="Введите сумму"
                        max={selectedCategory.capacity}
                        component={RenderInput}
                        validate={[required]}
                    />
                    <label className="control-label" htmlFor="amount">Введите описание</label>
                    <Field
                        name="description"
                        type="text"
                        placeholder="Введите описание"
                        component={RenderInput}
                        validate={[required]}
                    />
                    <button type="submit" className="btn btn-primary">Добавить</button>
                </form>
            </div>

        </div>
    );
};

export default FormAddEvents = reduxForm({form: "addEvent"})(FormAddEvents);

