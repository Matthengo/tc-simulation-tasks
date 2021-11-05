import React from 'react';
import { Route, Switch } from 'react-router';
import TasksProvider from './context/TasksProvider';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <TasksProvider>
      <Switch>
        <Route exact path="/" component={ RegisterPage } />
        <Route exact path="/login" component={ LoginPage } />
      </Switch>
    </TasksProvider>
  );
}

export default App;
