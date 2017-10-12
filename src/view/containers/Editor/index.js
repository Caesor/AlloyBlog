import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'

if(typeof window !== 'undefined'){
    require('./index.scss')
    require('codemirror/lib/codemirror.css');
    require('codemirror/mode/markdown/markdown');
}

class Editor extends Component {
    constructor() {
        super();
        this.state = {
            code: "//Code"
        }
    }
    render() {
        var options = {
            mode: 'markdown',
            theme: 'xq-light',
            indentUnit: 4,
            styleActiveLine: true,
            matchBrackets: true
            // readOnly: 'nocursor',
        };

        return (
            <div className="editor">
                <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} autoFocus={true} />
                <div className="preview"></div>
            </div>
        )
    }

    updateCode() {
        console.log('...')
    }
}

export default Editor;