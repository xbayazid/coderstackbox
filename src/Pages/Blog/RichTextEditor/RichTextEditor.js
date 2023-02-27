import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.css';


const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};


const RichTextEditor = () => {

  const [value, setValue] = useState('');


  const handleSubmit = () => {
    const blog = { blog: value }

    const url = `http://localhost:5000/blog`;

    axios.post(url, blog, {
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
    <div className='container bg-white p-0 m-0 lg:h-screen w-full '>
      <div className="row h-full w-full flex justify-center items-center">
        <div className="editor relative h-full w-6/12 flex justify-center items-center">
          <ReactQuill theme="snow"
            value={value}
            onChange={setValue}
            className='editor-input h-full w-full'
            modules={modules}


          />
          <button onClick={handleSubmit} className='save absolute top-[10px] right-[10px] rounded-full text-white bg-blue-400 px-4 py-2'>Save</button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: value }} className="preview border-x-2 relative h-full w-6/12 p-2 overflow-scroll	">

        </div>
      </div>

    </div>
  );
};

export default RichTextEditor;