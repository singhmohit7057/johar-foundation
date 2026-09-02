import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { theme } from '../theme/styles';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGlobe, FaChevronDown, FaCheck, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const languages = [
  { label: 'English', native: 'English', code: 'en' },
  { label: 'Hindi',   native: 'हिन्दी',   code: 'hi' },
  { label: 'Bengali', native: 'বাংলা',    code: 'bn' },
  { label: 'Odia',    native: 'ଓଡ଼ିଆ',    code: 'or' },
  { label: 'Santali',  native: 'ᱚᱞ ᱪᱤᱠᱤ',   code: 'sat' },
  { label: 'Sanskrit', native: 'संस्कृतम्', code: 'sa'  },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [isDonateHovered, setIsDonateHovered] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(() => localStorage.getItem('johar_lang_label') || 'English');
  const langRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (label: string, code: string) => {
    setSelectedLang(label);
    setIsLangOpen(false);
    localStorage.setItem('johar_lang_label', label);
    localStorage.setItem('johar_lang_code', code);
    const domain = window.location.hostname;
    const base = domain.substring(domain.lastIndexOf('.', domain.lastIndexOf('.') - 1));
    /* eslint-disable react-hooks/immutability */
    if (code === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${base};`;
    } else {
      const v = `/en/${code}`;
      document.cookie = `googtrans=${v}; path=/;`;
      document.cookie = `googtrans=${v}; path=/; domain=${domain};`;
      document.cookie = `googtrans=${v}; path=/; domain=${base};`;
    }
    /* eslint-enable react-hooks/immutability */
    window.location.reload();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setIsLangOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

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
    padding: isMobile ? '0.4rem 5%' : '0.5rem 5%',
    backgroundColor: theme.colors.white,
    boxShadow: theme.utils.shadow,
    position: 'relative',
    zIndex: 1000,
    width: '100%',
    boxSizing: 'border-box',
  };

  const mobileMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100dvh',
    backgroundColor: theme.colors.white,
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    padding: '90px 8% 40px',
    overflowY: 'auto',
    zIndex: 1095,
    boxSizing: 'border-box',
    justifyContent: 'space-between',
  };

  return (
    <>
    <nav style={navContainerStyle}>
      {/* Brand Logo */}
      <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.webp" alt="Logo" style={{ height: isMobile ? '36px' : '44px', width: 'auto' }} />
      </Link>

      {/* Desktop Menu & Mobile Action Group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '15px' : '30px' }}>
        
        {/* Desktop Links (Hidden on Mobile) */}
        {!isMobile && (
          <>
            <Link to="/" style={getLinkStyle('/')}>Home</Link>
            <Link to="/who-we-are" style={getLinkStyle('/who-we-are')}>Who We Are</Link>
            <Link to="/get-involved" style={getLinkStyle('/get-involved')}>Volunteer</Link>
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
          ❤ Donate
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

    </nav>
    {/* Mobile Dropdown Menu — portaled to body to escape sticky z-index context */}
    {isMobile && ReactDOM.createPortal(
        <div style={mobileMenuStyle}>
          {/* Nav links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/')}>Home</Link>
            <Link to="/who-we-are" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/who-we-are')}>Who We Are</Link>
            <Link to="/get-involved" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/get-involved')}>Volunteer</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={getLinkStyle('/contact')}>Contact</Link>
          </div>

          {/* Footer info block */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
          {/* Divider */}
          <div style={{ borderTop: '1px solid #f0ecea', width: '100%' }} />

          {/* Contact info */}
          <a href="tel:+919117115050" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#555', textDecoration: 'none', fontSize: '0.9rem' }}>
            <FaPhoneAlt size={13} color={theme.colors.primary} /> +91-9117115050
          </a>
          <a href="mailto:info@joharfoundation.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: '#555', textDecoration: 'none', fontSize: '0.9rem' }}>
            <FaEnvelope size={13} color={theme.colors.primary} /> info@joharfoundation.com
          </a>

          {/* Social icons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a href="https://facebook.com/joharwelfarefoundation" target="_blank" rel="noopener noreferrer"
              style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: theme.colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaFacebookF size={15} color="#fff" />
            </a>
            <a href="https://instagram.com/joharfoundation_" target="_blank" rel="noopener noreferrer"
              style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: theme.colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaInstagram size={15} color="#fff" />
            </a>
            <a href="https://wa.me/919117115050?text=Hi!%20I%27m%20interested%20in%20supporting%20Johar%20Foundation." target="_blank" rel="noopener noreferrer"
              style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: theme.colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FaWhatsapp size={15} color="#fff" />
            </a>
          </div>

          {/* Language selector */}
          <div ref={langRef} style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div onClick={() => setIsLangOpen(!isLangOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', border: `1px solid ${theme.colors.primary}`, padding: '8px 20px', borderRadius: '30px', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 500, color: theme.colors.primary, width: 'fit-content' }}>
              <FaGlobe size={13} />
              {selectedLang}
              <FaChevronDown size={9} style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </div>
            {isLangOpen && (
              <div style={{ position: 'absolute', bottom: '110%', left: '50%', transform: 'translateX(-50%)', width: '210px', backgroundColor: '#1a1a1a', borderRadius: '12px', padding: '10px 0', boxShadow: '0 -10px 25px rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', zIndex: 9999 }}>
                {languages.map(lang => (
                  <div key={lang.label}
                    onClick={() => handleLanguageChange(lang.label, lang.code)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 16px', cursor: 'pointer', backgroundColor: selectedLang === lang.label ? 'rgba(166,38,57,0.2)' : 'transparent', color: selectedLang === lang.label ? '#fff' : '#ccc' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                      <span style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{lang.label}</span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>/ {lang.native}</span>
                    </div>
                    {selectedLang === lang.label && <FaCheck size={11} color="#fff" />}
                  </div>
                ))}
              </div>
            )}
          </div>
          </div>
        </div>,
      document.body
    )}
    </>
  );
};