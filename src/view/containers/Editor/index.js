import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'

if(typeof window !== 'undefined'){
    require('./index.scss')
    require('codemirror/lib/codemirror.css');
    require('codemirror/mode/markdown/markdown');
}

const INFOREG = /---([^]+)---[\r\n]([^]+)/m;
const converter = new showdown.Converter({
    extensions: [showdownHighlight]
});

class Editor extends Component {
    constructor() {
        super();
        this.state = {
            text: "//Code"
        }
    }
    render() {
        const options = {
            mode: 'markdown',
            theme: 'xq-light',
            indentUnit: 4,
            styleActiveLine: true,
            matchBrackets: true
            // readOnly: 'nocursor',
        };
        const { text } = this.state;

        let rawHtml = converter.makeHtml(text);

        return (
            <div className="editor">
                <CodeMirror value={text} onChange={this.updateCode.bind(this)} options={options} autoFocus={true} />
                <div className="preview blog-content" dangerouslySetInnerHTML={{__html: rawHtml}}></div>
            </div>
        )
    }

    updateCode(cur) {
        console.log(cur);
        this.setState({
            text: cur.match(INFOREG)[2] || cur
        })
    }
}

export default Editor;