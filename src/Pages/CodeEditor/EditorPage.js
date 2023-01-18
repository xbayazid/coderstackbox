import React, { useEffect, useState } from "react";
import './CodeEditor.css'
import EditorComponent from "./Editor/EditorComponent";

const EditorPage = () => {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <EditorComponent
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <EditorComponent
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <EditorComponent
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}
export default EditorPage;
