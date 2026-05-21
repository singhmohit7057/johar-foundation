import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scrolling to fade the button in and out
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const buttonStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '30px',
    left: '30px', // Changed from right to left to anchor on the left side of any screen
    width: '56px',
    height: '56px',
    backgroundColor: '#A62639', // Johar Crimson red
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    zIndex: 9999, // Keeps it layered above all structural grids and text modules
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
    pointerEvents: isVisible ? 'all' : 'none',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 12px 24px -4px rgba(166, 38, 57, 0.45), 0 4px 12px -2px rgba(166, 38, 57, 0.2)',
  };

  return (
    <button 
      onClick={scrollUp} 
      style={buttonStyle}
      aria-label="Back to top"
      onMouseEnter={(e) => {
        if (!isVisible) return;
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 16px 32px -4px rgba(166, 38, 57, 0.55)';
      }}
      onMouseLeave={(e) => {
        if (!isVisible) return;
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 12px 24px -4px rgba(166, 38, 57, 0.45), 0 4px 12px -2px rgba(166, 38, 57, 0.2)';
      }}
    >
      <FaChevronUp />
    </button>
  );
};