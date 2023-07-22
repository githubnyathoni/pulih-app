import React from 'react';
import PropTypes from 'prop-types';

function MainLayout({ children }) {
  return (
    <div className="w-full">
      {/* Header */}
      {children}
      {/* Footer */}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
