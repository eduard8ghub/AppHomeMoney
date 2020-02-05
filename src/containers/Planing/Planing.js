import React, {Component} from 'react';
import PlaningProgressBar from "../../components/PlaningProgressBar/PlaningProgressBar";
import {connect} from "react-redux";
import {onGetAllEvents} from "../../store/actions/eventsActions";

const mapStateToProps = (state) => {
    return {
        currencyValue: state.currency.currencyValue,
        categories: state.categories.allCategories,
        events: state.events.events
    }
};


class Planing extends Component {
    componentDidMount() {
        this.props.onGetAllEvents();
    }



    render() {
        const props = this.props;

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        function getCategoryCost(categories) {
            if (props.categories && props.events) {
                const catEvents = props.events.filter(e => e.category === categories.id && e.type === "outcome");
                return catEvents.reduce((total, e) => {
                    total += e.amount;
                    return total;
                }, 0)
            }
        }

        return (
            <>
                <div className="title-block">
                    <h3 className="title">
                        Страница планирования <span className="sparkline bar"/>
                    </h3>
                </div>
                <section className="section planing-section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-sm bordered">
                                    <div className="header-block">
                                        <h3 className="title">Расходы</h3>
                                    </div>
                                    <h5 className="planning-expenses pull-right">
                                        Общий остаток: <span className="text-success">{
                                        props.currencyValue && numberWithCommas(props.currencyValue)
                                        } MDL</span>
                                    </h5>
                                </div>
                                <div className="card-block">
                                    {
                                        props.categories &&
                                            props.categories.map((category, index) => (

                                                <PlaningProgressBar
                                                    key={index}
                                                    category={category}
                                                    events={getCategoryCost(category)}
                                                />
                                            ))
                                    }



                                    {/*<div className="row">*/}
                                    {/*    <div className="col-xs-6">*/}
                                    {/*        <div className="n-progress">*/}
                                    {/*            <div className="progress-bar success" style={{width: "30%"}}>*/}
                                    {/*                <span>Название категории</span>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-xs-6">*/}
                                    {/*        <p>*/}
                                    {/*            <span className="text-success">300.00</span>*/}
                                    {/*            из*/}
                                    {/*            <span className="text-primary">1000.00</span>*/}
                                    {/*            |*/}
                                    {/*            осталось <span className="text-success">700.00</span> (руб.)*/}
                                    {/*        </p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="row">*/}
                                    {/*    <div className="col-xs-6">*/}
                                    {/*        <div className="n-progress">*/}
                                    {/*            <div className="progress-bar warning" style={{width: "60%"}}>*/}
                                    {/*                <span>Название категории</span>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-xs-6">*/}
                                    {/*        <p>*/}
                                    {/*            <span className="text-warning">600.00</span>*/}
                                    {/*            из*/}
                                    {/*            <span className="text-primary">1000.00</span>*/}
                                    {/*            |*/}
                                    {/*            осталось <span className="text-success">400.00</span> (руб.)*/}
                                    {/*        </p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="row">*/}
                                    {/*    <div className="col-xs-6">*/}
                                    {/*        <div className="n-progress">*/}
                                    {/*            <div className="progress-bar danger" style={{width: "100%"}}>*/}
                                    {/*                <span>Название категории</span>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-xs-6">*/}
                                    {/*        <p>*/}
                                    {/*            <span className="text-danger">1200.00</span>*/}
                                    {/*            из*/}
                                    {/*            <span className="text-primary">1000.00</span>*/}
                                    {/*            |*/}
                                    {/*            осталось <span className="text-danger">-200.00</span> (руб.)*/}
                                    {/*        </p>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default connect(mapStateToProps, {onGetAllEvents})(Planing);