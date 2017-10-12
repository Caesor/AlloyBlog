import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, withRouter, Switch } from 'react-router-dom'
import classNames from 'classnames'
import Header from '../../components/Header'
import Main from '../Main'
import Archive from '../Archive'
import Blog from '../Blog'
import Editor from '../Editor'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class Layout extends Component {
    render() {
        let logoClass = classNames('logo', {small: this.props.location.pathname === '/editor'})
        return (
            <div className="layout">
                <Header>
                    <NavLink to="/"><i className={logoClass}></i></NavLink>
                    <NavLink to="/archive">Blog</NavLink>
                    <NavLink to="/lab">H5 Lab</NavLink>
                    {/* <NavLink to="/about">About</NavLink> */}
                    <a href="https://github.com/caesor">Github</a>
                </Header>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/archive" component={Archive} />
                    <Route path="/editor" component={Editor} />
                    <Route path="/blog/:blogId" component={Blog} />
                </Switch>
            </div>
        )
    }
}

export default withRouter(Layout);