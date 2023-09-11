import React from 'react';
import PropTypes from 'prop-types';

function ServiceCard({ source, text, alt }) {
  return (
    <div className="flex flex-col items-center">
      <img src={source} alt={alt} className="w-1/2 lg:w-9/12" />
      <span className="text-secondary font-medium mt-2">{ text }</span>
    </div>
  );
}

ServiceCard.propTypes = {
  source: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ServiceCard;
