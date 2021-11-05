import React from 'react';
import { Route, Switch } from 'react-router';
import TasksProvider from './context/TasksProvider';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';

function App() {
  return (
    <TasksProvider>
      <Switch>
        <Route exact path="/" component={ RegisterPage } />
        <Route exact path="/login" component={ LoginPage } />
        <Route exact path="/tasks" component={ TasksPage } />
      </Switch>
    </TasksProvider>
  );
}

export default App;
