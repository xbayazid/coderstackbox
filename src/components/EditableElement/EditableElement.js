import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const EditableElement = ({children}) => {

    const [editableMode, setEditableMode] = useState(false);
    const [editionValue, seteditionValue] = useState("");

    if(editableMode) {
        setEditableMode(`contentEditable`)
    }
    
    return (
        <div
        className={`text-2xl flex gap-x-5`}>
        
        <h4 editableMode>{children}</h4>
        <FaPencilAlt className="text-2xl" onClick={() => setEditableMode(true)} ></FaPencilAlt>
      </div>
    );
};

export default EditableElement;