import React, { useState } from 'react';
import Editor from '../Editor/Editor';
import Previewer from '../Previewer/Previewer';
import './App.css'

function App() {

  // creates state for the data returned from Editor's textCurator prop
  const [ data, setData ] = useState('');

  return (
    <div id="app-container">
      {/* textCurator takes in text(what is typed into the editor) and sets the data state to that value */}
      <Editor textCurator={(text) => {
        setData(text);
      }} />
      {/* the previewData prop takes the data state (the contents of the editor) and uses the marked down parser to edit the text */}
      <Previewer previewData={data} />
    </div>
  );
}

export default App;
