// Importing react features
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
// Importing pages to use for routing
import Layout from './Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
// Getting div element to insert all of the components into
const app = document.getElementById('app');
// Using react-router to set up single page application
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
