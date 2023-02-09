import React, { useEffect, useState } from 'react'
import styles from '../../style'

export default function CollectionCard({props}) {
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
          setSrcDoc(`
            <html>
              <body>${props.html}</body>
              <style>${props.css}</style>
              <script>${props.js}</script>
            </html>
          `);
        }, 250);
    
        return () => clearTimeout(timeout);
      }, [props.html,props.css, props.js]);


  return (
    <div className="relative rounded-lg overflow-hidden glassmorphism">
      <div className={`flex flex-col justify-center items-center`}>
        {props?.icon}

        <div className={`${styles.flexCenter}`}>
          <div className={` ${styles.heading3}`}>{props?.title}</div>
        </div>
      </div>
      <div className="flex justify-center px-4">
        <div
          className={`bg-gradient-to-r from-accent to-secondary w-full `}
          style={{ height: "2px" }}
        />
      </div>

      <div className="p-4">
      <iframe
        className="bg-white"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}
