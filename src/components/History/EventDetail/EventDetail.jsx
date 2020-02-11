import React, {useEffect, useState} from 'react';
import {NavLink, withRouter, useHistory} from "react-router-dom";
import cs from "classnames";

const EventDetail = ({events, allCategories}) => {
    let path = +useHistory().location.pathname.split('/')[2];

    const [currentEvent, setCurrentEvent] = useState(null);
    useEffect(() => {
        events && events.filter(e => e.id === path && setCurrentEvent(e))
    }, [events, path]);


    const [currentCategory, setCurrentCategory] = useState(null);
    useEffect(() => {
        allCategories && currentEvent && allCategories.filter(c => c.id === currentEvent.category && setCurrentCategory(c))
    }, [allCategories, currentEvent]);


    return (
        <>
            {
                currentEvent &&
                <>
                    <div className="title-block">
                        <h3 className="title">
                            <NavLink to="/history"><i className="fa fa-arrow-left" style={{margin: "0 5px"}}/></NavLink>
                            Страница записи № {currentEvent.id}
                            <span className="sparkline bar"/>
                        </h3>
                    </div>
                    <section className="section">
                        <div className="row">
                            <div className="col-xs-6 col-xs-offset-3">
                                <div className="card">
                                    <div className={
                                        cs("card-header",
                                            {
                                                'card-header-success': currentEvent.type === "income",
                                                'card-header-danger': currentEvent.type === "outcome"
                                            }
                                        )
                                    }>
                                    {/*<div className="card-header card-header-success">*/}
                                        <div className="header-block">
                                            <p className="title">
                                                {currentEvent.type === 'income' ? "Venituri" : "Cheltuieli"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-block">
                                        <ul>
                                            <li>Suma: <strong>{currentEvent.amount} MDL</strong></li>
                                            <li>Categoria: <strong>{currentCategory && currentCategory.name}</strong></li>
                                            <li>Comentariu: <strong>{currentEvent.description}</strong></li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">{currentEvent.date}</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }

        </>
    );
};

export default withRouter(EventDetail);