# Todo App 

## Description 
A UI display of todos that we should be able to check off when we compete a task, or remove from list completely. We should also be able to add new items to the list.

## User Stories
- As a user, I want to be able to see my todos
- As a user, I want to be able to add to my todo list
- As a user, I want to be able to check/uncheck my todo list
- As a user, I want to be able to delete a todo item

## Data Structure
- Todos: array of objects
- TodoItem: id: assigned in the backend, task: string, done: boolean-default to false

## Components
- App
    - Form(addTodo)
    - TodoList/Items(task, done, updateTodo, deleteTodo)