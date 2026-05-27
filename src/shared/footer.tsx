import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';

export const Footer: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const linkStyle = (id: string): React.CSSProperties => ({
    color: hoveredLink === id ? theme.colors.primary : '#ccc',
    textDecoration: 'none',
    transition: theme.utils.transition,
    display: 'block',
    marginBottom: '12px'
  });

  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // FIXED: Aligns text cleanly to the left for standard row layout balance
    textAlign: 'left',         
    padding: '0 5px',
    boxSizing: 'border-box'
  };

  return (
    <footer style={{ 
      backgroundColor: theme.colors.secondary, 
      color: theme.colors.white, 
      padding: '60px 5% 20px',
      width: '100%',        
      boxSizing: 'border-box'   
    }}>
      <div 
        className="footer-grid-container"
        style={{ 
          display: 'grid', 
          // FIXED: Forces exactly 5 equal columns across desktop to eliminate word wrapping shifts
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: '20px', // REDUCED: Lowered from 40px to give content more width to shrink safely
          marginBottom: '40px'
        }}
      >
        {/* 1. About Column */}
        <div style={columnStyle}>
          <h4 style={{ color: theme.colors.primary, marginBottom: '20px', fontSize: '1rem', fontWeight: 'bold' }}>JOHAR FOUNDATION</h4>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#ccc', margin: 0 }}>
            "Jo Hare Na" — Dedicated to the resilience and empowerment of underserved communities.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '20px', color: theme.colors.white, fontSize: '1rem', fontWeight: 'bold' }}>Quick Link</h4>
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
          <h4 style={{ marginBottom: '20px', color: theme.colors.white, fontSize: '1rem', fontWeight: 'bold' }}>Take Action</h4>
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
          <h4 style={{ marginBottom: '20px', color: theme.colors.white, fontSize: '1rem', fontWeight: 'bold' }}>Legal</h4>
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
          <h4 style={{ marginBottom: '20px', color: theme.colors.white, fontSize: '1rem', fontWeight: 'bold' }}>Contact Us</h4>
          <p style={{ fontSize: '0.85rem', color: '#ccc', lineHeight: '1.8', margin: 0 }}>
            Email: info@joharfoundation.org<br/>
            Phone: +91 9117115050<br/>
            Location: Jharkhand, India
          </p>
        </div>
      </div>

      <div style={{ 
        borderTop: '1px solid #444', 
        paddingTop: '20px', 
        textAlign: 'center', 
        fontSize: '0.8rem', 
        color: '#888' 
      }}>
        © {new Date().getFullYear()} Johar Foundation. All Rights Reserved.
      </div>

      {/* Embedded Breakpoint Queries to maintain multi-row stacking logic elegantly on mobile viewports */}
      <style>{`
        @media (max-width: 992px) {
          .footer-grid-container {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 30px !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid-container {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
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