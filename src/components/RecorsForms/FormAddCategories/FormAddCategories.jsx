import React from 'react';
import {Field, reduxForm} from "redux-form";
import {RenderInput} from "../../Common/FormControls/renderField";
import {required} from "../../Common/FormControls/validators";
import asyncValidate from "../../Common/FormControls/asyncValidate";




let FormAddCategories = (props) => {

    const addCategories = (values) => {
        props.onAddNewCategory(+values.capacity, values.name);
    };


    return (
        <div className="card">
            <div className="card-header bordered">
                <div className="header-block">
                    <h3 className="title">Adauga categorie</h3>
                </div>
            </div>

            <div className="card-block">
                <form onSubmit={props.handleSubmit((values) => {addCategories(values)})}>
                    <label className="control-label" htmlFor="email">Introduceti denumire</label>
                    <Field
                        name="name"
                        type="text"
                        component={RenderInput}
                        validate={[required]}
                        placeholder="Denumire"
                    />
                    <label className="control-label" htmlFor="category-value">Introduceti limita</label>
                    <Field
                        name="capacity"
                        type="number"
                        component={RenderInput}
                        validate={[required]}
                        placeholder="0"
                    />
                    <button type="submit" className="btn btn-primary">Adauga</button>
                </form>
            </div>
        </div>
    );
};

export default reduxForm({
    form: "addCategories",
    asyncValidate,
    asyncBlurFields: ['capacity'],
})(FormAddCategories);


// export default AddCategories;