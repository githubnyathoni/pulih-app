import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} flex items-center gap-2 bg-primary py-1.5 px-4 text-white rounded-full hover:shadow-lg transition-shadow duration-700`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
