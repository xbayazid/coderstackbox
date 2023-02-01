import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import './CodeEditor.css'
import EditorComponent from "./Editor/EditorComponent";
import { code } from "./files";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - EditorPage</title>
      </Helmet>
      <div className="h-[50vh] grid md:grid-cols-2 lg:grid-cols-3 top-pane">
        <EditorComponent
          language="xml"
          displayName="HTML"
          value={code.html}
          onChange={setHtml}
        />
        <EditorComponent
          language="css"
          displayName="CSS"
          value={code.css}
          onChange={setCss}
        />
        <EditorComponent
          language="javascript"
          displayName="JS"
          value={code.js}
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
