import React from "react";
import Task from "./Task";


function TaskList({ tasks, onDelete }) {
  const taskList = tasks.map((task, index) => <Task key={task.text} text={task.text}
  category={task.category} onDeleteTask={onDelete} id={index}  />)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
