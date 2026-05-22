import React, { useState, useRef, useEffect } from 'react';
import { theme } from '../theme/styles';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaFacebookF, FaInstagram, FaGlobe, FaChevronDown, FaCheck } from 'react-icons/fa';

// Declare types for Google's injected global library variables
declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (options: any, targetId: string) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export const TopHeader: React.FC = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(() => {
    return localStorage.getItem('johar_lang_label') || 'English';
  });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Match languages explicitly defined in your HTML initialization options
  const languages = [
    { label: 'English', native: 'English', code: 'en' },
    { label: 'Hindi', native: 'हिन्दी', code: 'hi' },
    { label: 'Bengali', native: 'বাংলা', code: 'bn' },
    { label: 'Odia', native: 'ଓଡ଼ିଆ', code: 'or' },
  ];

  useEffect(() => {
    // 1. Define the mandatory Google callback function globally
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'hi,bn,or',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // 2. Inject the Google Translate core script element into the DOM if missing
    const SCRIPT_ID = 'google-translate-script';
    if (!document.getElementById(SCRIPT_ID)) {
      const addScript = document.createElement('script');
      addScript.id = SCRIPT_ID;
      addScript.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      addScript.defer = true;
      document.body.appendChild(addScript);
    }

    // 3. Close language dropdown when clicking elsewhere
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

    // Root domains and subdomains have isolated cookie paths. We target both configurations.
    const domain = window.location.hostname;
    const baseDomain = domain.substring(domain.lastIndexOf('.', domain.lastIndexOf('.') - 1));

    if (langCode === 'en') {
      // Revert page back to English by nuking Google's tracking cookies
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${baseDomain};`;
    } else {
      // Force cookie parameters for Google Translation engine interception
      const cookieValue = `/en/${langCode}`;
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain};`;
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${baseDomain};`;
    }

    // Force application reload to let Google script reconstruct translation elements on bootstrap
    window.location.reload();
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
      {/* Hidden container node required by Google initialization script */}
      <div id="google_translate_element" style={{ display: 'none', visibility: 'hidden' }} />

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
              <a 
                href="https://facebook.com/themadmysteryteam" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                aria-label="Visit our Facebook Page"
              >
                <FaFacebookF size={14} style={{ cursor: 'pointer' }} />
              </a>
              <a 
                href="https://instagram.com/themadmysteryteam" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                aria-label="Visit our Instagram Profile"
              >
                <FaInstagram size={14} style={{ cursor: 'pointer' }} />
              </a>
              <a 
                href="https://wa.me/919117115050?text=Hi!%20I%27m%20interested%20in%20supporting%20Johar%20Foundation." 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp size={14} style={{ cursor: 'pointer' }} />
              </a>
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
        
        /* Clean visual layer updates for injected third-party elements */
        body { top: 0px !important; position: static !important; }
        .goog-te-banner-frame, #goog-gt-tt, .goog-te-balloon-frame, iframe.skiptranslate, .goog-te-spinner-pos { 
          display: none !important; 
          visibility: hidden !important; 
        }
      `}</style>
    </>
  );
};