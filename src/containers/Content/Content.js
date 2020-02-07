import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Planing from "../PlaningPage/PlaningPage";
import Records from "../RecordsPage/RecordsPage";
import HistoryPage from "../HistoryPage/HistoryPage";

class Content extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/bill">
                        <h1>Bill</h1>
                        {/*<BillContainer/>*/}
                    </Route>
                    <Route path="/history">
                        <HistoryPage />
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

export default Content;