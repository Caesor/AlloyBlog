import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { get_blog_content } from '../../actions/blog'

if(typeof window !== 'undefined'){
    require('./index.scss')
}

const converter = new showdown.Converter({
    extensions: [showdownHighlight]
});

class Blog extends Component {
    constructor() {
        super();
    }

    render() {
        const { blog } = this.props;
        let rawHtml = converter.makeHtml(blog.content.toString());
        return (
            <div className="blog">
                <section className="container">
                    <h3 className="blog-title">{ blog.title }</h3>
                    <div className="blog-info">
                        <span className="avatar"></span>
                        nemo . 
                        <span className="blog-time">{ blog.time }</span>
                    </div>
                    <div className="blog-content" dangerouslySetInnerHTML={{__html: rawHtml}}></div>
                </section>
            </div>
        )
    }

    componentDidMount() {

        const bid = window.location.pathname.substr(6);
        
        this.props.get_blog_content(bid);
    }
}

export default connect(
    state => ({
        blog: state.blog || {}
    }),
    { get_blog_content }
)(Blog)