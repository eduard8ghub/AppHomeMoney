import React, {Component} from 'react';
import LogoSidebar from "../../components/UI/LogoSidebar/LogoSidebar";
import LinkMenu from "../../components/LinkMenu/LinkMenu";

class Sidebar extends Component {
    state = {
        menuLinks: [
            {id: 1, href: "/bill", text: "Счет", iconName: "far fa-building"},
            {id: 2, href: "/history", text: "История", iconName: "fas fa-bolt"},
            {id: 3, href: "/planing", text: "Планирование", iconName: "fas fa-archive"},
            {id: 4, href: "/records", text: "Запись", iconName: "fas fa-plus-square"}
        ]
    };


    render() {
        return (
            <aside className="sidebar">
                <div className="sidebar-container">
                    <LogoSidebar/>
                    <nav className="menu">
                        <ul className="nav metismenu">
                            {
                                this.state.menuLinks.map(link => (
                                    <li key={link.id}>
                                        <LinkMenu {...link}/>
                                    </li>

                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}

export default Sidebar;