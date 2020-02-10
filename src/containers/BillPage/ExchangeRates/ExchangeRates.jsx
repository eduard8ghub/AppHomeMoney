import React from 'react';
import {getCurrentDate} from "../../../Utils/getCurrentDateUtils";

const ExchangeRates = ({currentCurrency}) => {
    return (
        <div className="col col-xs-12 col-sm-12 col-md-6 col-xl-7 history-col">
            <div className="card">
                <div className="card-block">
                    <div className="title-block">
                        <h4 className="title">Курс</h4>
                    </div>
                    <div className="row row-sm stats-container">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>Валюта</th>
                                <th>Курс</th>
                                <th>Дата</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                currentCurrency &&
                                currentCurrency.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.currencyValute}</td>
                                        <td>{item.newArrRate}</td>
                                        <td>{getCurrentDate()}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExchangeRates;