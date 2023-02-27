import "./code-editor.css";
import React, { useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import prettier from "prettier";
import parser from "prettier/parser-babel";

const CodeEditor = ({ initialValue, onChange }) => {
  const editorRef = useRef(null);
const [defaultValue, setDefaultValue] = useState(`import 'bootstrap@4.3.1/dist/css/bootstrap.min.css';
import 'react/umd/react.production.min.js';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div
      class="card"
      style={{
        width: '18rem',
      }}
    >
      <img
        class="card-img-top"
        src="https://avatars.githubusercontent.com/u/106759894?v=4"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));`)
  const handleEditorDidMount = (editor, getValue) => {
    editorRef.current = editor;
    // get db data
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    });
    editor.getModel()?.updateOptions({ tabsize: 2 });
  };
  const onFormatClick = () => {
    // get current value from editor
    const unFormatted = editorRef.current.getValue();
    // format that value
    const formatted = prettier
      .format(unFormatted, {
        parser: "babel",
        plugins: [parser],
        singleQuote: true,
        bracketSpacing: true,
        semi: true,
      })
      .replace(/\n$/, "");
    // set the formatted value back in the editor
    editorRef.current.setValue(formatted);
  };

  return (
    <div className="editor-wrapper">
      <button
        className="button button-format bg-orange-500 px-3 py-2 text-white rounded-lg"
        onClick={onFormatClick}
      >
        Format
      </button>
      <MonacoEditor
        className=""
        onMount={handleEditorDidMount}
        value={initialValue}
        theme="vs-dark"
        language="javascript"
        height="100%"
        width="100%"
        options={{
          wordWrap: "on",
          showUnused: false,
          folding: false,
          lineNumbersMinChards: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          autoIndent: "full",
          contextmenu: true,
          fontFamily: "monospace",
          lineHeight: 24,
          hideCursorInOverviewRuler: true,
          matchBrackets: "always",
          lineNumbersMinChars: 3,
          minimap: {
            enabled: false,
          },
          readOnly: false,
          scrollbar: {
            horizontalSliderSize: 4,
            verticalSliderSize: 18,
          },
        }}
      />
    </div>
  );
};

export default CodeEditor;
