import React, { useState, useRef, useEffect } from 'react';
import { theme } from '../theme/styles';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaGlobe, FaChevronDown, FaCheck } from 'react-icons/fa';

declare global {
  interface Window {
    doGTranslate?: (langPair: string) => void;
  }
}

export const TopHeader: React.FC = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('johar_lang_label') || 'English';
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { label: 'English', native: 'English', code: 'en' },
    { label: 'Hindi', native: 'हिन्दी', code: 'hi' },
    { label: 'Bengali', native: 'বাংলা', code: 'bn' },
    { label: 'Odia', native: 'ଓଡ଼ିଆ', code: 'or' },
    { label: 'Santali', native: 'Ol Chiki', code: 'sat' }, 
  ];

  // Auto-restore translation if user refreshes page while on an active selection
  useEffect(() => {
    const savedCode = localStorage.getItem('johar_lang_code');
    if (savedCode && savedCode !== 'en') {
      const checkEngine = setInterval(() => {
        if (window.doGTranslate) {
          window.doGTranslate(`en|${savedCode}`);
          clearInterval(checkEngine);
        }
      }, 100);
      return () => clearInterval(checkEngine);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langLabel: string, langCode: string) => {
    setSelectedLang(langLabel);
    setIsLangOpen(false);

    localStorage.setItem('johar_lang_label', langLabel);
    localStorage.setItem('johar_lang_code', langCode);

    if (window.doGTranslate) {
      window.doGTranslate(`en|${langCode}`);
    } else {
      // Fallback: Directly interact with GTranslate UI element
      const selectEl = document.querySelector('.gtranslate_wrapper select') as HTMLSelectElement;
      if (selectEl) {
        selectEl.value = `en|${langCode}`;
        selectEl.dispatchEvent(new Event('change'));
      } else {
        console.error("GTranslate engine target wrapper could not be reached.");
      }
    }
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    padding: '10px 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 1100,
  };

  const dropdownContainer: React.CSSProperties = {
    position: 'absolute',
    top: '110%',
    right: 0,
    width: '240px',
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    padding: '12px 0',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    display: isLangOpen ? 'block' : 'none',
    border: '1px solid rgba(255,255,255,0.1)',
  };

  const langItemStyle = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    cursor: 'pointer',
    transition: 'background 0.2s',
    backgroundColor: isSelected ? 'rgba(166, 38, 57, 0.2)' : 'transparent',
    color: isSelected ? theme.colors.white : '#ccc',
  });

  return (
    <>
      <div style={containerStyle} className="top-header">
        {/* Left Side: Contact */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }} className="contact-info">
          <a href="tel:+919117115050" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaPhoneAlt size={12} /> <span className="hide-mobile">+91 9117115050</span>
          </a>
          <a href="mailto:info@joharfoundation.com" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaEnvelope size={12} /> <span className="hide-mobile">info@joharfoundation.com</span>
          </a>
        </div>

        {/* Right Side: Socials & Language */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '15px' }} className="social-icons">
            <FaFacebookF size={14} style={{ cursor: 'pointer' }} />
            <FaInstagram size={14} style={{ cursor: 'pointer' }} />
            <FaWhatsapp size={14} style={{ cursor: 'pointer' }} />
          </div>

          <div style={{ width: '1px', height: '15px', backgroundColor: 'rgba(255,255,255,0.3)' }} />

          {/* Language Selector Trigger */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <div 
              onClick={() => setIsLangOpen(!isLangOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '6px 16px',
                borderRadius: '30px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 500,
                backgroundColor: isLangOpen ? 'rgba(255,255,255,0.1)' : 'transparent'
              }}
            >
              <FaGlobe size={14} />
              {selectedLang}
              <FaChevronDown size={10} style={{ transform: isLangOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </div>

            {/* Dropdown Menu */}
            <div style={dropdownContainer}>
              <div style={{ padding: '0 20px 10px', fontSize: '0.7rem', color: '#666', fontWeight: 'bold', letterSpacing: '1px' }}>
                LANGUAGE
              </div>
              {languages.map((lang) => (
                <div 
                  key={lang.label} 
                  style={langItemStyle(selectedLang === lang.label)}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = selectedLang === lang.label ? 'rgba(166, 38, 57, 0.2)' : 'transparent')}
                  onClick={() => handleLanguageChange(lang.label, lang.code)}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{lang.label}</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>/ {lang.native}</span>
                  </div>
                  {selectedLang === lang.label && <FaCheck size={12} color={theme.colors.white} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .top-header { padding: 12px 5% !important; }
          .hide-mobile { display: none; }
          .contact-info { gap: 15px !important; }
        }
        
        /* Safe Cleanup: Hide only Google's injection frames while protecting layout nodes */
        body { top: 0px !important; position: static !important; }
        .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame, iframe.skiptranslate { 
          display: none !important; 
          visibility: hidden !important; 
        }
      `}</style>
    </>
  );
};