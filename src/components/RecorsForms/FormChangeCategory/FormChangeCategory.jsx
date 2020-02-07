import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {RenderInput, RenderSelect} from "../../Common/FormControls/renderField";
import {required} from "../../Common/FormControls/validators";
import "./FromChangeCategory.scss";

let FormChangeCategory = (props) => {
    const [selectedCategory, setSelectedCategory] = useState(props.allCategories[0]);
    const selectCategory = (e) => {
        const activeCategory = props.allCategories.filter(category => category.name === e.target.value);
        setSelectedCategory(...activeCategory);
    };

    const onSendChangeCategory = (values) => {
        const editCategory = {
            name: values.description,
            capacity: +values.capacity,
            id: selectedCategory.id
        };
        props.onUpdateCategory(editCategory);
    };

    const deleteCategory = (e) => {
        e.preventDefault();
        props.onDeleteCategory(selectedCategory.id);
    };

    return (
        <div className="card">
            <div className="card-header bordered">
                <div className="header-block">
                    <h3 className="title">Redactarea categoriei</h3>
                </div>
            </div>

            <div className="card-block">
                <form onSubmit={props.handleSubmit((values) => {onSendChangeCategory(values)})}>
                    <div className="form-group">
                        <label className="control-label" htmlFor="category">Alege categoria</label>
                        <Field name="category" component={RenderSelect} onChange={selectCategory}>
                            {
                                props.allCategories.map((itemCategories, index) => (
                                    <option key={index} value={itemCategories.name}>{itemCategories.name}</option>
                                ))
                            }
                        </Field>
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="amount">Introduceti denumirea</label>
                        <Field
                            name="description"
                            type="text"
                            placeholder={selectedCategory.name}
                            component={RenderInput}
                            validate={[required]}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="category-value">Introduceti limita</label>
                        <Field
                            name="capacity"
                            type="number"
                            component={RenderInput}
                            validate={[required]}
                            placeholder={selectedCategory.capacity}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Adauga</button>
                    <button onClick={deleteCategory} className="btn btn-danger delete__btn">Sterge categoria</button>
                </form>
            </div>
        </div>
    );
};

export default FormChangeCategory = reduxForm({
    form: "changeCategory",
})(FormChangeCategory);