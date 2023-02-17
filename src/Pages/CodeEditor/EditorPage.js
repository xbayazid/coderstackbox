import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { close, logo, menu } from "../../assets";
import CloudButton from "../../components/Buttons/CloudButton";
import { AuthContext } from "../../context/AuthProvider";
import "./CodeEditor.css";
import EditorComponent from "./Editor/EditorComponent";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSaveProjectModal } from "../../components/Modals/SaveProjectModal";
import { FADE_IN_ANIMATION_SETTINGS } from "../../utils/motion";
import Resizable from "./resizable/resizable";
import { FaPencilAlt } from "react-icons/fa";
import { useLogInModal } from "../../components/Modals/LoginModal";

const EditorPage = () => {
  const [projectName, setProjectName] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const ref = useRef(null);
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState('Untitled')
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && event.target && ref.current.contains(event.target)) {
        setEditing(true)
        return
      }
      setEditing(false)
    }
    document.addEventListener('click', listener, { capture: true });
    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };

  }, [])

  const { user } = useContext(AuthContext);

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
const { LogInModal, setShowLogInModal } = useLogInModal()
  const handleSubmit = () => {
    if (!user?.uid) {
      setShowLogInModal(true);
      return;
    } else if (html===""| css==="" |js==="") {
      toast("🥺 Hey! You have blank space! 🥺")
    } else {
    const code = {
      projectName: value,
      html: html,
      css: css,
      js: js,
    };
    console.log(code)
    const url = `https://coderstackbox-server-codersstackbox-gmailcom.vercel.app/projects`;
    axios
      .post(url, code, {
        headers: {
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          setShowSaveProjectModal(true);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    }
  };

  const { SaveProjectModal, setShowSaveProjectModal } = useSaveProjectModal(srcDoc);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - EditorPage</title>
      </Helmet>

      <>
        <nav className="z-[3] w-full flex py-3 justify-between items-center navbar">
          <>
            <SaveProjectModal />
            <LogInModal />
            <Link to="/" className=" items-center flex mr-4 ml-5">
              <span className="pl-2">
                <img className="w-12" src={logo} alt="" />
              </span>
              </Link>
              <h1 ref={ref} contentEditable = {
                editing ? true : false
              }
              onBlur={(t)=>setValue(t.currentTarget.innerHTML)}
              className={`text-white text-xl font-bold tracking-wider mr-2 ${!editing && "cursor-pointer"}`}>
               {value}
              </h1>
              <FaPencilAlt className="text-lg hover:cursor-pointer checked:text-3xl 
              text-white hover:text-green-500" onClick={() => setEditing(true)} ></FaPencilAlt>
            
          </>

          <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-5">
            <label   onClick={handleSubmit}>
              <>
                  <CloudButton>Save</CloudButton>
              </>
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
