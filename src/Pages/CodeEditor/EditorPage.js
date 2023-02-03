import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { close, menu } from "../../assets";
import CloudButton from "../../components/Buttons/CloudButton";
import "./CodeEditor.css";
import EditorComponent from "./Editor/EditorComponent";
import { code } from "./files";

const EditorPage = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${code.html}</body>
          <style>${code.css}</style>
          <script>${code.js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const handleSubmit = () => {
    console.log(srcDoc);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - EditorPage</title>
      </Helmet>

      <>
        <nav className="sticky top-0 z-[3] w-full flex py-3 justify-between items-center navbar">
          <>
            <Link to="/" className="gap-x-4 items-center flex">
              <span className="text-3xl text-secondary  pt-2">
                <ion-icon name="logo-slack"></ion-icon>
              </span>
              <h1 className="text-white">
                Coders<span className="text-secondary">StackBox</span>
              </h1>
            </Link>
          </>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <label onClick={handleSubmit}>
              <CloudButton>Save</CloudButton>
            </label>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                <label onClick={handleSubmit}>
                  <CloudButton>Save</CloudButton>
                </label>
              </ul>
            </div>
          </div>
        </nav>
      </>

      <div className="h-[40vh] grid md:grid-cols-2 lg:grid-cols-3">
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
      <div className="h-[60vh]">
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
  );
};
export default EditorPage;
