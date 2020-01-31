import React, {Component} from 'react';

class Layout extends Component {
    render() {
        return (
            <div className="layout app">
                {
                    !this.props.auth ?
                        <>
                            <header className="header">
                                {this.props.header}
                            </header>
                            <aside className="sidebar">
                                {this.props.nav}
                            </aside>
                            <article className="content dashboard-page">
                                {this.props.content}
                            </article>
                        </> :
                        <div className="auth">{this.props.auth}</div>
                }
            </div>
        );
    }
}

export default Layout;