import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Previewer.css'

export default function Previewer(props) {


    return (
        <div id="previewer-container">
            <div id="preview-header">Preview</div>
            {/* the previewdata prop is passed as the content of this div because it contains the parsed marked down text from the Editor component */}
            <div id="preview">
                <ReactMarkdown source={props.previewData} />
            </div>
        </div>
    )
}