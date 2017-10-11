import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Switch } from 'react-router-dom'

import Header from '../../components/Header'
import Main from '../Main'
import Archive from '../Archive'
import Blog from '../Blog'
import About from '../About'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Header>
                    <NavLink to="/"><i className="logo"></i></NavLink>
                    <NavLink to="/archive">Blog</NavLink>
                    <NavLink to="/lab">H5 Lab</NavLink>
                    {/* <NavLink to="/about">About</NavLink> */}
                    <a href="https://github.com/caesor">Github</a>
                </Header>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/archive" component={Archive} />
                    {/* <Route path="/about" component={About} /> */}
                    <Route path="/blog/:blogId" component={Blog} />
                </Switch>
            </div>
        )
    }
}

export default Layout;