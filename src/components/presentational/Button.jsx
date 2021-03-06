import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  id, className, onClick, disabled, title, ref, value
}) => (
  <button
    id={id}
    className={className}
    onClick={onClick}
    type="button"
    disabled={disabled}
    title={title}
    ref={ref}
  >
    {value}
  </button>
);

ButtonComponent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  ref: PropTypes.objectOf(PropTypes.any),
};

ButtonComponent.defaultProps = {
  id: "",
  className: "",
  title: "",
  ref: React.createRef(),
};

export default ButtonComponent;
