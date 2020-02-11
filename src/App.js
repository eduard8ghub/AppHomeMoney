import React from 'react';
import Layout from "./hoc/Layout/Layout";
import {connect} from "react-redux";
import Auth from "./containers/Auth/Auth";
import {autoLogin} from "./store/actions/authActions";
import Sidebar from "./containers/Sidebar/Sidebar";
import Header from "./containers/Header/Header";
import Content from "./containers/Content/Content";
import {onGetBill, onGetCurrency} from "./store/actions/currencyActions";
import {onAddAllCategories} from "./store/actions/categoriesActions";
import {onGetAllEvents} from "./store/actions/eventsActions";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.userEmail
    }
};


class App extends React.Component {
    componentDidMount() {
        this.props.autoLogin();
        this.props.onGetBill();
        this.props.onAddAllCategories();
        this.props.onGetAllEvents();
        this.props.onGetCurrency();
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

export default connect(mapStateToProps, {autoLogin, onGetBill, onAddAllCategories, onGetAllEvents, onGetCurrency})(App);
