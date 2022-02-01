import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, newTask, setNewTask}) {

  const optionslist= categories.filter((category)=> category !== "All").map((category) => <option key ={category} value = {category}>{category}</option>)
  
  function handleOnChange(e){
    const key = e.target.name
    const value = e.target.value
    setNewTask({...newTask, [key]: value})
  }

  
  return (
    <form className="new-task-form" onSubmit={(e)=> onTaskFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange = {handleOnChange} />
      </label>
      <label>
        Category
        <select name="category" onChange = {handleOnChange}>
          {optionslist}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
