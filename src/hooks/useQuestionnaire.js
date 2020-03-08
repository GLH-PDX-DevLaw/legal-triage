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
  

  const handleNext = currentIndex => {
    //TO DO: only want to show next question if the current question has an answer selected
    setCurrentQuestionIndex(currentIndex + 1);
  };

  const handlePrevious = currentIndex => {
    setCurrentQuestionIndex(currentIndex - 1);
  };

  useEffect(() => {
    setQuestionToUse(questionsArray[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  return { currentQuestionIndex, questionnaire, handleNext, handlePrevious, questionToUse, setHasAnswered, hasAnswered };
};

export default useQuestions;
