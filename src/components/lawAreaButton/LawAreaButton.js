import React from 'react';
import PropTypes from 'prop-types';
import styles from './LawAreaButton.css';
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
      <div className={styles.lawButtonContainer}>
        <button
          className={styles.mainLawButton}
          onClick={handleSetQuestionnaire}
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
