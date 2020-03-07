import React, { useState } from 'react';
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
  const [questionnaire, setQuestionnaire] = useState({});

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <Home setQuestionnaire={setQuestionnaire} />
            )
          }} />
          <Route path='/questionnaire' component={Questionnaire} />
          <Route path='/results' component={Results} />
        </Switch>
      </Router>
    </>
  );
}
