import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSetQuestionnaire } from '../../hooks/context';


const LawAreaButton = ({ area }) => {
  const history = useHistory();
  const { setQuestionnaire } = useSetQuestionnaire()
  return (
    <>
      <button onClick={() => {
        setQuestionnaire(area.label)
        history.push(`/questionnaire/${area.areaParam}`);
      }}>
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
