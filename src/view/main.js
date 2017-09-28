import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Switch } from 'react-router'

import Layout from './containers/Layout'
import Archive from './containers/Archive'
import Blog from './containers/Blog'
import About from './containers/About'

class RouteStatus extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Layout} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Archive} />
                <Route path="/blog/:blogId" component={Blog} />
            </Switch>
        )
    }
}

export default RouteStatus;