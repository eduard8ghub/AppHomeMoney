import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import DoughnutChart from "../../assets/Charts/Doughnut Chart";

class HistoryContainer extends Component {
    render() {
        return (
            <>
                <div className="title-block">
                    <h3 className="title">
                        Страница истории <span className="sparkline bar"> </span>
                    </h3>
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
                                <div className="card-header bordered">
                                    <div className="header-block">
                                        <h3 className="title">Список событий</h3>
                                    </div>
                                    <div className="form-inline pull-right m-r-2">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Поиск..."/>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-secondary dropdown-toggle ">
                                                Параметр
                                            </button>
                                            <div className="dropdown-menu">
                                                <NavLink className="dropdown-item" to="/">Action</NavLink>
                                                <NavLink className="dropdown-item" to="/">Another action</NavLink>
                                                <NavLink className="dropdown-item" to="/">Something else here</NavLink>
                                                <div className="dropdown-divider"> </div>
                                                <NavLink className="dropdown-item" to="/">Separated link</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-block">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Сумма</th>
                                            <th>Дата</th>
                                            <th>Категория</th>
                                            <th>Тип</th>
                                            <th className="text-lg-center">Действие</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>44 444</td>
                                            <td>12.12.2017</td>
                                            <td>Товары</td>
                                            <td>
                                                <span className="label label-danger">Расход</span>
                                            </td>
                                            <td className="text-lg-center">
                                                <NavLink to="/" className="btn btn-primary-outline">Открыть</NavLink>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>33 333</td>
                                            <td>12.12.2017</td>
                                            <td>Отдых</td>
                                            <td>
                                                <span className="label label-success">Доход</span>
                                            </td>
                                            <td className="text-lg-center">
                                                <NavLink to="/" className="btn btn-primary-outline">Открыть</NavLink>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default HistoryContainer;