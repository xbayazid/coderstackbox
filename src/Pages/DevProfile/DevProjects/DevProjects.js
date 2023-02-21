import React, { useEffect, useState } from "react";

const DevProjects = ({ devProfile }) => {
  const { projectName, html, css, js } =
    devProfile;

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
            <html>
              <body>${html}</body>
              <style>${css}</style>
              <script>${js}</script>
            </html>
          `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="rounded-lg shadow-lg bg-gradient-to-br from-accent/30 via-secondary/5 to-primary/75  max-w-sm">
          <div className="flex flex-col gap-5">
            <iframe
              className="rounded-t-lg"
              srcDoc={srcDoc}
              title={projectName}
              sandbox="allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
              frameBorder="0"
              loading="lazy"
              scrolling="no"
              width="100%"
              height="100%"
            />
          <div className="p-5">
              <h3 className=" font-serif font-semibold">
                {projectName}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevProjects;
