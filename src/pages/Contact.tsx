import React, { useState } from 'react';
import { SEO } from '../shared/seo';
import { ContactForm } from '../components/contactform';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGraduationCap, FaUsers, FaBriefcase, FaHandshake, FaLeaf, FaBookOpen, FaStethoscope, FaGlobe } from 'react-icons/fa';

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
    { platform: 'whatsapp', icon: <FaWhatsapp />, url: 'https://wa.me/919117115050' },
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


          <div style={{
            width: 1, height: 40,
            background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`,
            margin: '0 auto', borderRadius: 1,
          }} />
        </div>
      </section>

      <WaveDivider topColor={BG} bottomColor={BG} />

      {/* ── Contact Cards ────────────────────────────────────────────────────── */}
      <div style={{ padding: '40px 5%', background: BG, position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Evenly distributed but randomized icons — grid with jitter */}
        {(() => {
          const icons = [FaGraduationCap, FaHandshake, FaUsers, FaGlobe, FaBriefcase, FaLeaf, FaHandshake, FaStethoscope, FaBookOpen];
          const cols = 12;
          const rows = 10;
          const cellW = 100 / cols;
          const cellH = 100 / rows;
          const items: React.ReactNode[] = [];
          let idx = 0;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const jx = ((idx * 17 + 7) % 11) - 5;
              const jy = ((idx * 13 + 3) % 11) - 5;
              const top = r * cellH + cellH / 2 + jy * 0.8;
              const left = c * cellW + cellW / 2 + jx * 0.6;
              const Icon = icons[((r * 7 + c * 3) + idx) % icons.length];
              const size = 13 + (idx % 4) * 3;
              const rot = ((idx * 23 + 11) % 60) - 30;
              const dur = 5 + (idx % 3) * 2;
              const delay = (idx % 5) * 0.8;
              items.push(
                <Icon key={idx} aria-hidden style={{
                  position: 'absolute',
                  top: `${Math.max(1, Math.min(97, top))}%`,
                  left: `${Math.max(1, Math.min(97, left))}%`,
                  fontSize: size,
                  color: `${CRIMSON}14`,
                  transform: `rotate(${rot}deg)`,
                  animation: `ct-iconFloat ${dur}s ease-in-out infinite ${delay}s`,
                }} />
              );
              idx++;
            }
          }
          return items;
        })()}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(350px, 100%), 1fr))',
          gap: '40px',
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>

          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{
              background: '#fff',
              borderRadius: 16,
              overflow: 'hidden',
              border: '1px solid #eaeaea',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Crimson header */}
              <div style={{
                background: CRIMSON,
                padding: '22px 28px',
                color: '#fff',
              }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800 }}>Connect With Us</h3>
                <p style={{ margin: '6px 0 0', fontSize: '0.82rem', opacity: 0.8 }}>We'd love to hear from you</p>
              </div>

              {/* Contact details */}
              <div style={{ padding: '28px 28px 20px', display: 'flex', flexDirection: 'column', gap: '22px', flex: 1, justifyContent: 'center' }}>
                {[
                  { icon: '📍', title: 'Office', detail: 'Dream Height Building, Bistupur, Jharkhand' },
                  { icon: '📞', title: 'Phone', detail: '+91 9117115050' },
                  { icon: '✉️', title: 'Email', detail: 'info@joharfoundation.com' },
                ].map(({ icon, title, detail }) => (
                  <div key={title} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: `${CRIMSON}10`, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem', flexShrink: 0,
                    }}>{icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: EARTH, fontSize: '0.92rem' }}>{title}</div>
                      <div style={{ fontSize: '0.85rem', color: EARTH_MUTED, lineHeight: 1.5 }}>{detail}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social footer */}
              <div style={{ padding: '0 28px 24px' }}>
                <hr style={{ margin: '0 0 16px', border: 'none', borderTop: `1px solid #e8e0d8` }} />
                <h4 style={{ marginBottom: '12px', color: EARTH, fontSize: '0.88rem', fontWeight: 700 }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '14px' }}>
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
        @keyframes ct-iconFloat {
          0%, 100% { transform: translateY(0px) rotate(var(--r, 0deg)); }
          50%      { transform: translateY(-6px) rotate(var(--r, 0deg)); }
        }
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
        @media (max-width: 600px) {
          .ct-hero-title { font-size: 2rem !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
