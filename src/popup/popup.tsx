import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';

interface PopupProps {
  delay?: number;
}


export const Popup: React.FC<PopupProps> = ({ delay = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('johar_popup_dismissed');
    const isDismissed = (() => {
      if (!stored) return false;
      const IST_OFFSET = 5.5 * 60 * 60 * 1000;
      const toISTDay = (ms: number) => Math.floor((ms + IST_OFFSET) / (24 * 60 * 60 * 1000));
      return toISTDay(parseInt(stored, 10)) === toISTDay(Date.now());
    })();
    if (!isDismissed) {
      if (stored) localStorage.removeItem('johar_popup_dismissed');
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleClose = () => {
    if (dontShowAgain) localStorage.setItem('johar_popup_dismissed', Date.now().toString());
    setIsVisible(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: 'fixed', inset: 0, zIndex: 2000,
        backgroundColor: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
      }}
    >
      <div
        ref={modalRef}
        className="johar-popup-modal"
        style={{
          display: 'flex',
          width: '85%',
          maxWidth: 720,
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 32px 64px rgba(0,0,0,0.45)',
          animation: 'popupIn 0.38s cubic-bezier(0.34,1.4,0.64,1)',
          position: 'relative',
          background: '#fdf6ec',
        }}
      >
        {/* ── Close button ── */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute', top: 10, right: 10, zIndex: 20,
            width: 28, height: 28, borderRadius: '50%',
            background: 'rgba(60,53,48,0.18)', border: 'none',
            cursor: 'pointer', fontSize: 15, lineHeight: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#333', fontWeight: 600,
          }}
        >×</button>

        {/* ── LEFT: Illustration with shadow ── */}
        <div className="johar-popup-left" style={{
          flex: '0 0 48%',
          alignSelf: 'stretch',
          position: 'relative',
          overflow: 'hidden',
          display: 'none',
          background: '#fdf6ec',
          boxShadow: 'none',
        }}>
          <img
            src="/popup-illustration.png"
            alt="Together we build a brighter future"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center center',
              transform: 'scale(1.02)',
              display: 'block', mixBlendMode: 'multiply',
            }}
            loading="eager"
          />
          {/* Soft fade on left edge of content */}
          <div style={{
            position: 'absolute', top: 0, right: -40, bottom: 0,
            width: 40,
            background: 'linear-gradient(to left, transparent, #fdf6ec)',
            zIndex: 1,
          }} />
        </div>

        {/* ── MIDDLE: Content ── */}
        <div style={{
          flex: 1,
          padding: '28px 24px 22px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#fdf6ec',
        }}>
          {/* Logo — larger to match Canva */}
          <div style={{ marginBottom: 14 }}>
            <img src="/logo.webp" alt="Johar Foundation" style={{ height: 72, width: 'auto', mixBlendMode: 'multiply' }} />
          </div>

          {/* Shloka blockquote */}
          <div style={{
            borderLeft: `3.5px solid ${theme.colors.primary}`,
            paddingLeft: 14, marginBottom: 14,
          }}>
            <div style={{
              fontFamily: "'Noto Sans Devanagari', sans-serif",
              fontSize: '1.2rem', fontWeight: 700,
              color: theme.colors.primary, lineHeight: 1.3, marginBottom: 3,
            }}>सेवा परमो धर्म:</div>
            <div style={{ fontStyle: 'italic', color: '#777', fontSize: '0.82rem' }}>
              "Service is the highest duty"
            </div>
          </div>

          {/* Headline */}
          <h3 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
            fontWeight: 800, color: '#1a1a1a',
            margin: '0 0 10px', lineHeight: 1.28,
          }}>
            Together, we build<br />a brighter future.
          </h3>

          {/* Body */}
          <p style={{
            fontSize: '0.88rem', lineHeight: 1.6,
            color: '#555', margin: '0 0 18px',
          }}>
            Your small contribution helps us reach the underserved communities of India and beyond.
          </p>

          {/* CTA */}
          <Link to="/donate" onClick={handleClose} style={{ textDecoration: 'none', display: 'block' }}>
            <button
              style={{
                width: '100%', padding: '14px 0',
                background: theme.colors.primary, color: '#fff',
                border: 'none', borderRadius: 10,
                fontSize: '1rem', fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(166,38,57,0.32)',
                transition: 'transform 0.18s',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Be the Change
            </button>
          </Link>

          {/* Don't show today */}
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="checkbox" id="dontShow"
              checked={dontShowAgain}
              onChange={e => setDontShowAgain(e.target.checked)}
            />
            <label htmlFor="dontShow" style={{ fontSize: '0.76rem', color: '#aaa', cursor: 'pointer' }}>
              Don't show today
            </label>
          </div>
        </div>

        {/* ── RIGHT: Icon strip as single image ── */}
        <div className="johar-popup-icons" style={{
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '14px 6px',
          background: '#fdf6ec',
          width: 100,
          flexShrink: 0,
        }}>
          <img
            src="/popup-icons-strip.png"
            alt="Healthcare, Skill Development, Employment, Education, Community Empowerment"
            style={{ width: '100%', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply', opacity: 0.85 }}
          />
        </div>
      </div>

      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.92) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (min-width: 640px) {
          .johar-popup-icons { display: flex !important; }
        }
        @media (min-width: 769px) {
          .johar-popup-left { display: block !important; }
        }
      `}</style>
    </div>
  );
};
