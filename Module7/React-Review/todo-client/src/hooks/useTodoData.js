import axios from "axios";
import { useEffect, useState } from "react";

const useTodoData = () => {
  useEffect(() => {
    axios.get(`/api/todos`).then((res) => {
      const appData = {
        data: res.data,
        loading: false,
        error: false,
      };
      setTodos(appData);
    });
  }, []);

  const [todos, setTodos] = useState({
    data: [],
    loading: true,
    error: false,
  });

  const updateTodo = (id) => {
    return axios.patch(`/api/todos/${id}`).then((res) => {
      const index = todos.data.findIndex((todo) => todo.id === id);
      const selectedTodo = todos.data.find((todo) => todo.id === id);
      const updatedTodo = { ...selectedTodo, done: !selectedTodo.done };
      const updatedTodos = [
        ...todos.data.slice(0, index),
        updatedTodo,
        ...todos.data.slice(index + 1),
      ];
      setTodos((prev) => ({ ...prev, data: updatedTodos }));
    });
  };

  const deleteTodo = (id) => {
    return axios.delete(`/api/todos/${id}`).then((res) => {
      const index = todos.data.findIndex((todo) => todo.id === id);
      const updatedTodos = [
        ...todos.data.slice(0, index),
        ...todos.data.slice(index + 1),
      ];
      setTodos((prev) => ({ ...prev, data: updatedTodos }));
    });
  };

  const addTodo = (todoValue) => {
    return axios.post(`/api/todos`, { task: todoValue }).then((res) => {
      console.log(res.data);
      setTodos((prev) => ({ ...prev, data: [...prev.data, res.data] }));
    });
  };
  return {todos, addTodo, updateTodo, deleteTodo};
};

export default useTodoData;
