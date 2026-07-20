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
          <img
            src="/logo.webp"
            alt="Johar Foundation"
            style={{ height: '52px', width: 'auto', marginBottom: '14px', objectFit: 'contain' }}
          />
          <h4 style={{ color: '#D32F2F', marginBottom: '12px', fontSize: '0.82rem', fontWeight: 'bold', letterSpacing: '0.03em' }}>JOHAR WELFARE FOUNDATION</h4>
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
          <div style={{ fontSize: '0.85rem', color: '#555555', lineHeight: '1.8' }}>
            <a
              href="mailto:info@joharfoundation.org"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: hoveredLink === 'email' ? '#D32F2F' : '#555555', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.3s ease' }}
              onMouseEnter={() => setHoveredLink('email')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              info@joharfoundation.org
            </a>
            <a
              href="tel:+919117115050"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: hoveredLink === 'phone' ? '#D32F2F' : '#555555', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.3s ease' }}
              onMouseEnter={() => setHoveredLink('phone')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 9117115050
            </a>
            <a
              href="https://maps.google.com/?q=Jharkhand,India"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', color: hoveredLink === 'location' ? '#D32F2F' : '#555555', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={() => setHoveredLink('location')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Jharkhand, India
            </a>
          </div>
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
          © {new Date().getFullYear()} Johar Welfare Foundation. All Rights Reserved.
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