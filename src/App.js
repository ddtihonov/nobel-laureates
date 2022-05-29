import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, ListPage } from './pages';
import {CountryPage} from '../src/pages/country';
import {PersonPage} from '../src/pages/person';
import {LoginPage} from '../src/pages/login';
import {NotFound404} from '../src/pages/not-found';
import { ProvideAuth } from './services/auth';


export default function App() {
  
  return (
    <ProvideAuth>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/list" exact={true}>
          <ListPage />
        </Route>
        <Route path={`/list/:country`} exact={true}>
          <CountryPage />
        </Route>
        <Route path={`/list/:country/:personId`} exact={true}>
          <PersonPage />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
    </Router>
  </ProvideAuth>
  );
}