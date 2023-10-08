import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleTask, deleteTask, addTask } from "../redux/actions";

const TaskList = ({ tasks, toggleTask, deleteTask, addTask }) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim() !== "") {
      addTask({ id: Date.now(), text: newTaskText, completed: false });
      setNewTaskText("");
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  toggleTask,
  deleteTask,
  addTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
