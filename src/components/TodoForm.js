import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      setError(true);
      return;
    }
    setError(false);
    addTodo(value);
    setValue('');
  };

  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${error === false ? 'todo-input' : 'todo-input-error'}`}
          placeholder="What is the task today?"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          type="submit"
          className={`${error === false ? 'todo-btn' : 'todo-btn-error'}`}
        >
          Add Task
        </button>
        {error ? (
          <div className="error-msg">Task cannot be empty, try again.</div>
        ) : (
          <></>
        )}
      </form>
    </>
  );
};
