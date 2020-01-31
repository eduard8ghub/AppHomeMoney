import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SingUpForm/SingUpForm";
import {connect} from "react-redux";
import {onLogin, onSignUp} from "../../store/actions/authActions";
import SuccessSignUp from "../../components/SingUpForm/SingUpSuccess";
import {Route, Switch, withRouter} from "react-router-dom";

class Auth extends Component {

    onSignUp = (value) => {
        this.props.onSignUp(value);
        this.props.history.push("/success-signup");
    };

    onLogin = (value) => {
        this.props.onLogin(value);
    };

    render() {
        return (
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
                        <Switch>
                            <Route exact path="/">
                                <LoginForm onSubmit={this.onLogin}/>
                            </Route>
                            <Route path="/signup">
                                <SignUpForm onSubmit={this.onSignUp}/>
                            </Route>
                            <Route exact path="/success-signup">
                                <SuccessSignUp/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, {onSignUp, onLogin})(Auth));