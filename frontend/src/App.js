import React from 'react';
import { Route, Switch } from 'react-router';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ RegisterPage } />
    </Switch>
  );
}

export default App;
