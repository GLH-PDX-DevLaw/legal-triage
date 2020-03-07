import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({
  
  name,
  label,
  checked,
  onChange,
  value
  
}) => {
  return (
    <>
      <div className={styles.Checkbox}>
        <input
          type='checkbox'
          id={value}
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={value}>{label}</label>
      </div>
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};
export default Checkbox;
