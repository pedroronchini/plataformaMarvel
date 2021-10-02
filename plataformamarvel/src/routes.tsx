import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Hq from './pages/Hq';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/hq" component={Hq} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;