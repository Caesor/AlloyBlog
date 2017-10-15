import React, { Component } from 'react'
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
        const { bid } = this.props.match.params;

        let rawHtml = converter.makeHtml(blog.content.toString());
        return (
            <div className="blog">
                <section className="container">
                    <h3 className="blog-title">{ blog.title }</h3>
                    <div className="blog-info">
                        <span className="avatar"></span>
                        nemo . 
                        <span className="blog-time">{ blog.time }</span>
                        <div className="ctrl">
                            <Link className="ctrl-item" to={`/editor/${bid}/1`}><i className="fa fa-edit"></i>编辑</Link>    
                            <span className="ctrl-item" onClick={ e => this.del() }><i className="fa fa-trash-o"></i>删除</span>
                        </div>
                    </div>
                    <div className="blog-content" dangerouslySetInnerHTML={{__html: rawHtml}}></div>
                </section>
            </div>
        )
    }

    componentDidMount() {

        const { bid } = this.props.match.params;
        
        this.props.get_blog_content(bid);
    }

    edit() {

    }

    del() {

    }
}

export default connect(
    state => ({
        blog: state.blog || {}
    }),
    { get_blog_content }
)(Blog)