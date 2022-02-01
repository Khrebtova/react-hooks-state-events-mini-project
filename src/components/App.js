import React , { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasksarray, setTasksarray] = useState(TASKS)
  const [selectedcategory, setSelectedCategory] = useState("All")
  const [newTask, setNewTask] = useState({ text : "", category: "Code"})
  
  const tasksToDisplay = tasksarray.filter((task)=> {
    if(selectedcategory === "All"){
      return true
    } else{
      return task.category === selectedcategory
    }
  })

  function handleDelete (e){
    // e.target.parentElement.remove()
    const updatedArray = tasksarray.filter((task) => task.text !== e.target.id)
    setTasksarray(updatedArray)
  }

  function handleCategoryClick(e){
    e.target.className = "selected"
    const filter = e.target.id
    setSelectedCategory(filter)
    }

  function onTaskFormSubmit(e){
    e.preventDefault()
    const updatedArray = [...tasksarray, newTask]
    setTasksarray(updatedArray)
    e.target.text.value=""
    e.target.category.value="Code"
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories ={CATEGORIES} handleCategoryClick={handleCategoryClick}/>
      <NewTaskForm newTask = {newTask} setNewTask={setNewTask} categories ={CATEGORIES} onTaskFormSubmit ={onTaskFormSubmit} />
      <TaskList tasks={tasksToDisplay} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
