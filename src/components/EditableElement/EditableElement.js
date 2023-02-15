import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const EditableElement = ({children}) => {

    const [editableMode, setEditableMode] = useState(false);
    const [editionValue, seteditionValue] = useState("");

    console.log(editionValue);

    return (
        <div
        className={`text-2xl flex gap-x-5`}>
        <h4  contentEditable={editableMode ? true: false} onBlur={ t => seteditionValue(t.currentTarget.innerHTML)}  >{children}</h4>
        <FaPencilAlt className="text-2xl hover:cursor-pointer checked:text-3xl hover:text-green-400" onClick={() => setEditableMode(true)} ></FaPencilAlt>
      </div>
    );
};

export default EditableElement;