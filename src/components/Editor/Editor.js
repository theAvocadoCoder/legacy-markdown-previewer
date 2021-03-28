import React, { useState } from 'react';
import './Editor.css'

export default function Editor(props) {

    // creates state to manage the content of the editor
    const [ text, setText ] = useState('');

    // placeHolderText is what is displayed on the editor when the page loads for the first time and every time it refreshes
    const placeHolderText = `# Markdown Cheat Sheet

    This Cheat Sheet is provided by [The Markdown Guide](https://www.markdownguide.org)!
    
    This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).
    
    ## Basic Syntax
    
    These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.
    
    ### Heading
    
    # H1
    ## H2
    ### H3
    
    ### Bold
    
    **bold text**
    
    ### Italic
    
    *italicized text*
    
    ### Blockquote
    
    > blockquote
    
    ### Ordered List
    
    1. First item
    2. Second item
    3. Third item
    
    ### Unordered List
    
    - First item
    - Second item
    - Third item
    
    ### Code
    
    \`code\`
    
    ### Horizontal Rule
    
    ---
    
    ### Link
    
    [title](https://www.example.com)
    
    ### Image
    
    ![alt text](image.jpg)
    
    ## Extended Syntax
    
    These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.
    
    ### Table
    
    | Syntax | Description |
    | ----------- | ----------- |
    | Header | Title |
    | Paragraph | Text |
    
    ### Fenced Code Block
    
    \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
    \`\`\`
    
    ### Footnote
    
    Here's a sentence with a footnote. [^1]
    
    [^1]: This is the footnote.
    
    ### Heading ID
    
    ### My Great Heading {#custom-id}
    
    ### Definition List
    
    term
    : definition
    
    ### Strikethrough
    
    ~~The world is flat.~~
    
    ### Task List
    
    - [x] Write the press release
    - [ ] Update the website
    - [ ] Contact the media`;

    return (
        <div id="editor-container">
            <div id="editor-header">Text Editor</div>
            {/* the onChange event listener monitors the changes in the editor and passes the value of the textarea to the text state. Then, it passes the text state to the textCurator function prop which is defined in the file for the App component */}
            <textarea id="editor" onChange={(e) => {
                setText(e.target.value);
                props.textCurator(text);
            }}>{placeHolderText}</textarea>
            <button id="clearEditorBtn" onClick={() => {
                // this sets the content of the textarea to an empty string and resets the text state as well
                setText('');
                document.getElementById('editor').value = '';
            }}>Clear Editor</button>
        </div>
    );
}