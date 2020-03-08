import React, { createContext, useContext, useState } from 'react';

const lawAreaContext = createContext();

export const LawAreaProvider = ({ children }) => {
  const [questionnaire, setQuestionnaire] = useState(null);
  const [, setAnswers] = useState({});

  //run every single time that a user selects an answer
  const updateAnswers = (newAnswer, answersState) => {
    setAnswers({ ...answersState, newAnswer });
  };

  return (
    <lawAreaContext.Provider value={{ questionnaire, setQuestionnaire, updateAnswers }} >
      {children}
    </lawAreaContext.Provider>
  );
};

export const useQuestionnaire = () => {
  const { questionnaire } = useContext(lawAreaContext);
  return { questionnaire };
};

export const useSetQuestionnaire = () => {
  const { setQuestionnaire } = useContext(lawAreaContext);
  return { setQuestionnaire };
};
