import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Switch } from 'react-router'

import Header from './components/Header'
import Archive from './containers/Archive'
import Blog from './containers/Blog'
import About from './containers/About'

class Main extends Component {
    render() {
        return (
            <div className="layout">
                <Header>
                    <h1 className="nav-log">Nemo</h1>
                    <NavLink to="/">Archive</NavLink>
                    <NavLink to="/about">About</NavLink>
                </Header>
                <Switch>
                    <Route exact path="/" component={Archive} />
                    <Route path="/about" component={About} />
                    <Route path="/blog/:blogId" component={Blog} />
                </Switch>
            </div>
        )
    }
}

export default Main;