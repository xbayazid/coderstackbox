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
    const [input, setInput] = useState(`import 'bootstrap@4.3.1/dist/css/bootstrap.min.css';
    import 'react/umd/react.production.min.js';
    
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    const App = () => {
      return (
        <div
          class="card"
          style={{
            width: '18rem',
          }}
        >
          <img
            class="card-img-top"
            src="https://avatars.githubusercontent.com/u/106759894?v=4"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      );
    };
    
    ReactDOM.render(<App />, document.getElementById('root'));`);
    
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
        setShowLogInModal(true);
        return;
      } if (!projectCode) {
        toast("🥺 Hey! You have blank space! 🥺")
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

                        initialValue={input}
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