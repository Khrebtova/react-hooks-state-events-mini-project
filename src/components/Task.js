import React from "react";

function Task({category, text, handleDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" id = {text} onClick={(e) => handleDelete(e)}>X</button>
    </div>
  );
}

export default Task;
