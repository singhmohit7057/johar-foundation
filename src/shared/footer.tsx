import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';

export const Footer: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // RED & WHITE: Base links are dark gray, turning Red on hover
  const linkStyle = (id: string): React.CSSProperties => ({
    color: hoveredLink === id ? '#D32F2F' : '#555555', // Red accent on hover, dark gray idle
    textDecoration: 'none',
    transition: theme.utils.transition || 'color 0.3s ease',
    display: 'block',
    marginBottom: '12px'
  });

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    textAlign: 'left',         
    padding: '0 5px',
    boxSizing: 'border-box'
  };

  return (
    <footer style={{ 
      backgroundColor: '#FFFFFF', // RED & WHITE: Pure white background
      color: '#333333',           // Primary dark text color
      padding: '60px 5% 20px',
      width: '100%',        
      boxSizing: 'border-box',
      borderTop: '2px solid #D32F2F' // RED & WHITE: Bold red top border accent
    }}>
      <div 
        className="footer-grid-container"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '20px', 
          marginBottom: '40px'
        }}
      >
        {/* 1. About Column */}
        <div style={columnStyle}>
          {/* RED & WHITE: Strong Red Heading */}
          <h4 style={{ color: '#D32F2F', marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>JOHAR FOUNDATION</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#555555', margin: 0 }}>
            "Jo Hare Na" — Dedicated to the resilience and empowerment of underserved communities.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '20px', color: '#111111', fontSize: '1rem', fontWeight: 'bold' }}>Quick Link</h4>
          <div style={{ fontSize: '0.85rem' }}>
            <Link 
              to="/who-we-are" 
              style={linkStyle('who-we-are')}
              onMouseEnter={() => setHoveredLink('who-we-are')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Who We Are
            </Link>
            <Link 
              to="/initiatives" 
              style={linkStyle('initiatives')}
              onMouseEnter={() => setHoveredLink('initiatives')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Initiatives
            </Link>
            <Link 
              to="/impact" 
              style={linkStyle('impact')}
              onMouseEnter={() => setHoveredLink('impact')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Impact
            </Link>
            <Link 
              to="/resources" 
              style={linkStyle('resources')}
              onMouseEnter={() => setHoveredLink('resources')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Resources
            </Link>
          </div>
        </div>

        {/* 3. Take Action */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '20px', color: '#111111', fontSize: '1rem', fontWeight: 'bold' }}>Take Action</h4>
          <div style={{ fontSize: '0.85rem' }}>
            <Link 
              to="/contact" 
              style={linkStyle('contact')}
              onMouseEnter={() => setHoveredLink('contact')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Contact
            </Link>
            <Link 
              to="/donate" 
              style={linkStyle('donate')}
              onMouseEnter={() => setHoveredLink('donate')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Donate
            </Link>
            <Link 
              to="/get-involved" 
              style={linkStyle('get-involved')}
              onMouseEnter={() => setHoveredLink('get-involved')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* 4. Legal Column */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '20px', color: '#111111', fontSize: '1rem', fontWeight: 'bold' }}>Legal</h4>
          <div style={{ fontSize: '0.85rem' }}>
            <Link 
              to="/privacy-policy" 
              style={linkStyle('privacy')}
              onMouseEnter={() => setHoveredLink('privacy')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-and-conditions" 
              style={linkStyle('terms')}
              onMouseEnter={() => setHoveredLink('terms')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/cookies-policy" 
              style={linkStyle('cookies')}
              onMouseEnter={() => setHoveredLink('cookies')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Cookies Policy
            </Link>
          </div>
        </div>

        {/* 5. Contact Column */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '20px', color: '#111111', fontSize: '1rem', fontWeight: 'bold' }}>Contact Us</h4>
          <p style={{ fontSize: '0.85rem', color: '#555555', lineHeight: '1.8', margin: 0 }}>
            Email: info@joharfoundation.org<br/>
            Phone: +91 9117115050<br/>
            Location: Jharkhand, India
          </p>
        </div>
      </div>

      {/* RED & WHITE: Light divider line with text in Red color */}
        <div style={{ 
          borderTop: '1px solid #E0E0E0', 
          paddingTop: '20px', 
          textAlign: 'center', 
          fontSize: '0.8rem', 
          color: '#D32F2F', // Changed to matching red color
          fontWeight: '500'  // Optional: added slight weight for better readability in red
        }}>
          © {new Date().getFullYear()} Johar Foundation. All Rights Reserved.
        </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid-container {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .footer-grid-container > div {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
};