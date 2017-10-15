import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import showdown from 'showdown'
import { connect } from 'react-redux'
import showdownHighlight from 'showdown-highlight'
import { get_blog_file, update_blog_file } from '../../actions/editor'

if(typeof window !== 'undefined'){
    require('./index.scss')
    require('codemirror/lib/codemirror.css');
    require('codemirror/mode/markdown/markdown');
}

const linkReg = /(.+)\.md$/,
    infoReg = /---([^]+)---[\r\n]([^]+)/m,
    timeReg = /(\d{4}-\d{2}-\d{2})/i,
    titleReg = /title\s*:\s*(.+)/i,
    categoryReg = /categories\s*:\s*(.+)/i,
    tagReg = /tags\s*:\s*(.+)/i;
const converter = new showdown.Converter({
    extensions: [showdownHighlight]
});

class Editor extends Component {
    constructor() {
        super();
        this.state = {
            text: "---\ntitle: xxxx\ncategories: font-end\ntags: react webpack ...\n---\nThis is your world..."
        }
        this.inited = false;
    }
    render() {
        const { text } = this.state;
        const { editor } = this.props;
        const { blog=text } = editor || {};
        const options = {
            mode: 'markdown',
            theme: 'xq-light',
            indentUnit: 4,
            styleActiveLine: true,
            matchBrackets: true
            // value: blog
        };
        if( !this.inited && editor.blog ){
            options.value = blog;
            this.inited = true;
        }
        let info = blog.match(infoReg)
        let title = info[1].match(titleReg)[1];
        let content = info[2];
        let rawHtml = converter.makeHtml(content);

        return (
            <div className="editor">
                <CodeMirror value={blog} onChange={this.updateCode.bind(this)} options={options} autoFocus={true} />
                <div className="preview">
                    <h3 className="blog-title">{ title }</h3>
                    <div className="blog-content" dangerouslySetInnerHTML={{__html: rawHtml}}></div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const { bid, version } = this.props.match.params;
        // if(bid !== 'new_doc'){
            this.props.get_blog_file(bid, version);
        // }
    }

    updateCode(cur) {
        this.props.update_blog_file(cur);
    }
}

export default connect(
    state => ({
        editor: state.editor || {}
    }),
    { get_blog_file, update_blog_file }
)(Editor);