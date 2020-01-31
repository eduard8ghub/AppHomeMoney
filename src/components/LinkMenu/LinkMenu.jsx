import React, {useState} from 'react';
import LogoSidebar from "../UI/LogoSidebar/LogoSidebar";
import {NavLink} from "react-router-dom";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./SidebarMenu.scss";

let i = "fas fa-bolt";
const SidebarMenu = (props) => {

    return (
        <li>
            <NavLink activeClassName="active" to="">
                {/*<i className={link.iconName}/>*/}
                {/*{link.text}*/}
            </NavLink>
        </li>
    );
};

export default SidebarMenu;