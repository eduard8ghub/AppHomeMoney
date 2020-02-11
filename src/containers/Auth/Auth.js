import React, {Component, useEffect} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SingUpForm/SingUpForm";
import {connect} from "react-redux";
import {onLogin, onSignUp} from "../../store/actions/authActions";
import SuccessSignUp from "../../components/SingUpForm/SingUpSuccess";
import {Route, Switch, withRouter} from "react-router-dom";
import ErrorAuth from "../../components/Common/ErrorAuth/ErrorAuth";

class Auth extends Component {

    onSignUp = (value) => {
        this.props.onSignUp(value);
        // this.props.history.push("/success-signup");
    };

    onLogin = (value) => {
        this.props.onLogin(value);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.correctSingUp !== this.props.correctSingUp) {
            if(this.props.correctSingUp) {
                this.props.history.push("/success-signup");
            }
        }
    }

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
                    <ErrorAuth showErrorLogin={this.props.showErrorLogin} showErrorSingUp={this.props.showErrorSingUp}/>
                    <div className="auth-content">
                        <p className="text-xs-center">Войдите для работы</p>
                        <Switch>
                            <Route exact path="/">
                                <LoginForm onSubmit={this.onLogin}/>
                            </Route>
                            <Route path="/signup">
                                <SignUpForm showErrorSingUp={this.props.showErrorSingUp} onSubmit={this.onSignUp}/>
                            </Route>
                            <Route exact path="/success-signup">
                                <SuccessSignUp/>
                            </Route>
                            <Route path="*">
                                <LoginForm onSubmit={this.onLogin}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showErrorLogin: state.authError.showErrorLogin,
        showErrorSingUp: state.authError.showErrorSingUp,
        correctSingUp: state.authError.correctSingUp
    }
};

export default withRouter(connect(mapStateToProps, {onSignUp, onLogin})(Auth));