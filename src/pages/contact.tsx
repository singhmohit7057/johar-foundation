import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { ContactForm } from '../components/contactform';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter 
} from 'react-icons/fa';

const Contact: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const cardStyle: React.CSSProperties = {
    backgroundColor: theme.colors.white,
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: `1px solid rgba(0,0,0,0.05)`,
    display: 'flex',
    flexDirection: 'column',
    transition: theme.utils.transition,
  };

  const socialIconStyle = (id: string): React.CSSProperties => ({
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: hoveredSocial === id ? theme.colors.primary : `${theme.colors.secondary}10`,
    color: hoveredSocial === id ? theme.colors.white : theme.colors.secondary,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: '1.2rem',
  });

  const socialLinks = [
    { platform: 'facebook', icon: <FaFacebookF />, url: 'https://facebook.com/joharfoundation' },
    { platform: 'instagram', icon: <FaInstagram />, url: 'https://instagram.com/joharfoundation' },
    { platform: 'linkedin', icon: <FaLinkedinIn />, url: 'https://linkedin.com/company/joharfoundation' },
    { platform: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com/joharfoundation' },
  ];

  return (
    <div style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Contact & Identity" description="Johar Foundation Legal Identity and Contact Information." />

      {/* Trust Header: Legal Identity */}
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
          OFFICIAL LEGAL IDENTITY
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '25px' }}>Johar Foundation</h1>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '20px', 
          fontSize: '0.85rem',
          maxWidth: '900px',
          margin: '0 auto' 
        }}>
          <div style={{ border: '1px solid #444', padding: '10px 20px', borderRadius: '8px' }}>
            <span style={{ color: '#888' }}>CIN:</span> U88900JH2026NPL027286
          </div>
          <div style={{ border: '1px solid #444', padding: '10px 20px', borderRadius: '8px' }}>
            <span style={{ color: '#888' }}>PAN:</span> AAHCJ3084H
          </div>
          <div style={{ border: '1px solid #444', padding: '10px 20px', borderRadius: '8px' }}>
            <span style={{ color: '#888' }}>TAN:</span> RCHJ02452C
          </div>
        </div>
        <p style={{ marginTop: '25px', color: '#aaa', fontSize: '0.85rem' }}>
          Registered as a <strong>Section 8 Company</strong> • Incorporated 6 March 2026
        </p>
      </div>

      <div style={{ padding: '80px 5%' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '40px',
          alignItems: 'start'
        }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {/* Contact Details Card */}
            <div style={cardStyle}>
              <h3 style={{ color: theme.colors.primary, marginBottom: '20px', fontSize: '1.4rem' }}>Connect With Us</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📍</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: theme.colors.secondary }}>Jamshedpur HQ</div>
                    <div style={{ fontSize: '0.9rem', color: theme.colors.text }}>Dream Height Building, Bistupur, Jharkhand</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📞</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: theme.colors.secondary }}>Phone</div>
                    <div style={{ fontSize: '0.9rem', color: theme.colors.text }}>+91 9117115050</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '1.2rem' }}>✉️</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: theme.colors.secondary }}>Email</div>
                    <div style={{ fontSize: '0.9rem', color: theme.colors.text }}>info@joharfoundation.com</div>
                  </div>
                </div>
              </div>

              <hr style={{ margin: '30px 0', border: 'none', borderTop: `1px solid rgba(0,0,0,0.1)` }} />

              <h4 style={{ marginBottom: '15px', color: theme.colors.secondary }}>Social Presence</h4>
              <div style={{ display: 'flex', gap: '15px' }}>
                {socialLinks.map(({ platform, icon, url }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(platform)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={socialIconStyle(platform)}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Geographic Reach Card */}
            <div style={{ ...cardStyle, background: theme.colors.accent, color: theme.colors.white }}>
              <h3 style={{ marginBottom: '20px' }}>States We Serve</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Jharkhand', 'Bihar', 'Odisha', 'West Bengal', 'Chhattisgarh'].map(s => (
                  <span key={s} style={{ 
                    padding: '6px 15px', 
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem' 
                  }}>
                    {s}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: '20px', fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
                Expanding our footprint to ensure <strong>Jo Hare Na</strong> reaches every corner of Eastern India.
              </p>
            </div>
          </div>

          {/* Contact Form Card */}
          <div style={cardStyle}>
            <div style={{ marginBottom: '30px' }}>
              <h2 style={{ color: theme.colors.secondary, margin: 0 }}>Send a Message</h2>
              <div style={{ width: '50px', height: '4px', backgroundColor: theme.colors.primary, marginTop: '10px' }}></div>
            </div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;