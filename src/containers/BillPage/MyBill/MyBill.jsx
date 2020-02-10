import React from 'react';

const MyBill = ({myBill, currentCurrency}) => {
    return (
        <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-5 stats-col">
            <div className="card stats">
                <div className="card-block">
                    <div className="title-block">
                        <h4 className="title">Счет</h4>
                    </div>
                    <div className="row row-sm stats-container">
                        <div className="col-xs-12 stat-col">
                            <div className="stat-icon">
                                <span>MDL</span>
                            </div>
                            <div className="stat">
                                <div className="value">{myBill.value}</div>
                            </div>
                            <progress className="progress stat-progress" value="100" max="100">
                                <div className="progress">
                                    <span className="progress-bar" style={{width: "100%"}}> </span>
                                </div>
                            </progress>
                        </div>
                        {
                            currentCurrency.map((itemBill, index) => (
                                <div className="col-xs-12 stat-col" key={index}>
                                    <div className="stat-icon">
                                        {itemBill.currencyValute}
                                    </div>
                                    <div className="stat">
                                        <div className="value">{(myBill.value / itemBill.newArrRate).toFixed(2)}</div>
                                    </div>
                                    <progress className="progress stat-progress" value="100" max="100">
                                        <div className="progress">
                                            <span className="progress-bar" style={{width: "100%"}}> </span>
                                        </div>
                                    </progress>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBill;