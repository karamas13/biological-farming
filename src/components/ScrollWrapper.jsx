// src/components/ScrollWrapper.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Scroll when the route changes

  return children;
};

export default ScrollWrapper;
