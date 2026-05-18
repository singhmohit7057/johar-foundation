import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';

const PrivacyPolicy: React.FC = () => {
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
      <SEO title="Privacy Policy" description="How Johar Foundation protects and manages your personal information." />

      {/* Trust Header: Consistent with Contact Page */}
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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Privacy Policy</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Last Updated: March 2026</p>
      </div>

      <div style={sectionStyle}>
        <div style={cardStyle}>
          <p style={{ color: theme.colors.text }}>
            Johar Foundation ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or engage with our community initiatives in Jharkhand and Eastern India.
          </p>

          <h3 style={subHeadingStyle}>1. Information We Collect</h3>
          <p style={{ color: theme.colors.text }}>
            We collect personal information that you voluntarily provide to us when you:
          </p>
          <ul style={{ paddingLeft: '20px', color: theme.colors.text }}>
            <li>Make a donation through our platform.</li>
            <li>Fill out our contact or volunteer forms.</li>
            <li>Subscribe to our newsletters or updates.</li>
          </ul>

          <h3 style={subHeadingStyle}>2. How We Use Your Information</h3>
          <p style={{ color: theme.colors.text }}>
            Your data is used strictly to enhance our impact, including:
          </p>
          <ul style={{ paddingLeft: '20px', color: theme.colors.text }}>
            <li>Processing donations and issuing 80G tax receipts.</li>
            <li>Sending program updates and impact reports.</li>
            <li>Improving our website and communication strategies.</li>
          </ul>

          <h3 style={subHeadingStyle}>3. Data Security</h3>
          <p style={{ color: theme.colors.text }}>
            As an organization rooted in Jamshedpur, we value the trust of our community. We implement robust security measures to protect your personal data from unauthorized access or disclosure. We do not sell or trade your personal information to third parties.
          </p>

          <h3 style={subHeadingStyle}>4. Your Rights</h3>
          <p style={{ color: theme.colors.text }}>
            You have the right to access, update, or request the deletion of your personal information at any time. If you wish to opt-out of our communications, please use the unsubscribe link provided in our emails or contact us directly.
          </p>

          <div style={{ 
            marginTop: '50px', 
            paddingTop: '30px', 
            borderTop: `1px solid rgba(0,0,0,0.1)`, 
            textAlign: 'center' 
          }}>
            <p style={{ fontWeight: 'bold', color: theme.colors.secondary }}>Questions about our Privacy Policy?</p>
            <p style={{ color: theme.colors.text, fontSize: '0.9rem' }}>
              Email: info@joharfoundation.com<br />
              Address: Dream Height Building, Bistupur, Jamshedpur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;