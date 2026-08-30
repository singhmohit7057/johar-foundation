import React, { useState } from 'react';
import { SEO } from '../shared/seo';
import { ContactForm } from '../components/contactform';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const CRIMSON     = '#A62639';
const EARTH       = '#3C3530';
const BG          = '#F9F7F2';
const SAND        = '#E8DCC8';
const WARM_TAN    = '#C4A882';
const WHITE       = '#FFFFFF';
const EARTH_MUTED = '#5a514a';

/* ─── Wave Divider ───────────────────────────────────────────────────────────── */
const WaveDivider: React.FC<{ topColor: string; bottomColor: string }> = ({ topColor, bottomColor }) => (
  <div style={{ lineHeight: 0, background: topColor }}>
    <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: 72 }}>
      <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill={bottomColor} />
    </svg>
  </div>
);

const Contact: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  const cardStyle: React.CSSProperties = {
    backgroundColor: WHITE,
    padding: '24px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
    border: '1px solid #e8e0d8',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
  };

  const socialIconStyle = (id: string): React.CSSProperties => ({
    width: '45px',
    height: '45px',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: hoveredSocial === id ? CRIMSON : `${EARTH}10`,
    color: hoveredSocial === id ? WHITE : EARTH,
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    fontSize: '1.2rem',
  });

  const socialLinks = [
    { platform: 'facebook', icon: <FaFacebookF />, url: 'https://facebook.com/joharwelfarefoundation' },
    { platform: 'instagram', icon: <FaInstagram />, url: 'https://instagram.com/joharfoundation_' },
    { platform: 'twitter', icon: <FaTwitter />, url: 'https://twitter.com/joharwelfarefoundation' },
  ];

  return (
    <div style={{ backgroundColor: BG, overflowX: 'hidden' }}>
      <SEO title="Contact & Identity" description="Johar Foundation Legal Identity and Contact Information." />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: BG,
        padding: '80px 5% 60px',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        {/* Morphing blob */}
        <div aria-hidden style={{
          position: 'absolute',
          width: 500, height: 420,
          background: `radial-gradient(ellipse at 40% 50%, ${WARM_TAN}40 0%, ${CRIMSON}18 60%, transparent 100%)`,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -54%)',
          animation: 'ct-blobMorph 12s ease-in-out infinite',
          filter: 'blur(52px)',
          zIndex: 0,
          borderRadius: '62% 38% 55% 45% / 48% 52% 48% 52%',
        }} />
        {/* Floating ornaments */}
        <div aria-hidden style={{
          position: 'absolute', bottom: 80, left: '8%',
          width: 64, height: 64,
          borderRadius: '50%', background: SAND, opacity: 0.7,
          animation: 'ct-floatY 5s ease-in-out infinite',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 120, right: '10%',
          width: 42, height: 42,
          borderRadius: '10% 50% 10% 50%', background: SAND, opacity: 0.6,
          animation: 'ct-floatY 7s ease-in-out infinite 1s',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="ct-fade-in ct-d1" style={{
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: EARTH,
            lineHeight: 1.25,
            margin: '8px 0 24px',
          }}>
            Get in <span style={{ color: CRIMSON }}>Touch</span>
          </h1>
          <p className="ct-fade-in ct-d2" style={{
            fontSize: '1.15rem',
            color: EARTH_MUTED,
            maxWidth: 540,
            margin: '0 auto 32px',
            lineHeight: 1.75,
          }}>
            We're based in Jharkhand. Write to us, call us, or just show up.
          </p>

          {/* Legal Identity — merged into hero */}
          <div className="ct-fade-in ct-d3" style={{ marginBottom: '16px' }}>
            <p style={{ color: EARTH_MUTED, fontSize: '0.82rem', marginBottom: '14px' }}>
              Registered as a <strong style={{ color: EARTH }}>Section 8 Company</strong> &nbsp;•&nbsp; Incorporated 6 March 2026
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', fontSize: '0.8rem' }}>
              {[
                { label: 'CIN', value: 'U88900JH2026NPL027286' },
                { label: 'PAN', value: 'AAHCJ3084H' },
                { label: 'TAN', value: 'RCHJ02452C' },
              ].map(({ label, value }) => (
                <div key={label} style={{
                  border: `1px solid ${WARM_TAN}80`,
                  padding: '8px 18px',
                  borderRadius: '8px',
                  background: `${WHITE}cc`,
                  color: EARTH,
                  backdropFilter: 'blur(4px)',
                }}>
                  <span style={{ color: EARTH_MUTED, marginRight: 5 }}>{label}:</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            width: 1, height: 40,
            background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`,
            margin: '0 auto', borderRadius: 1,
          }} />
        </div>
      </section>

      <WaveDivider topColor={BG} bottomColor={BG} />

      {/* ── Contact Cards ────────────────────────────────────────────────────── */}
      <div style={{ padding: '40px 5%', background: BG }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
          gap: '40px',
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
            {/* Contact Details Card */}
            <div style={cardStyle}>
              <h3 style={{ color: CRIMSON, marginBottom: '12px', fontSize: '1.2rem' }}>Connect With Us</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📍</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: EARTH }}>Jamshedpur HQ</div>
                    <div style={{ fontSize: '0.9rem', color: EARTH_MUTED }}>Dream Height Building, Bistupur, Jharkhand</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '1.2rem' }}>📞</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: EARTH }}>Phone</div>
                    <div style={{ fontSize: '0.9rem', color: EARTH_MUTED }}>+91 9117115050</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ fontSize: '1.2rem' }}>✉️</span>
                  <div>
                    <div style={{ fontWeight: 'bold', color: EARTH }}>Email</div>
                    <div style={{ fontSize: '0.9rem', color: EARTH_MUTED }}>info@joharfoundation.com</div>
                  </div>
                </div>
              </div>

              <hr style={{ margin: '16px 0', border: 'none', borderTop: '1px solid #e8e0d8' }} />

              <h4 style={{ marginBottom: '10px', color: EARTH }}>Social Presence</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                {socialLinks.map(({ platform, icon, url }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(platform)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    style={socialIconStyle(platform)}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Geographic Reach Card */}
            <div style={{ ...cardStyle, background: CRIMSON, color: WHITE, border: 'none', flex: 1 }}>
              <h3 style={{ marginBottom: '20px' }}>States We Serve</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['Jharkhand', 'Bihar', 'Odisha', 'West Bengal', 'Chhattisgarh'].map(s => (
                  <span key={s} style={{
                    padding: '6px 15px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: '20px', fontSize: '0.85rem', opacity: 0.8, lineHeight: '1.5' }}>
                Expanding our footprint to ensure <strong>Jo Hare Na</strong> reaches every corner of Eastern India.
              </p>
            </div>
          </div>

          {/* Contact Form Card */}
          <div style={cardStyle}>
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{ color: EARTH, margin: 0, fontSize: '1.4rem' }}>Send a Message</h2>
              <div style={{ width: '40px', height: '3px', backgroundColor: CRIMSON, marginTop: '8px' }}></div>
            </div>
            <ContactForm />
          </div>

        </div>
      </div>

      {/* ── CSS ──────────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes ct-blobMorph {
          0%,100% { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
          25%      { border-radius: 45% 55% 38% 62% / 55% 45% 60% 40%; }
          50%      { border-radius: 55% 45% 62% 38% / 42% 58% 45% 55%; }
          75%      { border-radius: 38% 62% 48% 52% / 60% 40% 52% 48%; }
        }
        @keyframes ct-floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes ct-fadeIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ct-fade-in { animation: ct-fadeIn 0.75s ease both; }
        .ct-d1 { animation-delay: 0.10s; }
        .ct-d2 { animation-delay: 0.22s; }
        .ct-d3 { animation-delay: 0.34s; }
      `}</style>
    </div>
  );
};

export default Contact;
