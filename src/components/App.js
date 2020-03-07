import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './header/Header';
import Home from './Home/Home.js';
import Questionnaire from './questionnaire/Questionnaire.js';
import Results from './results/Results.js';


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/questionnaire' component={Questionnaire} />
          <Route path='/results' component={Results} />
        </Switch>
      </Router>
    </>
  );
}
