import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class Header extends Component {
    render() {
        let isIndex = this.props.location.pathname === '/';
        let c = classNames('header', {black: !isIndex });

        return (
            <div className={c}>
                <ul className="nav">
                {
                    this.props.children.map((child, index) => (
                        <li className="nav-item" key={index}>
                        { child }
                        </li>
                    ))
                }
                </ul>
            </div>
        )
    }
}

export default withRouter(Header);