import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Planing from "../Planing/Planing";
import Records from "../Records/Records";
import HistoryContainer from "../../components/HistoryContainer/HistoryContainer";

class Content extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/bill">
                        <h1>Bill</h1>
                        {/*<BillContainer/>*/}
                    </Route>
                    <Route path="/history">
                        <HistoryContainer />
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