import React from 'react';
import PropTypes from 'prop-types';

function ServiceCard({ source, text, alt }) {
  return (
    <div className="flex flex-col items-center">
      <img src={source} alt={alt} width="80%" />
      <span className="text-secondary mt-2">{ text }</span>
    </div>
  );
}

ServiceCard.propTypes = {
  source: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ServiceCard;
