import React from 'react';
import Layout from "./hoc/Layout/Layout";
import {connect} from "react-redux";
import Auth from "./containers/Auth/Auth";
import {autoLogin} from "./store/actions/authActions";
import Sidebar from "./containers/Sidebar/Sidebar";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import {onGetCurrency} from "./store/actions/currencyActions";
import {onAddAllCategories} from "./store/actions/categoriesActions";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.userEmail
    }
};


class App extends React.Component {
    componentDidMount() {
        this.props.autoLogin();
        this.props.onGetCurrency();
        this.props.onAddAllCategories();
    }
    render() {
        return (
            <>
                {
                    this.props.isAuth ?
                        <Layout header={<Header/>} nav={<Sidebar/>} content={<Content/>}/> :
                        <Layout auth={<Auth/>}/>
                }
            </>
        )

    }
}

export default connect(mapStateToProps, {autoLogin, onGetCurrency, onAddAllCategories})(App);
