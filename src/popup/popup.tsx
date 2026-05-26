import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';

interface PopupProps {
  delay?: number; // Delay in milliseconds before showing
}

export const Popup: React.FC<PopupProps> = ({ delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  
  // Create a reference to the main modal box container
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  // Closes the popup if a click event fires on the overlay but outside the modal box boundary
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
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
    width: '85%',
    maxWidth: '720px', // REDUCED: Scaled down from 850px for a more balanced and compact desktop look
    borderRadius: '20px',
    overflow: 'hidden',
    display: 'flex',
    position: 'relative',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    animation: 'modalSlideUp 0.4s ease-out',
  };

  const leftContentStyle: React.CSSProperties = {
    flex: '0.9', // REDUCED: Made the image profile column slightly narrower to scale down overall footprint
    minHeight: '400px', // REDUCED: Scaled down from 450px height
    display: 'none', 
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#fafafa'
  };

  const rightContentStyle: React.CSSProperties = {
    flex: 1.2,
    padding: '35px 30px', // REDUCED: Adjusted internal padding layout
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <div style={overlayStyle} onClick={handleOverlayClick}>
      <div style={modalStyle} ref={modalRef}>
        {/* Close Button */}
        <button 
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: '#eee',
            border: 'none',
            borderRadius: '50%',
            width: '28px',
            height: '28px',
            cursor: 'pointer',
            fontSize: '16px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ×
        </button>

        {/* Left Side: Performance Optimized Native Image Element */}
        <div style={leftContentStyle} className="popup-left-image-wrapper">
          <img 
            src="/popup.png" 
            alt="Johar Foundation Campaign" 
            fetchPriority="high" 
            loading="eager"      
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
        </div>

        {/* Right Side: Content */}
        <div style={rightContentStyle}>
          <img src="/logo.webp" alt="Logo" style={{ height: '35px', width: 'auto', marginBottom: '15px', alignSelf: 'flex-start' }} />
          
          <div style={{ borderLeft: `3px solid ${theme.colors.primary}`, paddingLeft: '12px', marginBottom: '20px' }}>
            <h2 style={{ color: theme.colors.primary, margin: 0, fontSize: '1.25rem' }}>सेवा परमो धर्म:</h2>
            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.85rem', margin: '3px 0 0' }}>
              "Service is the highest duty." — The mission of Johar Foundation
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', color: theme.colors.secondary, marginBottom: '12px', lineHeight: '1.2' }}>
            Together, we build a brighter future.
          </h3>

          <p style={{ color: theme.colors.text, fontSize: '0.88rem', lineHeight: '1.5', marginBottom: '25px' }}>
            Over <strong>5 Thousand Smiles</strong> and counting in 2026. Your small contribution helps us reach the underserved communities of Jharkhand and beyond.
          </p>

          <Link to="/donate" onClick={handleClose} style={{ textDecoration: 'none', display: 'block', width: '100%' }}>
            <button style={{
              backgroundColor: theme.colors.primary,
              color: 'white',
              padding: '14px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: 'bold',
              zIndex: 1,
              width: '100%',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(166, 38, 57, 0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.01)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Be the Change — Donate Now
            </button>
          </Link>

          <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input 
              type="checkbox" 
              id="dontShow" 
              checked={dontShowAgain} 
              onChange={(e) => setDontShowAgain(e.target.checked)} 
            />
            <label htmlFor="dontShow" style={{ fontSize: '0.78rem', color: '#999', cursor: 'pointer' }}>
              Don't show again
            </label>
          </div>
        </div>
      </div>
      
      {/* Animation Styles & Clean Media Queries */}
      <style>
        {`
          @keyframes modalSlideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (min-width: 769px) {
            .popup-left-image-wrapper {
              display: block !important;
            }
          }
        `}
      </style>
    </div>
  );
};