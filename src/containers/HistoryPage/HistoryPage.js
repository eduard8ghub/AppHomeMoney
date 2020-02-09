import React, {Component} from 'react';
import DoughnutChart from "../../assets/Charts/DoughnutChart";
import HistoryItem from "../../components/History/HistoryItem/HistoryItem";
import {connect} from "react-redux";
import HistoryHeader from "../../components/History/HistoryHeader/HistoryHeader";
import {onSetFoundEvent} from "../../store/actions/eventsActions";
import HistoryPopupFilter from "../../components/History/HistoryPopupFilter/HistoryPopupFilter";
import {onChangeVisiblePopup} from "../../store/actions/filterPopupActions";


class HistoryPage extends Component {

    render() {
        const props = this.props;

        return (
            <>
                <div className="title-block">
                    <h3 className="title">
                        Istorie <span className="sparkline bar"> </span>
                    </h3>
                    <div className="pull-right">
                        <button className="btn-sm btn btn-primary-outline" onClick={() => {
                            props.onChangeVisiblePopup(true)
                        }}>
                            <i className="fa fa-filter"/>
                        </button>
                    </div>
                </div>
                <section className="section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-block">
                                    <section className="example">
                                        <div id="morris-donut-chart">

                                            <DoughnutChart/>

                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">

                                <HistoryHeader onSetFoundEvent={props.onSetFoundEvent} events={props.events}/>

                                <div className="card-block">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Suma</th>
                                            <th>Data</th>
                                            <th>Categorii</th>
                                            <th>Tip</th>
                                            <th className="text-lg-center">Detalii</th>
                                        </tr>
                                        </thead>

                                        {
                                            props.events &&
                                            (props.foundEvents ?
                                                <HistoryItem events={props.foundEvents}/> :
                                                <HistoryItem events={props.events}/>)
                                        }

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    props.visiblePopup &&
                    <HistoryPopupFilter
                        onChangeVisiblePopup={props.onChangeVisiblePopup}
                        selectPeriod={props.selectPeriod}
                        eventsType={props.eventsType}
                        allCategories={props.allCategories}
                        events={props.events}
                    />
                }
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events.events,
        foundEvents: state.events.foundEvents,
        visiblePopup: state.filterPopup.visiblePopup,
        selectPeriod: state.filterPopup.selectPeriod,
        eventsType: state.filterPopup.eventsType,
        allCategories: state.categories.allCategories
    }
};

export default connect(mapStateToProps, {onSetFoundEvent, onChangeVisiblePopup})(HistoryPage);