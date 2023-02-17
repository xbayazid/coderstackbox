import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../../../../assets';
import { useSaveProjectModal } from '../../../../components/Modals/SaveProjectModal';
import { AuthContext } from '../../../../context/AuthProvider';
import { FADE_IN_ANIMATION_SETTINGS } from '../../../../utils/motion';
import bundle from '../bundler';
import CodeEditor from './code-editor';
import Preview from './Preview';
import Resizable from './resizable';
import { motion } from 'framer-motion'
import CloudButton from '../../../../components/Buttons/CloudButton';
import { useLogInModal } from '../../../../components/Modals/LoginModal';
import { FaPencilAlt } from 'react-icons/fa';
const CodeCell = () => {
    // const ref = useRef();
    const [code, setCode] = useState('');
    const [err, setErr] = useState('')
    const [input, setInput] = useState('');
    const [projectCode, setProjectCode] = useState('');
    // const startService = async () => {
    //     ref.current = 
    // };


    // useEffect(() => {
    //     startService();
    // }, []);


    useEffect(() => {
      const timer = setTimeout(async() => {
        const output = await bundle(input)
        setCode(output.code);
        setErr(output.err)
        setProjectCode(input)
      }, 750)
      return () => {
        clearTimeout(timer);
      }
    }, [input])
    

    // const onClick = async () => {
    //     if (!ref.current) {
    //         return;
    //     }


    //     const result = 
    //     const output = await bundle(input)
    //     setCode(output);


    // };

    /* -------------------- */


    const [projectName, setProjectName] = useState("");
    const [toggle, setToggle] = useState(false);
  
    const {user} = useContext(AuthContext)
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
    
    const { LogInModal, setShowLogInModal } = useLogInModal()
    const handleSubmit = () => {
      if (!user?.uid) {
        setShowLogInModal(true)
      } else {
      const code = {
        projectName: projectName,
        code: projectCode
      };
      const url = `http://localhost:5000/compiled-code`;
      axios.post(url, code, {
        headers: {
          authorization: `bearer ${localStorage.getItem("CodersStackBox")}`,
        },
      })
        .then((res) => {
          console.log(res)
          
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
  
    function Save () {
      handleSubmit()
    }

    const { SaveProjectModal, setShowSaveProjectModal } = useSaveProjectModal();


    /* -------------------- */


    return (
        <>


<Helmet>
        <meta charSet="utf-8" />
        <title>CodersStackBox - EditorPage</title>
      </Helmet>

      <>
        <nav className="sticky top-0 z-[3] w-full flex py-3 justify-between items-center navbar">
          <>
            <SaveProjectModal />
            <LogInModal />
            <Link to="/" className=" items-center flex mr-4">
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

          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <label>
              <motion.button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={Save}
                {...FADE_IN_ANIMATION_SETTINGS}
              >
                Save
              </motion.button>
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

        <Resizable direction="verticle">
            <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Resizable
                direction="horizontal"
                >
                    <CodeEditor

                        initialValue={'const a = 1;'}
                        onChange={(value) => {
                            setInput(value);
                        }}
                    />
                </Resizable>

                <Preview code={code} err={err} />
            </div>
        </Resizable>
        {err && <div className='preview-error bg-white'>{err}</div>}
        </>
    )

}

export default CodeCell