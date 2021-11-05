import React from 'react';
import TasksContext from './TasksContext';

function TasksProvider({ children }) {

  return (
    <TasksContext.Provider
      value={ {} }
    >
      { children }
    </TasksContext.Provider>
  );
}

export default TasksProvider;
