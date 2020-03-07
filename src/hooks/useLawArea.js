import React, { useState } from 'react';

const useLawArea = () => {
  const [questionnaire, setQuestionnaire] = useState({});



  return { questionnaire, setQuestionnaire };

};

export default useLawArea; 
