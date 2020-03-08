import React, { useState, useEffect } from 'react';
import { getQuestionsArray } from '../utils/getQuestionsArray';
import { useQuestionnaire } from './context';

const useQuestions = () => {
  const { questionnaire } = useQuestionnaire();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionToUse, setQuestionToUse] = useState(questionsArray[currentQuestionIndex]);
  const [hasAnswered, setHasAnswered] = useState(false);
  console.log({ questionnaire });

  const questionsArray = getQuestionsArray(questionnaire);
  

  useEffect(() => {
    setQuestionToUse(questionsArray[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  return { currentQuestionIndex, questionnaire, handleNext, handlePrevious, questionToUse, setHasAnswered, hasAnswered };
};

export default useQuestions;
