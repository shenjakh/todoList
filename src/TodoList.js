import React from "react";
import List from "@mui/material/List";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <List>
      {todos.map((todo) =>
        !todo.isDeleted ? (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ) : null
      )}
    </List>
  );
};

export default TodoList;
