import './App.css';
import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './header/Header';
import Home from './home/Home.js';
import Questionnaire from './questionnaire/Questionnaire.js';
import Results from './results/Results.js';

export default function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/questionnaire/:area' component={Questionnaire} />
          <Route path='/results' component={Results} />
        </Switch>
      </Router>
    </>
  );
}
