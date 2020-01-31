import React from 'react';
import {NavLink} from "react-router-dom";

const SuccessSignUp = () => {
    return (
        <div className="auth">
            <div className="auth-container">
                <div className="card">
                    <div className="auth-content">
                        <p className="text-xs-center">Регистрация прошла успешно</p>
                        <NavLink to="/"><button className="btn btn-block btn-primary">Войти</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessSignUp;