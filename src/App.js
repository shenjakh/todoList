import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todoIdCounter, setTodoIdCounter] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const addNewTodo = () => {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        text: inputValue,
        isChecked: false,
        isDeleted: false,
        id: todoIdCounter,
      },
    ]);
    setTodoIdCounter(todoIdCounter + 1);
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, isDeleted: true } : todo
      )
    );
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  const selectAllTodos = () => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => ({ ...todo, isChecked: true }))
    );
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  const deleteCheckedTodos = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.isChecked));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todos</h2>
        <Box
          sx={{
            maxWidth: 400,
            width: '100%',
          }}
        >
          <Stack spacing={2} direction="row">
            <TextField
              fullWidth
              label="What needs to be done?"
              variant="standard"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  addNewTodo();
                  ev.preventDefault();
                }
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'white' },
                disableUnderline: true,
              }}
              style={{ color: 'white' }}
            />
            <Button
              variant="outlined"
              onClick={addNewTodo}
              style={{ color: 'white', borderColor: 'white' }}
            >
              Add
            </Button>
          </Stack>
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          <Stack spacing={2} direction="row" mt={2}>
            <Button
              variant="outlined"
              size="small"
              onClick={selectAllTodos}
              style={{ color: 'white', borderColor: 'white' }}
            >
              Check All
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={deleteAllTodos}
              style={{ color: 'white', borderColor: 'white' }}
            >
              Delete All
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={deleteCheckedTodos}
              style={{ color: 'white', borderColor: 'white' }}
            >
              Delete Checked
            </Button>
          </Stack>
        </Box>
      </header>
    </div>
  );
}

export default App