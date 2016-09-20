import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="login" name="login" component={Login}></Route>
      <Route path="register" name="register" component={Register}></Route>
    </Route>
  </Router>,
  app
  );
