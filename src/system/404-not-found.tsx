import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';

const NotFound: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      padding: '0 5%'
    }}>
      <SEO title="404 - Not Found" />
      
      <h1 style={{ 
        fontSize: '6rem', 
        color: theme.colors.primary, 
        margin: 0,
        lineHeight: 1 
      }}>404</h1>
      
      <h2 style={{ 
        color: theme.colors.secondary, 
        marginTop: '10px',
        fontSize: '2rem' 
      }}>Page Not Found</h2>
      
      <p style={{ 
        color: theme.colors.text, 
        maxWidth: '500px', 
        margin: '20px 0 30px',
        lineHeight: '1.6' 
      }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <Link to="/" style={{
        backgroundColor: theme.colors.accent,
        color: theme.colors.white,
        padding: '12px 30px',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: theme.utils.transition
      }}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;