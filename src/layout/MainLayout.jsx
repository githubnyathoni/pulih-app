import React from 'react';
import PropTypes from 'prop-types';

function MainLayout({ children }) {
  return (
    <div className="w-full pt-16">
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
