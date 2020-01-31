import React from 'react';
import {NavLink} from "react-router-dom";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./LinkMenu.scss";

const LinkMenu = (props) => {
    return (
            <NavLink activeClassName="active" to={props.href}>
                <i className={props.iconName}/>
                {props.text}
            </NavLink>
    );
};

export default LinkMenu;