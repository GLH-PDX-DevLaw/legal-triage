import React from 'react';
import PropTypes from 'prop-types';
import useLawArea from '../../hooks/useLawArea';
import { useHistory } from 'react-router-dom';

const LawAreaButton = ({ area }) => {
  const history = useHistory();
  const { setQuestionnaire } = useLawArea();

  const handleSetQuestionnaire = ({ target }) => {
    setQuestionnaire(target.value);
    history.push(`/questionnaire/${area.areaParam}`);
  };

  return (
    <>
      <button onClick={handleSetQuestionnaire}>
        <img src={area.icon} /> 
        <p>{area.label}</p>
      </button>
    </>
  );
};

LawAreaButton.propTypes = {
  area: PropTypes.object.isRequired
};

export default LawAreaButton;
