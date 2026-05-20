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
    marginBottom: '12px' // Slightly larger tap target for mobile touch
  });

  // Reusable column wrapper style to center content on mobile natively
  const columnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centers items horizontally
    textAlign: 'center',  // Centers inline text & paragraphs
    padding: '0 15px'
  };

  return (
    <footer style={{ 
      backgroundColor: theme.colors.secondary, 
      color: theme.colors.white, 
      padding: '60px 5% 20px',
      width: '100%',            // FIXED: Changed from 100vw to 100% to remove horizontal scroll
      boxSizing: 'border-box'   // Keeps the padding inside the 100% bounds
    }}>
      <div style={{ 
        display: 'grid', 
        // Automatically drops to 1 column and centers on mobile viewports
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '40px', 
        marginBottom: '40px',
        justifyContent: 'center'
      }}>
        {/* About Column */}
        <div style={columnStyle}>
          <h3 style={{ color: theme.colors.primary, marginBottom: '15px' }}>JOHAR FOUNDATION</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#ccc', maxWidth: '300px' }}>
            "Jo Hare Na" — Dedicated to the resilience and empowerment of underserved communities.
          </p>
        </div>

        {/* Quick Links */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '15px', color: theme.colors.white }}>Quick Link</h4>
          <div style={{ fontSize: '0.9rem' }}>
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

        {/* Take Action */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '15px', color: theme.colors.white }}>Take Action</h4>
          <div style={{ fontSize: '0.9rem' }}>
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

        {/* Legal Column */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '15px', color: theme.colors.white }}>Legal</h4>
          <div style={{ fontSize: '0.9rem' }}>
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

        {/* Contact Column */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '15px', color: theme.colors.white }}>Contact Us</h4>
          <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.8' }}>
            Email: info@joharfoundation.org<br/>
            Phone: +91 9117115050<br/>
            Location: Jharkhand, India
          </p>
        </div>
      </div>

      <div style={{ 
        borderTop: '1px solid #555', 
        paddingTop: '20px', 
        textAlign: 'center', 
        fontSize: '0.8rem', 
        color: '#888' 
      }}>
        © {new Date().getFullYear()} Johar Foundation. All Rights Reserved.
      </div>
    </footer>
  );
};