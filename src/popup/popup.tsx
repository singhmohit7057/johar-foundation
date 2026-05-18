import React, { useState, useEffect } from 'react';
import { theme } from '../theme/styles';

interface PopupProps {
  delay?: number; // Delay in milliseconds before showing
}

export const Popup: React.FC<PopupProps> = ({ delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed the popup
    const isDismissed = localStorage.getItem('johar_popup_dismissed');
    
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('johar_popup_dismissed', 'true');
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2000,
    backdropFilter: 'blur(4px)',
  };

  const modalStyle: React.CSSProperties = {
    backgroundColor: theme.colors.white,
    width: '90%',
    maxWidth: '850px',
    borderRadius: '20px',
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    animation: 'modalSlideUp 0.4s ease-out',
  };

  const leftContentStyle: React.CSSProperties = {
    flex: 1,
    backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000')`, // Placeholder for your children image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '450px',
    display: 'none', // Hidden on mobile
  };

  // Media query simulation for left content
  if (window.innerWidth > 768) {
    leftContentStyle.display = 'block';
  }

  const rightContentStyle: React.CSSProperties = {
    flex: 1.2,
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Close Button */}
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#eee',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            fontSize: '18px',
            zIndex: 10
          }}
        >
          ×
        </button>

        {/* Left Side: Image */}
        <div style={leftContentStyle} />

        {/* Right Side: Content */}
        <div style={rightContentStyle}>
          <img src="/logo.webp" alt="Logo" style={{ height: '40px', width: 'auto', marginBottom: '20px', alignSelf: 'flex-start' }} />
          
          <div style={{ borderLeft: `4px solid ${theme.colors.primary}`, paddingLeft: '15px', marginBottom: '25px' }}>
            <h2 style={{ color: theme.colors.primary, margin: 0, fontSize: '1.4rem' }}>सेवा परमो धर्म:</h2>
            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem', margin: '5px 0 0' }}>
              "Service is the highest duty." — The mission of Johar Foundation
            </p>
          </div>

          <h3 style={{ fontSize: '1.8rem', color: theme.colors.secondary, marginBottom: '15px', lineHeight: '1.2' }}>
            Together, we build a brighter future.
          </h3>

          <p style={{ color: theme.colors.text, fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '30px' }}>
            Over <strong>23 Lakh Smiles</strong> and counting in 2025-26. Your small contribution helps us reach the underserved communities of Jharkhand and beyond.
          </p>

          <button style={{
            backgroundColor: theme.colors.primary,
            color: 'white',
            padding: '16px',
            borderRadius: '10px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(166, 38, 57, 0.3)',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Be the Change — Donate Now and Save Tax
          </button>

          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input 
              type="checkbox" 
              id="dontShow" 
              checked={dontShowAgain} 
              onChange={(e) => setDontShowAgain(e.target.checked)} 
            />
            <label htmlFor="dontShow" style={{ fontSize: '0.8rem', color: '#999', cursor: 'pointer' }}>
              Don't show again
            </label>
          </div>
        </div>
      </div>
      
      {/* Animation Styles */}
      <style>
        {`
          @keyframes modalSlideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};