import React, { Component } from 'react'
import LoginDialog from '../LoginDialog'

class Login extends Component {
    render() {
        return (
            <div {...this.props} onClick={this.showDialog}>
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