import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { Newsletter } from '../subscribe/newsletter'; // Imported the newsletter component

const HomePage: React.FC = () => {
  // Styles for the placeholder box
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh', // Takes up most of the screen height
    padding: theme.spacing.paddingSide,
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: theme.colors.white,
    border: `2px dashed ${theme.colors.accent}`, // Dashed border to indicate "Work in Progress"
    borderRadius: '12px',
    padding: '40px 80px',
    boxShadow: theme.utils.shadow,
    textAlign: 'center',
  };

  const textStyle: React.CSSProperties = {
    color: theme.colors.secondary,
    fontSize: '1.5rem',
    fontWeight: '500',
    margin: 0,
    fontStyle: 'italic'
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Dynamic Title for the Home Page */}
      <SEO title="Home" description="Welcome to Johar Foundation - Jo Hare Na." />


      {/* Main Hero Placeholder Section */}
      <div style={containerStyle}>
        <div style={boxStyle}>
          <p style={textStyle}>Mohit is thinking just for now...</p>
          <div style={{ 
            marginTop: '15px', 
            fontSize: '0.9rem', 
            color: theme.colors.primary,
            fontWeight: 'bold' 
          }}>
            Building something resilient.
          </div>
        </div>
      </div>

      {/* NEW MODULE: Newsletter Subscription Block */}
      <Newsletter />
    </div>
  );
};

export default HomePage;