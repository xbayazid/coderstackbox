import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { close, menu } from "../../assets";
import CloudButton from "../../components/Buttons/CloudButton";
import { AuthContext } from "../../context/AuthProvider";
import "./CodeEditor.css";
import EditorComponent from "./Editor/EditorComponent";
import { code } from "./files";
import axios from 'axios';
import { toast } from 'react-hot-toast'

const EditorPage = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [toggle, setToggle] = useState(false);

  const {user} = useContext(AuthContext)

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
  
  const handleSubmit = () => {
    const code = {
      html: html,
      css: css,
      js: js
    };
    const url = `http://localhost:5000/projects`;
    axios.put(url, code, {
      headers: {
        authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
      },
    })
      .then((res) => {
        console.log(res)
        
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
      });
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
      <div className="h-[60vh]">
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
    </>
  );
};
export default EditorPage;
