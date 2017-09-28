import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const Home = ({ children }) => (
    <div className="">
        <nav className="nav">
            <div className="nav-container">
                <NavLink className="nav-logo" to="/" onlyActiveOnIndex>Archive</NavLink>
                {/* <NavLink className="nav-item" to="/">blog</NavLink> */}
                <NavLink className="nav-item" to="/about">About</NavLink>
            </div>
        </nav>
        <div className="content">
            {children}
        </div>
    </div>
)

export default Home;
