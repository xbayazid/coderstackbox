import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import Editor, { useMonaco } from "@monaco-editor/react";


const EditorComponent = (props) => {
  const {
    language,
    displayName,
    value,
    onChange
  } = props
  const [open, setOpen] = useState(true)

  function handleChange(value, event) {
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
    height="80vh"
    theme="vs-dark"

    onChange={handleChange}
   defaultLanguage={language}
   defaultValue={value}
 />
  </div>
  )
}

export default EditorComponent

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