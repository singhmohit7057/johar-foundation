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
    marginBottom: '8px'
  });

  return (
    <footer style={{ 
      backgroundColor: theme.colors.secondary, 
      color: theme.colors.white, 
      padding: '60px 5% 20px',
      width: '100vw' 
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '40px', 
        marginBottom: '40px' 
      }}>
        {/* About Column */}
        <div>
          <h3 style={{ color: theme.colors.primary, marginBottom: '15px' }}>JOHAR FOUNDATION</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#ccc' }}>
            "Jo Hare Na" — Dedicated to the resilience and empowerment of underserved communities.
          </p>
        </div>

        {/* Quick Link */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Quick Link</h4>
          <div style={{ fontSize: '0.9rem' }}>
            <Link 
              to="/who-we-are" 
              style={linkStyle('privacy')}
              onMouseEnter={() => setHoveredLink('privacy')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Who We Are
            </Link>
            <Link 
              to="/initiatives" 
              style={linkStyle('terms')}
              onMouseEnter={() => setHoveredLink('terms')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Initiatives
            </Link>
            <Link 
              to="/impact" 
              style={linkStyle('cookies')}
              onMouseEnter={() => setHoveredLink('cookies')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Impact
            </Link>
          </div>
        </div>

          {/* Take Action */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Take Action</h4>
          <div style={{ fontSize: '0.9rem' }}>
            <Link 
              to="/contact" 
              style={linkStyle('privacy')}
              onMouseEnter={() => setHoveredLink('privacy')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Contact
            </Link>
            <Link 
              to="/donate" 
              style={linkStyle('terms')}
              onMouseEnter={() => setHoveredLink('terms')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Donate
            </Link>
            <Link 
              to="/get-involved" 
              style={linkStyle('cookies')}
              onMouseEnter={() => setHoveredLink('cookies')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Legal Column */}
        <div>
          <h4 style={{ marginBottom: '15px' }}>Legal</h4>
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
        <div>
          <h4 style={{ marginBottom: '15px' }}>Contact Us</h4>
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