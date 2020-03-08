import React, { createContext, useContext, useState } from 'react';


const lawAreaContext = createContext();

export const LawAreaProvider = ({ children}) => {

  const [questionnaire, setQuestionnaire] = useState('');

 


  return (
    <lawAreaContext.Provider value={{ questionnaire, setQuestionnaire }} >
      {children}
    </lawAreaContext.Provider>
  )
}

export const useQuestionnaire = () => {
  const { questionnaire } = useContext(lawAreaContext);
  return { questionnaire };
};

export const useSetQuestionnaire = () => {
  const { setQuestionnaire } = useContext(lawAreaContext);
  return { setQuestionnaire };
};