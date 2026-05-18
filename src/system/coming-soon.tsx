import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';

const ComingSoon: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      backgroundColor: theme.colors.background,
      padding: '0 5%'
    }}>
      <SEO title="Coming Soon" />

      {/* Optional: Add a subtle icon or your logo.webp here */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: theme.colors.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px',
        fontSize: '2rem',
        boxShadow: theme.utils.shadow
      }}>
        ⏳
      </div>

      <h1 style={{ color: theme.colors.secondary, fontSize: '2.5rem' }}>Coming Soon</h1>
      
      <p style={{ 
        color: theme.colors.text, 
        maxWidth: '600px', 
        margin: '15px 0 30px',
        lineHeight: '1.8' 
      }}>
        We are working hard to document our latest initiatives and stories of resilience. 
        Stay tuned as we prepare to share the spirit of <strong>"Jo Hare Na"</strong> with you.
      </p>

      <div style={{
        padding: '10px 20px',
        border: `1px solid ${theme.colors.primary}`,
        borderRadius: '20px',
        color: theme.colors.primary,
        fontSize: '0.9rem',
        fontWeight: 'bold'
      }}>
        Under Construction
      </div>
    </div>
  );
};

export default ComingSoon;