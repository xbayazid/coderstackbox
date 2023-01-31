
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import Editor from "@monaco-editor/react";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useRef } from "react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

const EditorComponent = (props) => {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);



  function handleChange(value, event) {
    onChange(value);
  }

  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function showValue() {
    alert(editorRef.current.getValue());
    console.log(editorRef.current.getValue())
  }
  const onFormatClick = () => {
    console.log("object");
    // get current value from editor
    const unFormatted = editorRef.current.getValue()
    // format that value
    const formatted = prettier.format(unFormatted, {
      parser: 'babel',
      plugins: [parser],
      singleQuote: true,
      bracketSpacing: true
    })
    // set the formatted value back in the editor
    editorRef.current.setValue(formatted);
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
        
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <button onClick={onFormatClick}>Format</button>
      <Editor
        height="80vh"
        theme="vs-dark"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
        }}
        onChange={handleChange}
        defaultLanguage={language}
        defaultValue={value}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default EditorComponent;

/* import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen(prevOpen => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <Editor
     height="90vh"
     defaultLanguage="javascript"
     defaultValue="// some comment"
   />
    </div>
  )
} */
