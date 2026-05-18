import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';

const TermsAndConditions: React.FC = () => {
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
      <SEO title="Terms and Conditions" description="Legal terms and conditions for using the Johar Foundation website." />

      {/* Trust Header */}
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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Terms & Conditions</h1>
        <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Last Updated: March 2026</p>
      </div>

      <div style={sectionStyle}>
        <div style={cardStyle}>
          <p style={{ color: theme.colors.text }}>
            Welcome to the Johar Foundation website. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <h3 style={subHeadingStyle}>1. Use of Website</h3>
          <p style={{ color: theme.colors.text }}>
            The content of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
          </p>

          <h3 style={subHeadingStyle}>2. Donations & Refunds</h3>
          <p style={{ color: theme.colors.text }}>
            All donations made through this website are voluntary. Once a donation is processed, it is generally non-refundable. Johar Foundation will issue an 80G tax receipt for eligible donations within the stipulated timeframe required by Indian law.
          </p>

          <h3 style={subHeadingStyle}>3. Intellectual Property</h3>
          <p style={{ color: theme.colors.text }}>
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the logo, design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice.
          </p>

          <h3 style={subHeadingStyle}>4. Limitation of Liability</h3>
          <p style={{ color: theme.colors.text }}>
            Johar Foundation shall not be liable for any indirect, incidental, or consequential damages arising out of your use of this website or participation in our initiatives. We strive to provide accurate information but do not guarantee its completeness or suitability.
          </p>

          <h3 style={subHeadingStyle}>5. Governing Law</h3>
          <p style={{ color: theme.colors.text }}>
            Your use of this website and any dispute arising out of such use is subject to the laws of India. Any legal action shall be brought exclusively in the courts of <strong>Jamshedpur, Jharkhand</strong>.
          </p>

          <div style={{ 
            marginTop: '50px', 
            paddingTop: '30px', 
            borderTop: `1px solid rgba(0,0,0,0.1)`, 
            textAlign: 'center' 
          }}>
            <p style={{ fontWeight: 'bold', color: theme.colors.secondary }}>Contact Legal Department</p>
            <p style={{ color: theme.colors.text, fontSize: '0.9rem' }}>
              Email: info@joharfoundation.com<br />
              Johar Foundation (Section 8 Company)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;