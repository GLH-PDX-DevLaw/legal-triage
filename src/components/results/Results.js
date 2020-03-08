import React from 'react';
import { Link } from 'react-router-dom';

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
    <h3 key='resourceP'>
      Here is a list of other resources you may find useful:
    </h3>

    <br />

    <h4>Information about getting legal aid</h4>
    <ul>
      <li>
        <a href=' https://lasoregon.org/'>Legal Aid Services of Oregon</a>
      </li>
    </ul>

    <br />

    <h4>If you are in need of medical services</h4>
    <ul>
      <li>
        <a href='https://www.oregon.gov/oha/HSD/AMH/Pages/Addictions.aspx'>Oregon Health Authority</a>
      </li>
    </ul>

    <br />

    <h4>If you are in need of counseling</h4>
    <ul>
      <li>
        <a href='https://www.oregon.gov/oha/HSD/AMH/Pages/Addictions.aspx'>National Domestic Violence Hotline</a>
      </li>
    </ul>
    
    <br />

    <h4>If you are in need of safety or sheltering services</h4>
    <ul key='resourceList'>
      <li key='services'>
        <a href='https://www.oregon.gov/dhs/abuse/domestic/pages/index.aspx'>Oregon Domestic Violence Victim Services</a>
      </li>
      <li key='against'>
        <a href='https://www.ocadsv.org/find-help'>Oregon Coalition Against Domestic Violence</a>
      </li>
      <li>
        <a href='https://victimsofcrime.org/'>Stalking Resource Center</a>
      </li>
    </ul>

    <br />

    <h4>Additional Domestic Violence Resources</h4>
    <ul>
      <li key='call'>
        <a href='https://calltosafety.org/'>Call to Safety</a>
      </li>
      <li key='battered'>
        <a href='https://peaceathome.com/'>Battered Persons Advocacy</a>
      </li>
    </ul>

    <br />
  </section>
);

const selfRepresentation = (
  <section>
    <h3>If you would like to represent yourself: </h3>
    
    <br />

    <h4>What does the legal process look like?</h4>
    <ul>
      <li>
        <a href ='https://aldf.org/article/the-legal-process-in-the-united-states-a-criminal-case/'>The criminal process</a>
      </li>
      <li>
        <a href='https://aldf.org/article/the-legal-process-in-the-united-states-a-civil-case/'>The civil process</a>
      </li>
    </ul>

    <br />

    <h4>I want to represent myself</h4>
    <ul>
      <li>
        <a href='https://www.doj.state.or.us/crime-victims/victims-resources/other-resources/county-victim-assistance-programs/'>Victim&apos;s assitance programs</a>
      </li>
      <li>
        <a href='https://www.law.cornell.edu/wex/pro_se'>Information on Pro Se</a>
      </li>
      <li>
        <a href='https://www.rocketlawyer.com/article/what-is-pro-se-legal-representation.rl'>More infomation on Pro Se representation</a>
      </li>
    </ul>
    <br />
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

const nextSteps = (
  <section>
    <p>
      There are a few options on how you can proceed.
    </p>
    <br />
    <p>
      You may represent yourself in court. This is called Pro Se representation. If you do not qualify for legal aid, and you are unable to afford a lawyer, this is your best option. To get an idea of whether or not you qualify for aid, take a look at this resource. 
      
      For information on representing yourself, please take a look at our resources.
    </p>
    <br />
    <p>
      If you do not want to represent yourself, but are unable to afford a lawyer, you may qualify for legal aid based on your income. If you would like to, you can provide us with a little more personal information about yourself, and we will try to match you with a lawyer in your area. This is called Pro Bono representation.
    </p>
    <br />
    <p>
      If you can afford a lawyer, we can make some recommendations for you. You will be able to select a lawyer, and we will pass on the information you provided to them. This should speed up the amount of time it takes a lawyer to become familiar with your case.
    </p>
    <br />
  </section>
);

export default function Results() {
  //replace dummyAnswers with hook or props
  const answers = dummyAnswers;

  const score = calculateScore(answers);
  const toDisplay = [];

  if(answers.q2.includes('emergency')) {
    toDisplay.push(
      <p key='emergency'>
        You indicated that you are in immediate danger. Call 911 as soon as possible. Get to a safe place until authorities arrive.
      </p>
    );
  }

  // toDisplay.push(
  //   <p key='score'>
  //     Your score is {score}
  //   </p>
  // );

  return (
    <>
      <h2>Summary</h2>
      <div>
        {toDisplay}
      </div>
      <br />
      <div>
        <p key='likelihood'>
          It is <b>{getLikelihood(score)} </b>that you have a claim.
        </p>
      </div>
      <br />
      <div>
        {nextSteps}
      </div>
      <div>
        {otherResources}
      </div>
      <div>
        {selfRepresentation}
      </div>
      <Link to='/'><button>Return Home</button></Link>
    </>
  );
}
