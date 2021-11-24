// import React from 'react'
import "./App.scss";
import Todo from "./components/Todo";
import NewTodoForm from "./components/NewTodoForm";

import useTodoData from "./hooks/useTodoData";

// const todos = [
//   { id: 1, task: "feed cat", done: false },
//   { id: 2, task: "feed dog", done: true },
//   { id: 3, task: "wash dishes", done: true },
// ];

function App() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodoData();

  const todoItems = todos.data.map((todo) => {
    return (
      <Todo
        key={todo.id}
        task={todo.task}
        done={todo.done}
        updateTodo={() => {
          updateTodo(todo.id);
        }}
        deleteTodo={() => {
          deleteTodo(todo.id);
        }}
      />
    );
  });

  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      {todoItems}
    </div>
  );
}

export default App;
