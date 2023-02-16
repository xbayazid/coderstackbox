import React, { useState } from 'react';

const EditiableElm = ({props}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(props.value);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    props.onSave(value);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setValue(props.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={value} onChange={handleInputChange} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
          <span
            onClick={props.isAttributeSet ? () => props.setAttribute(props.attributeName, value) : handleEditClick}
            style={{ cursor: props.isAttributeSet ? "pointer" : "text" }}
          >
            {value}
          </span>
          {!props.isAttributeSet && <button onClick={handleEditClick}>Edit</button>}
        </>
      )}
    </div>
  );
}

export default EditiableElm;