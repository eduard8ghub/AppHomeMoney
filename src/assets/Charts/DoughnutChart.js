import React, {Component} from 'react';
import CanvasJSReact from './canvasjs.react';
import {connect} from "react-redux";

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const mapStateToProps = (state) => {

    return {
        events: state.events.events,
        categories: state.categories.allCategories
    }
};


class DoughnutChart extends Component {
    state = {
        totalCosts: null
    };


    render() {
        const props = this.props;

        const getCategoryCost = (category) => {
            if (props.categories && props.events) {
                const catEvents = props.events.filter(e => e.category === category.id && e.type === "outcome");
                return catEvents.reduce((total, e) => {
                    total += e.amount;
                    return total;
                }, 0)
            }
        };

        const getTotalCosts = (categories) => {
            const eventsCost = categories.map(c => {
                return getCategoryCost(c);
            });
            return eventsCost.reduce((total, c) => {
                total += c;
                return total;
            }, 0);
        };

        const getCategoryCostPercent = (event, total) => {
            const percent = ((100 * event) / total).toFixed(0);
            return percent > 100 ? 100 : +percent;
        };


        const options = {
            animationEnabled: true,
            subtitles: [{
                verticalAlign: "center",
                fontSize: 24,
                dockInsidePlotArea: true
            }],
            data: [{
                type: "doughnut",
                showInLegend: true,
                indexLabel: "{name}: {y}",
                yValueFormatString: "#,###'%'",
                dataPoints: props.categories && props.events &&
                props.categories.map(c => ({ name: c.name, y: getCategoryCostPercent(getCategoryCost(c), getTotalCosts(props.categories)) }))

            }]
        };

        return (
            <div>
                <CanvasJSChart options={options}
                    /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(DoughnutChart);