import React, { createContext, useContext, useState } from 'react';

const lawAreaContext = createContext();

export const LawAreaProvider = ({ children }) => {
  const [questionnaire, setQuestionnaire] = useState({});

  const handleChangeQuestion = value => {
    if(value === 'next') {
      setQuestionnaire(questionnaire + 1);
    }
    if(value === 'previous' && questionnaire !== 1) {
      setQuestionnaire(questionnaire - 1);
    }
  };

  return (
    <lawAreaContext.Provider
      value={{ questionnaire, setQuestionnaire, handleChangeQuestion }}
    >
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
