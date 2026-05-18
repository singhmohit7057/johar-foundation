import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';

export const StickyDonateButton: React.FC = () => {
  return (
    <Link to="/donate" style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      backgroundColor: theme.colors.primary,
      color: theme.colors.white,
      padding: '15px 25px',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      zIndex: 999,
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      ❤️ Donate
    </Link>
  );
};