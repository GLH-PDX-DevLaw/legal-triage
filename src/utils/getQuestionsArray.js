export const getQuestionsArray = questionnaireObj => {
  const arr = questionnaireObj.questions.questionList;
  return arr ? arr : 'no questions array';
};
