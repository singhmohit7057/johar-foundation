import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';

const CookiesPolicy: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    padding: '60px 5% 80px',
    width: '100%',
    boxSizing: 'border-box',
    lineHeight: '1.8',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.colors.white,
    padding: '50px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: `1px solid rgba(0,0,0,0.05)`,
    maxWidth: '900px',
    margin: '0 auto',
  };

  const subHeadingStyle: React.CSSProperties = {
    color: theme.colors.primary,
    marginTop: '30px',
    marginBottom: '15px',
    fontSize: '1.3rem',
    fontWeight: 'bold',
  };

  return (
    <div style={{ backgroundColor: theme.colors.background }}>
      <SEO title="Cookies Policy" description="Information about how Johar Foundation uses cookies on its website." />

      {/* Trust Header: Consistent with Contact & Privacy Pages */}
      <div style={{ 
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #1a1a1a 100%)`,
        color: theme.colors.white, 
        padding: '60px 5%',
        textAlign: 'center',
        borderBottom: `4px solid ${theme.colors.primary}`
      }}>
        <div style={{ 
          display: 'inline-block', 
          padding: '8px 20px', 
          backgroundColor: `${theme.colors.primary}33`, 
          borderRadius: '50px', 
          fontSize: '0.75rem', 
          fontWeight: 'bold', 
          letterSpacing: '1px',
          marginBottom: '20px',
          color: '#ff9da9' 
        }}>
          LEGAL DOCUMENTATION
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Cookies Policy</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Effective Date: March 2026</p>
      </div>

      <div style={sectionStyle}>
        <div style={cardStyle}>
          <p style={{ color: theme.colors.text }}>
            This Cookies Policy explains how Johar Foundation uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <h3 style={subHeadingStyle}>1. What are Cookies?</h3>
          <p style={{ color: theme.colors.text }}>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h3 style={subHeadingStyle}>2. Why do we use Cookies?</h3>
          <p style={{ color: theme.colors.text }}>
            We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate. Other cookies enable us to track and target the interests of our users to enhance the experience on our online properties.
          </p>

          <h3 style={subHeadingStyle}>3. Types of Cookies we use</h3>
          <ul style={{ paddingLeft: '20px', color: theme.colors.text }}>
            <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our website (e.g., accessing secure donation areas).</li>
            <li><strong>Analytics Cookies:</strong> These help us understand how our website is being used, allowing us to improve your experience in Jharkhand and beyond.</li>
            <li><strong>Preference Cookies:</strong> These allow the website to remember choices you make (such as your language preference) to provide enhanced, more personal features.</li>
          </ul>

          <h3 style={subHeadingStyle}>4. How can you control Cookies?</h3>
          <p style={{ color: theme.colors.text }}>
            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://allaboutcookies.org" target="_blank" rel="noreferrer" style={{ color: theme.colors.primary }}>allaboutcookies.org</a>.
          </p>

          <div style={{ 
            marginTop: '50px', 
            paddingTop: '30px', 
            borderTop: `1px solid rgba(0,0,0,0.1)`, 
            textAlign: 'center' 
          }}>
            <p style={{ fontWeight: 'bold', color: theme.colors.secondary }}>Managing your Preferences</p>
            <p style={{ color: theme.colors.text, fontSize: '0.9rem' }}>
              If you have any questions about our use of cookies or other technologies, please email us at:<br />
              <strong>info@joharfoundation.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;