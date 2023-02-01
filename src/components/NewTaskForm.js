import React, { useState } from "react";



function NewTaskForm({onTaskFormSubmit,categories}) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("code");

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({text,category})
  }
  function handleChange(event) {
  setText(event.target.value)
  } 
  function handleCategoryChange(event) {
  setCategory(event.target.value)
  }
  const newCategories = categories.slice(1);

  return (
    
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        
        <select name="category" value={category} onChange={handleCategoryChange}>
          {/* render <option> elements for each category here */}
          {newCategories.map((category, index) => {
            return <option key={index}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
