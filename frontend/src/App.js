import React from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ RegisterPage } />
      <Route exact path="/login" component={ LoginPage } />
    </Switch>
  );
}

export default App;
