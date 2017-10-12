import React, { Component } from 'react'
import LoginDialog from '../LoginDialog'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class Login extends Component {
    render() {
        return (
            <div className="login" onClick={this.showDialog}>
                登录
            </div>
        )
    }

    showDialog() {
        console.log('ee');
        LoginDialog.show();
    }
}

export default Login;