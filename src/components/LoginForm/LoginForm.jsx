import React from 'react';
import {Field, reduxForm} from "redux-form";
import {RenderInput} from "../Common/FormControls/renderField";
import {email, required} from "../Common/FormControls/validators";
import {NavLink} from "react-router-dom";

const Login = ({onLogin, trueLogin}) => {
    let login = ({email, password}) => {
        onLogin(email, password)
    };
    return (
        <div className="auth">
            <div className="auth-container">
                <div className="card">
                    <header className="auth-header">
                        <h1 className="auth-title">
                            <div className="logo">
                                <span className="l l1"> </span>
                                <span className="l l2"> </span>
                                <span className="l l3"> </span>
                                <span className="l l4"> </span>
                                <span className="l l5"> </span>
                            </div>
                            Домашняя бухгалтерия
                        </h1>
                    </header>
                    <div className="auth-content">
                        <p className="text-xs-center">Войдите для работы</p>
                        <LoginForm onSubmit={login} trueLogin={trueLogin}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
            {props.trueLogin && <p className="wrong_login">Неверный email или пароль</p>}
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

LoginForm = reduxForm({form: "login"})(LoginForm);

export default Login;