import React, { Component } from 'react'
import Singleton from 'react-singleton'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class LoginDialog extends Component {
    render() {
        return (
            <div className="loginDialog">
                <div className="dialog">
                </div>
            </div>
        )
    }
}

export default new Singleton(LoginDialog);