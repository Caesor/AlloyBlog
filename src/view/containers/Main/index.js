import React, { Component } from 'react'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="slogon">
                    <h1>Hello</h1>
                    <h1>I am</h1>
                    <h1>Nemo</h1>
                </div>
            </div>
        )
    }
}

export default Main;