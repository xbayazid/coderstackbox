<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useRef, useState } from "react";
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";
<<<<<<< HEAD
import { useSaveProjectModal } from "../../components/Modals/SaveProjectModal";
import { FADE_IN_ANIMATION_SETTINGS } from "../../utils/motion";
import { close, menu } from "../../assets";
=======
import { FADE_IN_ANIMATION_SETTINGS } from "../../utils/motion";
import { close, logo, menu } from "../../assets";
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75
import CloudButton from "../../components/Buttons/CloudButton";
import EditorComponent from "../CodeEditor/Editor/EditorComponent";
import { useSelector } from "react-redux";
import { getAllCollections } from "../../features/collectionSlice/collectionSlice";
<<<<<<< HEAD
=======
import { useLogInModal } from "../../components/Modals/LoginModal";
import { useSaveProjectModal } from "../../components/Modals/SaveProjectModal";
import { FaPencilAlt } from "react-icons/fa";
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75

const EditCollection = () => {
  const [projectName, setProjectName] = useState("");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [toggle, setToggle] = useState(false);
  const [project, setProject] = useState();
  const { user } = useContext(AuthContext);

  const { id } = useParams()
  const Projects = useSelector(getAllCollections);

<<<<<<< HEAD


=======
  const ref = useRef(null);
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState('Untitled')
  const { LogInModal, setShowLogInModal } = useLogInModal();
  const { SaveProjectModal, setShowSaveProjectModal } = useSaveProjectModal(srcDoc);

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
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75

  useEffect(() => {
    let code = Projects.find(c => c?._id === (id));
    setProject(code)
    setHtml(code?.html)
    setCss(code?.css)
    setJs(code?.js)
}, [id])

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

<<<<<<< HEAD
  const handleSubmit = () => {
    const code = {
      projectName: projectName,
=======


  const handleSubmit = () => {
    if (!user?.uid) {
      setShowLogInModal(true);
      return;
    } else if (html===""| css==="" |js==="") {
      toast("🥺 Hey! You have blank space! 🥺")
    }
    else {
    const code = {
      projectName: value,
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75
      html: html,
      css: css,
      js: js,
    };
    const url = `http://localhost:5000/code/${id}`;
    axios
      .put(url, code, {
        headers: {
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      })
      .then((res) => {
<<<<<<< HEAD
        console.log(res);

        if (res.status === 200) {
          toast.success(res.data.message);
=======
        if (res.status === 200) {
          toast.success(res.data.message);
          setShowSaveProjectModal(true);
          console.log(res.status)
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75
        }
      })
      .catch((err) => {
        console.error(err);
      });
<<<<<<< HEAD
  };

  
  function Save() {
    setShowSaveProjectModal(true);
    handleSubmit();
  }
  const { SaveProjectModal, setShowSaveProjectModal } = useSaveProjectModal();
=======
    }
  };

  

>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75



  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - EditorPage</title>
      </Helmet>

      <>
<<<<<<< HEAD
        <nav className="sticky top-0 z-[3] w-full flex py-3 justify-between items-center navbar">
          <>
            <SaveProjectModal />
            <Link to="/" className="gap-x-4 items-center flex">
              <span className="text-3xl text-secondary  pt-2">
                <ion-icon name="logo-slack"></ion-icon>
              </span>
              <h1 className="text-white">
                Coders<span className="text-secondary">StackBox</span>
              </h1>
            </Link>
          </>

          <div className={`${user?.email === project?.user?.email ? "block" : "hidden"}`}>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1 ">
            <label>
              <motion.button
              disabled
                className={`rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black `}
                onClick={Save}
                {...FADE_IN_ANIMATION_SETTINGS}
              >
                Save
              </motion.button>
            </label>
          </ul>

          </div>
=======
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

>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75
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
<<<<<<< HEAD
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                <label onClick={handleSubmit}>
                  <CloudButton>Save</CloudButton>
                </label>
              </ul>
=======
              
>>>>>>> 3b5f7b14510dd27fc02d04eaccdfbc660349cf75
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
export default EditCollection;
