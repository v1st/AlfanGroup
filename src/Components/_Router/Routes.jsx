import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';

function AppRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={Home} />
    </Switch>
  );
}

export default AppRouter;