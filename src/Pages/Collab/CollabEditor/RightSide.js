// import React from 'react';
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';
// import { useSaveProjectModal } from '../../../../components/Modals/SaveProjectModal';
// import { AuthContext } from '../../../../context/AuthProvider';
import bundle from '../../../Pages/CodeEditor/OnlineIDE/bundler';
import CodeEditor from '../../../Pages/CodeEditor/OnlineIDE/component/code-editor';
import Preview from '../../../Pages/CodeEditor/OnlineIDE/component/Preview';
import Resizable from '../../../Pages/CodeEditor/OnlineIDE/component/resizable';
import axios from 'axios';
import { useSaveProjectModal } from '../../../components/Modals/SaveProjectModal';
import { AuthContext } from '../../../context/AuthProvider';

const RightSide = () => {
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
  
    
    const handleSubmit = () => {
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
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
  
    function Save () {
      setShowSaveProjectModal(true);
      handleSubmit()
    }
  const { SaveProjectModal, setShowSaveProjectModal } = useSaveProjectModal();

    return (
        <div>
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
        </div>
    );
};

export default RightSide;