import React, {useState} from 'react';
import {Field, reduxForm} from "redux-form";
import {format} from 'date-fns'
import {capacity, required} from "../../Common/FormControls/validators";
import {RenderInput, RenderRadioButton, RenderSelect} from "../../Common/FormControls/renderField";

let currentDate = format(new Date(), 'MM.dd.yyyy  kk.mm.ss');

let FormAddEvents = ({handleSubmit}) => {
    // const [categoriesSelect, setCategoriesSelect] = useState(categories[0]);
    // const maxCapacity = capacity(categoriesSelect.capacity);

    // let changeCategory = (e) => {
    //     categories.filter(nameCategory => {
    //         if (nameCategory.name === e.target.value) {
    //             setCategoriesSelect(nameCategory);
    //         }
    //         return true;
    //     });
    //
    // };

    // const submit = (data) => {
    //     if (categoriesSelect.name !== "-") {
    //         let newEvent = {
    //             type: data.type,
    //             amount: +data.amount,
    //             category: categoriesSelect.id,
    //             date: currentDate,
    //             description: data.description
    //         };
    //         onAddNewEvent(newEvent);
    //     }
    // };

    return (
        <div className="card">
            <div className="card-header bordered">
                <div className="header-block">
                    <h3 className="title">Добавить событие</h3>
                </div>
            </div>

            <div className="card-block">
                <form>
                    <label className="control-label" htmlFor="category">Выберите категорию</label>
                    {/*<Field name="category" component={RenderSelect} >*/}
                    {/*    /!*{*!/*/}
                    {/*    /!*    categories.map((itemCategories, index) => (*!/*/}
                    {/*    /!*        <option key={index} value={itemCategories.name}>{itemCategories.name}</option>*!/*/}
                    {/*    /!*    ))*!/*/}
                    {/*    /!*}*!/*/}
                    {/*</Field>*/}
                    <label className="control-label" htmlFor="amount">Введите сумму</label>
                    <Field
                        name="amount"
                        type="number"
                        placeholder="Введите сумму"
                        component={RenderInput}
                        validate={[required]}
                    />
                    <label className="control-label" htmlFor="category">Выберите тип</label>
                    <Field validate={[required]} required={true} type="radio" name="type" component={RenderRadioButton}
                           options={[
                               {title: "Доход", value: 'income'},
                               {title: "Расход", value: 'outcome'}
                           ]}/>
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


// let CardBlockForm = ({handleSubmit, categories, onAddNewEvent}) => {
//     const [categoriesSelect, setCategoriesSelect] = useState(categories[0]);
//
//     let changeCategory = (e) => {
//         categories.filter(nameCategory => {
//             if (nameCategory.name === e.target.value) {
//                 setCategoriesSelect(nameCategory);
//             }
//             return true;
//         });
//
//     };
//     const submit = (data) => {
//         if (categoriesSelect.name !== "-") {
//             let newEvent = {
//                 type: data.type,
//                 amount: +data.amount,
//                 category: categoriesSelect.id,
//                 date: currentDate,
//                 description: data.description
//             };
//             onAddNewEvent(newEvent);
//         }
//     };
//
//     const maxCapacity = capacity(categoriesSelect.capacity);
//     return (
//         <form onSubmit={handleSubmit(submit)}>
//             <label className="control-label" htmlFor="category">Выберите категорию</label>
//             <Field name="category" component={RenderSelect} onChange={changeCategory}>
//                 {
//                     categories.map((itemCategories, index) => (
//                         <option key={index} value={itemCategories.name}>{itemCategories.name}</option>
//                     ))
//                 }
//             </Field>
//             <label className="control-label" htmlFor="amount">Введите сумму</label>
//             <Field
//                 name="amount"
//                 type="number"
//                 placeholder="Введите сумму"
//                 component={RenderInput}
//                 validate={[required, maxCapacity]}
//             />
//             <label className="control-label" htmlFor="category">Выберите тип</label>
//             <Field validate={[required]} required={true} type="radio" name="type" component={RenderRadioButton} options={[
//                 {title: "Доход", value: 'income'},
//                 {title: "Расход", value: 'outcome'}
//             ]}/>
//             <label className="control-label" htmlFor="amount">Введите описание</label>
//             <Field
//                 name="description"
//                 type="text"
//                 placeholder="Введите описание"
//                 component={RenderInput}
//                 validate={[required]}
//             />
//             <button type="submit" className="btn btn-primary">Добавить</button>
//         </form>
//     );
// };

export default FormAddEvents = reduxForm({form: "addEvent"})(FormAddEvents);

