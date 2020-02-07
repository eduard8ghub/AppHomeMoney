import React from 'react';
import {NavLink} from "react-router-dom";
import cs from "classnames";

const HistoryItem = ({events}) => {
    return (
        <>
            {
                events.map((event, idx) => (
                    <tbody key={idx}>
                    <tr>
                        <th scope="row">{idx + 1}</th>
                        <td>{event.amount}</td>
                        <td>{event.date.split(' ')[0]}</td>
                        <td>{event.description}</td>
                        <td>
                <span className={
                    cs("label", {"label-danger": event.type === "outcome", "label-success": event.type === "income"})
                }>
                    {
                        event.type === "outcome" ? "Cheltuieli" : "Venituri"
                    }
                </span>
                        </td>
                        <td className="text-lg-center">
                            <NavLink to="/" className="btn btn-primary-outline"
                                     activeClassName="activeItem">Deschide</NavLink>
                        </td>
                    </tr>
                    </tbody>
                ))
            }
        </>
    );
};

export default HistoryItem;