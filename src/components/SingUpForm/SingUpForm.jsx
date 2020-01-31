import React from "react";
import {Field, reduxForm} from "redux-form";
import {RenderCheckBox, RenderInput} from "../Common/FormControls/renderField";
import {email, required} from "../Common/FormControls/validators";
import {NavLink} from "react-router-dom";

let SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="email">Email</label>
            <Field
                name="email"
                type="text"
                component={RenderInput}
                validate={[required, email]}
                placeholder="Введите email"
            />
            <label htmlFor="name">Имя</label>
            <Field
                name="name"
                type="text"
                component={RenderInput}
                validate={[required]}
                placeholder="Введите имя"
            />
            <label htmlFor="password">Пароль</label>
            <Field
                name="password"
                type="password"
                component={RenderInput}
                validate={[required]}
                placeholder="Введите пароль"
            />
            <div>
                <div>
                    <Field name="agree" id="agree" component={RenderCheckBox} type="checkbox"/>
                </div>
            </div>
            <button type="submit" className="btn btn-block btn-primary">Зарегистрироваться</button>
            <div className="form-group">
                <p className="text-muted text-xs-center">
                    Нет аккаунта?
                    <NavLink to="/">Зарегистрироваться!</NavLink>
                </p>
            </div>
        </form>

    )
};

SignUpForm = reduxForm({
    form: "signup"
})(SignUpForm);


export default SignUpForm;