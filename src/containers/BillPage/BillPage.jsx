import React from 'react';
// import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./BillPage.scss";
import MyBill from "./MyBill/MyBill";
import ExchangeRates from "./ExchangeRates/ExchangeRates";

const BillPage = ({myBill, allCurrency}) => {
    return (
        <>
            <div className="title-block">
                <h3 className="title pull-left">
                    Страница счета <span className="sparkline bar"> </span>
                </h3>
                <div className="pull-right">
                    <button className="btn-sm btn btn-primary-outline" onClick={()=>{ window.location.reload() }}>
                        <i className="fa fa-sync-alt"/>
                    </button>
                </div>
            </div>
            <section className="section">
                <div className="row">
                    {myBill && <MyBill myBill={myBill} currentCurrency={allCurrency}/>}
                    {allCurrency && <ExchangeRates currentCurrency={allCurrency} />}
                </div>
            </section>
        </>
    );
};

export default BillPage;