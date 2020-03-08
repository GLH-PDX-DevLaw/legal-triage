import React from 'react';
import PropTypes from 'prop-types';

import styles from './LawAreaButton.css';
import useLawArea from '../../hooks/useLawArea';


import { useHistory } from 'react-router-dom';
import { useSetQuestionnaire } from '../../hooks/context';


const LawAreaButton = ({ area }) => {
  const history = useHistory();
  const { setQuestionnaire } = useSetQuestionnaire()
  return (
    <>

      <div className={styles.lawButtonContainer}>
        <button
          className={styles.mainLawButton}
          onClick={() => {
        setQuestionnaire(area.label)
        history.push(`/questionnaire/${area.areaParam}`);
      }}
        >
          <img src={area.icon} className={styles.lawImage} />
          <p className={styles.lawArea}>{area.label}</p>
        </button>
      </div>

    </>
  );
};

LawAreaButton.propTypes = {
  area: PropTypes.object.isRequired
};

export default LawAreaButton;
