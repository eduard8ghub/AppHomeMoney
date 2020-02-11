import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Planing from "../PlaningPage/PlaningPage";
import Records from "../RecordsPage/RecordsPage";
import HistoryPage from "../HistoryPage/HistoryPage";
import EventDetail from "../../components/History/EventDetail/EventDetail";
import {connect} from "react-redux";
import BillPage from "../BillPage/BillPage";

class Content extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/bill">
                        <BillPage myBill={this.props.myBill} allCurrency={this.props.allCurrency}/>
                    </Route>
                    <Route path="/history" exact>
                        <HistoryPage />
                    </Route>
                    <Route path="/history/:id">
                        <EventDetail events={this.props.events} allCategories={this.props.allCategories}/>
                    </Route>
                    <Route path="/records">
                        <Records/>
                    </Route>
                    <Route path="/planing">
                       <Planing/>
                    </Route>
                </Switch>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events.events,
        allCategories: state.categories.allCategories,
        myBill: state.currency.myBill,
        allCurrency: state.currency.allCurrency
    }
};

export default connect(mapStateToProps, null)(Content);