import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function MainLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return (
    <div className="w-full scroll-smooth">
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
