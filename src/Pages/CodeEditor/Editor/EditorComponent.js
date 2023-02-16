import Editor from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import { FaCompressAlt, FaExpandAlt } from "react-icons/fa";
import * as monaco from 'monaco-editor';
import { MonacoServices } from "monaco-languageclient";

const EditorComponent = (props) => {
  const { language, displayName, value, onChange } = props;
  const [open, setOpen] = useState(true);


  const MONACO_OPTIONS = {
    autoIndent: "full",
    automaticLayout: true,
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    wordWrap: "on",
    showUnused: false,
    folding: false,
    lineNumbersMinChars: 3,
    scrollBeyondLastLine: false,
    minimap: {
      enabled: false,
    },
    readOnly: false,
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
  };

  const editorDidMount = (editor) => {
    MonacoServices.install(monaco);
    if (editor && editor.getModel()) {
        const editorModel = editor.getModel();
        if (editorModel) {
            editorModel.setValue('{\n    "sayHello": "hello"\n}');
        }
    }
    editor.focus();
};


function handleChange(value, event) {
  // console.log('onChange', value)
  onChange(value);
}
  return (
    <div
      className={`flex-grow basis-0 flex
    flex-col p-2 ${open ? "scale-x-100" : "scale-x-50"} `}
    >
      <div className="flex justify-between text-white p-[.5rem .5rem .5rem 1rem] rounded-t-lg navglassmorphism px-2 py-3">
        {displayName}
        <button
          type="button"
          className="ml-2 bg-none border-none cursor-pointer"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          {open ? <FaCompressAlt /> : <FaExpandAlt />}
        </button>
      </div>
      <Editor
        theme="vs-dark"
        options={MONACO_OPTIONS}
        onChange={handleChange}
        defaultLanguage={language}
        value={value}
        editorDidMount={editorDidMount}
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
