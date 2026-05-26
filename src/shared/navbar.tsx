import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../theme/styles';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [isDonateHovered, setIsDonateHovered] = useState(false);

  // Update layout on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getLinkStyle = (path: string): React.CSSProperties => ({
    textDecoration: 'none',
    color: location.pathname === path ? theme.colors.primary : theme.colors.secondary,
    fontWeight: location.pathname === path ? 'bold' : 500,
    fontSize: isMobile ? '1.1rem' : '0.95rem',
    transition: theme.utils.transition,
    padding: isMobile ? '15px 0' : '0',
    borderBottom: !isMobile && location.pathname === path ? `2px solid ${theme.colors.primary}` : 'none',
  });

  const navContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? '0.6rem 5%' : '0.8rem 5%',
    backgroundColor: theme.colors.white,
    boxShadow: theme.utils.shadow,
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    boxSizing: 'border-box',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    backgroundColor: theme.colors.white,
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    padding: '20px 5%',
    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    zIndex: 999,
  };

  return (
    <nav style={navContainerStyle}>
      {/* Brand Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.webp" alt="Logo" style={{ height: isMobile ? '45px' : '55px', width: 'auto' }} />
      </Link>

      {/* Desktop Menu & Mobile Action Group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '15px' : '30px' }}>
        
        {/* Desktop Links (Hidden on Mobile) */}
        {!isMobile && (
          <>
            <Link to="/" style={getLinkStyle('/')}>Home</Link>
            <Link to="/who-we-are" style={getLinkStyle('/who-we-are')}>Who We Are</Link>
            <Link to="/initiatives" style={getLinkStyle('/initiatives')}>Initiatives</Link>
            <Link to="/impact" style={getLinkStyle('/impact')}>Impact</Link>
            <Link to="/get-involved" style={getLinkStyle('/get-involved')}>Get Involved</Link>
            <Link to="/resources" style={getLinkStyle('/resources')}>Resources</Link>
            <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
          </>
        )}

        {/* Donate Button (Color fixed to Organization Crimson Red) */}
        <Link 
          to="/donate" 
          onMouseEnter={() => setIsDonateHovered(true)}
          onMouseLeave={() => setIsDonateHovered(false)}
          style={{
            textDecoration: 'none',
            // FIXED: Changed from theme.colors.accent to theme.colors.primary (Red)
            backgroundColor: isDonateHovered ? theme.colors.secondary : theme.colors.primary,
            color: theme.colors.white,
            padding: isMobile ? '8px 16px' : '10px 24px',
            borderRadius: '24px',
            fontWeight: 'bold',
            fontSize: isMobile ? '0.85rem' : '0.95rem',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}
        >
          {/* Note: Kept the heart icon symbol intact */}
          ❤ {isMobile ? 'Donate' : 'Donate Now'}
        </Link>

        {/* Burger Icon (Mobile Only) */}
        {isMobile && (
          <div 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ 
              cursor: 'pointer', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '5px',
              padding: '5px'
            }}
          >
            <div style={{ width: '25px', height: '3px', backgroundColor: theme.colors.primary, transition: '0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
            <div style={{ width: '25px', height: '3px', backgroundColor: theme.colors.primary, opacity: isMenuOpen ? 0 : 1 }}></div>
            <div style={{ width: '25px', height: '3px', backgroundColor: theme.colors.primary, transition: '0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }}></div>
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div style={mobileMenuStyle}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/')}>Home</Link>
          <Link to="/who-we-are" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/who-we-are')}>Who We Are</Link>
          <Link to="/initiatives" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/initiatives')}>Initiatives</Link>
          <Link to="/impact" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/impact')}>Impact</Link>
          <Link to="/get-involved" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/get-involved')}>Get Involved</Link>
          <Link to="/resources" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/resources')}>Resources</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/contact')}>Contact</Link>
        </div>
      )}
    </nav>
  );
};