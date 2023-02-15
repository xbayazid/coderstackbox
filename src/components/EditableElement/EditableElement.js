import React, { useState } from 'react';
import { useRef } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const EditableElement = ({ onSendData, onDataRef, children}) => {

    const [editableMode, setEditableMode] = useState(false);
    const [editionValue, seteditionValue] = useState("");

    const childDataRef = useRef('');

    const handleData = () => {
      onDataRef.current = childDataRef.current;
      onSendData();
    }

    // console.log(editionValue);

    return (
        <div
        className={`text-2xl flex gap-x-5`}>
        <h4 ref={childDataRef}  contentEditable={editableMode ? true: false} onBlur={ t => { seteditionValue(t.currentTarget.innerHTML); handleData()}}  >{children}</h4>
        <FaPencilAlt className="text-2xl hover:cursor-pointer checked:text-3xl hover:text-green-400" onClick={() => setEditableMode(true)} ></FaPencilAlt>
      </div>
    );
};

export default EditableElement;


// Doc this component. you can use this component then you must be follow the code on parent component.

// const parentDataRef = useRef('');
// const handleChildData = () => {
//   console.log('Received data from child:', parentDataRef.current.innerText);
// }
