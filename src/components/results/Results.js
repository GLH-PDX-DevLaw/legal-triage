import React from 'react';

const dummyAnswers = {
  q1: 'OR',
  q2: 'This is an emergency. I am at risk of immediate physical danger.',
  q3: 'Family Member',
  q4: 'No',
  q4F1: null,
  q4F2: null,
  q5: 'Previous or current abuse',
  q5F1: 'Physical abuse',
  q5F2: 'Within the last 30 days',
  q5F3: null,
  q6: 'Restraining order'
};

const otherResources = (
  <section key='resources'>
    <p key='resourceP'>
      Here is a list of other resources you may find userful:
    </p>
    <ul key='resourceList'>
      <li key='services'>
      Oregon Domestic Violence Victim Services - https://www.oregon.gov/dhs/abuse/domestic/pages/index.aspx
      </li>
      <li key='against'>
      Oregon Coalition Against Domestic Violence - https://www.ocadsv.org/find-help
      </li>
      <li key='call'>
      Call to Safety - https://calltosafety.org/
      </li>
      <li key='battered'>
      Battered Persons Advocacy - https://peaceathome.com/
      </li>
    </ul>
  </section>
);

const getLikelihood = score => {
  if(score <= .75) {
    return 'very unlikely';
  } else if(score <= 1) {
    return 'unlikely';
  } else if(score <= 1.5) {
    return 'likely';
  } else return 'very likely';
};

const calculateScore = answers => {
  let score = 0;

  if(answers.q3.includes('Family')){
    score += .75;
  } else if(answers.q3.includes('Household')) {
    score += .75;
  } else score += .5;
  
  if(answers.q5.includes('Previous')) {
    score += .50;
  } else if(answers.q5.includes('Fear')) {
    score += .5;
  } else if(answers.q5.includes('Unsure')) {
    score += .25;
  }

  if(answers.q5F1 === null){
    score += 0;
  } else if(answers.q5F1.includes('Unsure')) {
    score += .0625;
  } else score += .125;

  if(answers.q5F2 === null){
    score += 0;
  } else if(answers.q5F1.includes('longer')) {
    score += .0625;
  } else score += .125;

  if(answers.q5F3 === null) {
    score += 0;
  } else if(answers.q5F3.includes('Unsure')){
    score += .125;
  } else score += .25;

  return score;
};

export default function Results() {
  //replace dummyAnswers with hook or props
  const answers = dummyAnswers;

  const score = calculateScore(answers);
  const toDisplay = [];

  toDisplay.push(
    <p key='likelihood'>
      It is {getLikelihood(score)} that you have a claim.
    </p>
  );

  if(answers.q2.includes('emergency')) {
    toDisplay.push(
      <p key='emergency'>
        Call 911 as soon as possible. If you are in danger, get to a safe place until authorities arrive.
      </p>
    );
  }

  toDisplay.push(
    <p key='score'>
      Your score is {score}
    </p>
  );

  toDisplay.push(
    otherResources
  );

  return (
    <>
      <h1>This is the result page</h1>
      {toDisplay}
    </>
  );
}
