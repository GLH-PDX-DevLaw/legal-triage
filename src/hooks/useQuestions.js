import { useState, useEffect } from "react";
import { getQuestionsArray } from "../utils/getQuestionsArray";
import { useQuestionnaire, useAnswers } from "./context";
import dvQuestions from "../utils/dvQuestions.js";

const useQuestions = () => {
  const { questionnaire } = useQuestionnaire();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [followUpIndex, setFollowUpIndex] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const { answers } = useAnswers();
  console.log({ answers });

  const questionsArray = getQuestionsArray(questionnaire);
  const question4FollowUps = questionnaire.questions.question4FollowUps;
  console.log({ question4FollowUps });
  const [questionToUse, setQuestionToUse] = useState(
    questionsArray[currentQuestionIndex]
  );

  //Only usable with dvQuestions now due to consitional logic
  const handleChangeQuestion = (value, currentIndex) => {
    if (value === "next") {
      //TO DO: only want to show next question if the current question has an answer selected
      //TO DO: logic for redirecting to follow ups
      if (questionsArray[currentIndex].hasFollowUp) {
        console.log(answers);
        if (
          questionsArray[currentIndex].name === "q4" &&
          answers[questionsArray[currentIndex].name] === "Yes"
        ) {
          setQuestionToUse(question4FollowUps[followUpIndex]);
        } else {
          setCurrentQuestionIndex(currentIndex + 1);
        } 
      } 
        else {
          setCurrentQuestionIndex(currentIndex + 1);
        }
    }
    if (value === "previous" && currentIndex !== 0) {
      setCurrentQuestionIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    setQuestionToUse(questionsArray[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  return {
    currentQuestionIndex,
    questionToUse,
    setHasAnswered,
    hasAnswered,
    handleChangeQuestion,
    questionsArray
  };
};

export default useQuestions;
