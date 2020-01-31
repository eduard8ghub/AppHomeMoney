import React from 'react';
import {Field, reduxForm} from "redux-form";
import {RenderInput} from "../Common/FormControls/renderField";
import {required} from "../Common/FormControls/validators";

let FormAddCategories = (props) => {
    const addCategories = (values) => {
        console.log(values);
        // onAddCategories(values.name, values.capacity);
    };


    return (
        <div className="card">
            <div className="card-header bordered">
                <div className="header-block">
                    <h3 className="title">Добавить категорию</h3>
                </div>
            </div>

            <div className="card-block">
                <form onSubmit={props.handleSubmit((values) => {addCategories(values)})}>
                    <label className="control-label" htmlFor="email">Введите название</label>
                    <Field
                        name="name"
                        type="text"
                        component={RenderInput}
                        validate={[required]}
                        placeholder="Название"
                    />
                    <label className="control-label" htmlFor="category-value">Введите лимит</label>
                    <Field
                        name="capacity"
                        type="number"
                        component={RenderInput}
                        validate={[required]}
                        placeholder="0"
                    />
                    <button type="submit" className="btn btn-primary">Добавить</button>
                </form>
            </div>
        </div>
    );
};

export default reduxForm({
    form: "addCategories",
    // asyncValidate,
    asyncBlurFields: ['capacity'],
})(FormAddCategories);


// export default AddCategories;