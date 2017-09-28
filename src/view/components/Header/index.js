import React, { Component } from 'react'

const Header = ({ children }) => (
    <div className="header">
        <div className="nav">
            <ul className="nav-list">
            {
                children.map((child, index) => (
                    <li className="nav-list-item" key={index}>
                    { child }
                    </li>
                ))
            }
            </ul>
        </div>
    </div>
)

export default Header;