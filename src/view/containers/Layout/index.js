import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Header from '../../components/Header'
// import Login from 'Login'
const Layout = () => (
    <div className="layout">
        <Header>
            <h1 className="nav-log">Nemo</h1>
            <NavLink to="/blog">Archive</NavLink>
            <NavLink to="/about">About</NavLink>
        </Header>
    </div>
)

export default Layout;