import Editor from '@monaco-editor/react'
import React, { useEffect, useState } from 'react'
import { FaCompressAlt, FaExpandAlt } from 'react-icons/fa'

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
    <div className={`flex-grow basis-0 flex
    flex-col p-2 ${open ? 'scale-x-100' : 'scale-x-50'} `}>
    <div className="editor-title">
      {displayName}
      <button
        type="button"
        className="expand-collapse-btn"
        onClick={() => setOpen(prevOpen => !prevOpen)}
      >{open ? 
        <FaCompressAlt/>
        :
        <FaExpandAlt/>
        }
      </button>
    </div>
    <Editor
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