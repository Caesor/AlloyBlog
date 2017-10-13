import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link, withRouter, Switch } from 'react-router-dom'
import classNames from 'classnames'
import Main from '../Main'
import Archive from '../Archive'
import Blog from '../Blog'
import Editor from '../Editor'
import Login from '../../components/Login'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class Layout extends Component {
    render() {
        let isIndex = this.props.location.pathname === '/';
        let c = classNames('header', {black: !isIndex });
        let logoClass = classNames('logo', {small: this.props.location.pathname === '/editor'})
        return (
            <div className="layout">
                <div className={c}>
                    <div className="nav">
                        <NavLink className="nav-item" to="/"><i className={logoClass}></i></NavLink>
                        <NavLink className="nav-item" to="/archive">Blog</NavLink>
                        <NavLink className="nav-item" to="/lab">H5 Lab</NavLink>
                        {/* <NavLink className="nav-item" to="/about">About</NavLink> */}
                        <a href="https://github.com/caesor">Github</a>
                    </div>
                    <div className="publish-ctrl">
                        <Link className="publish-ctrl-item" to="/editor"><i className="fa fa-file-text-o"></i>文件</Link>
                        <span className="publish-ctrl-item"><i className="fa fa-share-square-o"></i>发布</span>
                    </div>
                    <Login className="login"/>
                </div>
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