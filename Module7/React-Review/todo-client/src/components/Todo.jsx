import React from "react";

const Todo = (props) => {
  const { task, done, updateTodo, deleteTodo } = props;

  const classStatus = done ? "completed" : "";

  const handleUpdate = () => {
    console.log("updated");
    updateTodo();
  };

  const handleDelete = () => {
    console.log("deleted");
    deleteTodo();
  };

  return (
    <div className="todo">
      <h2 className={classStatus}>{task}</h2>
      <button onClick={handleUpdate}>{done ? "finished" : "not done"}</button>
      <button onClick={handleDelete} className="delete">
        delete
      </button>
    </div>
  );
};

export default Todo;
