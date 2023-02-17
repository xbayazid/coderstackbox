import "./text-editor.css";
import React, { useEffect, useRef } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import Logo from "../../../../components/Logo";

const TextEditor = () => {
  const ref = useRef(null);
  // const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("# Hi 👋, I'm Tamjid Mostafa <br/> MERN Stack Developer from Bangladesh");

 /*  useEffect(() => {
    const listener = (event) => {
      if (ref.current && event.target && ref.current.contains(event.target)) {
        console.log("element clicked on is inside editor");
        return;
      }
      console.log("element clicked is not inside editor");
      setEditing(false);
    };
    document.addEventListener("click", listener, { capture: true });
    return () => {
      document.removeEventListener("click", listener, { capture: true });
    };
  }, []); */

  const copied = () => {
    navigator.clipboard.writeText(value);
    alert("Copied the text: " + value);
  };

  /*   function myFunction() {
    
  }
 */
    return (
      <div className="text-editor" >
        <div className="flex justify-between items-center py-5">
          <Logo />
          <button
            className="button button-format bg-orange-500 px-3 py-2 text-white rounded-lg mr-4"
            onClick={copied}
          >
            Copy
          </button>
        </div>
        <MDEditor value={value} onChange={(v) => setValue(v || "")} />
      </div>
    );
  }

/*   return (
    <div className="text-editor" onClick={() => setEditing(true)}>
      <button
        className="button button-format bg-orange-500 px-3 py-2 text-white rounded-lg"
        onClick={copied}
      >
        Copy
      </button>
      <div className="card-content">
        <MDEditor.Markdown source={value} />
      </div>
    </div>
  );
}; */

export default TextEditor;
