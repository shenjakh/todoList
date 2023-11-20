import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem key={todo.id} disableGutters>
      <Checkbox
        checked={todo.isChecked}
        onChange={() => toggleTodo(todo.id)}
      />
      <ListItemText
        primary={
          <span
            className="listItemText"
            style={{
              textDecoration: todo.isChecked ? 'line-through' : 'none',
              color: todo.isChecked ? 'gray' : 'inherit',
            }}
          >
            {todo.text}
          </span>
        }
      />
      <ListItemSecondaryAction>
        <IconButton
          className="deleteButton"
          edge="end"
          onClick={() => deleteTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;