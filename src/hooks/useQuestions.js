import { useState, useEffect } from 'react';
import { getQuestionsArray } from '../utils/getQuestionsArray';
import { useQuestionnaire } from './context';

const useQuestions = () => {
  const { questionnaire } = useQuestionnaire();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  console.log({ questionnaire });
  
  const questionsArray = getQuestionsArray(questionnaire);
  const [questionToUse, setQuestionToUse] = useState(questionsArray[currentQuestionIndex]);

  const handleChangeQuestion = (value, currentIndex) => {
    if(value === 'next') {
      //TO DO: only want to show next question if the current question has an answer selected
      //TO DO: logic for redirecting to follow ups 
      setCurrentQuestionIndex(currentIndex + 1);
    }
    if(value === 'previous' && currentIndex !== 0) {
      setCurrentQuestionIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setQuestionToUse(questionsArray[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  return { currentQuestionIndex, questionToUse, setHasAnswered, hasAnswered, handleChangeQuestion, questionsArray };
};

export default useQuestions;
