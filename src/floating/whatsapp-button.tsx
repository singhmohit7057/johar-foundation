import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = "https://wa.me/919117115050?text=Hi!%20I%27m%20interested%20in%20supporting%20Johar%20Foundation.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '100px', // FIXED: Placed at 100px height to stack perfectly above the BackToTop button (typically at 30px)
        right: '30px',   // FIXED: Moved from left to right side
        backgroundColor: '#25D366',
        color: 'white',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.8rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 999,
        transition: 'all 0.2s ease-in-out'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)';
        e.currentTarget.style.backgroundColor = '#20ba5a';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = '#25D366';
      }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};