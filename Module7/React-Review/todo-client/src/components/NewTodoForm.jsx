import { useState } from "react";

const NewTodoForm = (props) => {
  const { addTodo } = props;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value).then(() => {
      setValue("");
    });
  };

  return (
    <form class="todo-form" onSubmit={handleSubmit}>
      <label>Got something new todo?</label>
      <input
        className="todo"
        value={value}
        placeholder="write it here"
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
