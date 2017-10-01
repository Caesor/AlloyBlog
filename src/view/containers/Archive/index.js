import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { connect } from 'react-redux'

class Archive extends Component {
    constructor() {
        super();
    }

    render() {
        const { archive } = this.props;

        return (
            <div>
                <h1>Archive</h1>
                <ul className="bloglist">
                {
                    archive.map( (item, index) => {
                        return (
                            <li className="bloglist-item" key={index}>
                                <span className="bloglist-item-title">{item.title}</span><span className="bloglist-item-time">{item.time}</span>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }

    componentDidMount() {

        fetch('/bloglist')
            .then(response =>response.json())
            .then(data => {
                this.setState({
                    data: data.list
                });
            }); 
    }
}

export default connect( state => {
    return {
        archive: state.archive
    }
})(Archive);