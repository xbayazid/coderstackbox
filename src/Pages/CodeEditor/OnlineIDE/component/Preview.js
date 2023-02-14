import React, { useEffect, useRef } from 'react'
import './preview.css'
const Preview = ({code, err}) => {

    const iframe = useRef();

    useEffect(() => {
        iframe.current.srcdoc = html;

       setTimeout(() => {
        iframe.current.contentWindow.postMessage(code, '*')
       }, 50)
      
    }, [code])

    console.log(err)
    

    const html = `
        <html>
            <head>
            <style>html { background-color: white; }</style>
            </head>
            <body>
                <div id="root"></div>
                <script>
                const handleError = (err) => {
                    const root = document.querySelector('#root');
                        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
                        console.error(err);
                };

                window.addEventListener('message', (event) => {
                    event.preventDefault();
                    handleError(event.error);
                  })

                 window.addEventListener('message', (event) => {
                    try {
                        eval(event.data);
                    } catch (err) {
                        handleError(err)
                    }
                  })
                </script>
            </body>
        </html>
    `

  return (
   <div className='preview-wrapper'>
     <iframe
    title="Preview"
    ref={iframe}
    sandbox="allow-scripts"
    srcDoc={html}
    />
    {err && <div className='preview-error'>{err}</div>}
   </div>
  )
}

export default Preview