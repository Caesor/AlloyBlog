import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux'

import { get_blog_list } from '../../actions/archive'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

class Archive extends Component {
    constructor() {
        super();
    }

    render() {
        const { archive } = this.props;

        return (
            <div className="archive">
                <Link to="/editor"><i className="new_doc">新建文档</i></Link>
                <h1 className="title">Archive</h1>
                <ul className="bloglist">
                {
                    archive.map( (item, index) => {
                        return (
                            <li className="" key={index}>
                                <Link className="bloglist-item" to={`/blog/${item.filename}`}><span className="bloglist-item-title">{item.title}</span><span className="bloglist-item-time">{item.time}</span></Link>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.props.get_blog_list();
    }
}

export default connect( 
    state => ({
        archive: state.archive || []
    }),
    { get_blog_list }
)(Archive);