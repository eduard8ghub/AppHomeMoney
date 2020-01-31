import React, {Component} from 'react';
import cn from "classnames";
import {NavLink} from "react-router-dom";
import {getCurrentDate} from "../../utils/CurrentDate";
import {connect} from "react-redux";
import {onLogout} from "../../store/actions/authActions";


class Header extends Component {
    state = {
        showDropDownMenu: false
    };

    toggleDropDownMenu = () => {
        this.setState({
            showDropDownMenu: !this.state.showDropDownMenu
        })
    };

    setOnLogout = () => {
        this.props.onLogout();
    };

    render() {
        return (
            <>
                <div className="header-block header-block-search">{getCurrentDate()}</div>

                <div className="header-block header-block-nav">
                    <ul className="nav-profile">
                        <li className={cn('profile', 'dropdown', {'open': this.state.showDropDownMenu})}>
                        <span className="nav-link dropdown-toggle" role="button" onClick={this.toggleDropDownMenu}>
                                <span className="name">
                                    Здравствуйте, {localStorage.userEmail.split('@')[0]}
                                </span>
                        </span>
                            <div className="dropdown-menu profile-dropdown-menu">
                                <NavLink className="dropdown-item" to="/">
                                    <i className="fa fa-gear icon"> </i>Сделать запись</NavLink>
                                <div className="dropdown-divider"> </div>
                                <NavLink className="dropdown-item" to="/" onClick={this.setOnLogout}>
                                    <i className="fa fa-power-off icon"/>
                                    Выйти
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>

            </>
        );
    }
}

export default connect(null, {onLogout})(Header);