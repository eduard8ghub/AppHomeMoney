import React, {Component} from 'react';
import PlaningProgressBar from "../../components/PlaningProgressBar/PlaningProgressBar";
import {connect} from "react-redux";
import {onGetAllEvents} from "../../store/actions/eventsActions";
import {numberWithCommas} from "../../components/Common/NumberWithCommas/NumberWithCommas";

const mapStateToProps = (state) => {
    return {
        myBill: state.currency.myBill,
        categories: state.categories.allCategories,
        events: state.events.events
    }
};


class PlaningPage extends Component {
    componentDidMount() {
        this.props.onGetAllEvents();
    }



    render() {
        const props = this.props;

        // function numberWithCommas(x) {
        //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // }

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
                        Planificare <span className="sparkline bar"/>
                    </h3>
                </div>
                <section className="section planing-section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header card-header-sm bordered">
                                    <div className="header-block">
                                        <h3 className="title">Cheltuieli</h3>
                                    </div>
                                    <h5 className="planning-expenses pull-right">
                                        Suma disponibila: <span className="text-success">{
                                        props.myBill && numberWithCommas(props.myBill)
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default connect(mapStateToProps, {onGetAllEvents})(PlaningPage);