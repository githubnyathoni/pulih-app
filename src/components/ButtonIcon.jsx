import React from 'react';
import PropTypes from 'prop-types';

function ButtonIcon({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} flex items-center`}
    >
      {children}
    </button>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ButtonIcon.defaultProps = {
  onClick: () => {},
  className: '',
};

export default ButtonIcon;
