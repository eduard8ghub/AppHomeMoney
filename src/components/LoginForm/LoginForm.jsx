import React from 'react';
import {Field, reduxForm} from "redux-form";
import {NavLink} from "react-router-dom";
import {RenderInput} from "../Common/FormControls/renderField";
import {email, required} from "../Common/FormControls/validators";

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="email">Email</label>
            <Field
                name="email"
                type="text"
                component={RenderInput}
                validate={[required, email]}
                placeholder="Email"
            />
            <label htmlFor="password">Пароль</label>
            <Field
                name="password"
                type="password"
                component={RenderInput}
                validate={[required]}
                placeholder="Пароль"
            />
            {/*{props.trueLogin && <p className="wrong_login">Неверный email или пароль</p>}*/}
            <div className="form-group">
                <button type="submit" className="btn btn-block btn-primary">Войти</button>
            </div>
            <div className="form-group">
                <p className="text-muted text-xs-center">
                    Нет аккаунта?
                    <NavLink to="/signup">Зарегистрироваться!</NavLink>
                </p>
            </div>
        </form>
    )
};

LoginForm = reduxForm({
    form: "login"
})(LoginForm);

export default LoginForm;