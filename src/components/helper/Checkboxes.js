import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

const Checkboxes = ({ checkboxes, name, onChange, checked }) => {
  const checkboxElements = checkboxes.map(({ label, value }) => (
    <Checkbox
      key={value}
      label={label}
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  ));

  return <>{checkboxElements}</>;
};

Checkboxes.propTypes = {
  checkboxes: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default Checkboxes;