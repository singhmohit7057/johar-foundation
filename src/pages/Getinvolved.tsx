import React, { useState } from 'react';
import { SEO } from '../shared/seo';
import { VolunteerForm } from '../components/volunteerform';
import {
  FaHandshake, FaChevronDown, FaChevronUp,
} from 'react-icons/fa6';

const CRIMSON     = '#A62639';
const EARTH       = '#3C3530';
const BG          = '#F9F7F2';
const SAND        = '#E8DCC8';
const WARM_TAN    = '#C4A882';
const WHITE       = '#FFFFFF';
const SECTION_ALT = '#FAFAFA';
const EARTH_MUTED = '#5a514a';

/* ─── Wave Divider ───────────────────────────────────────────────────────────── */
const WaveDivider: React.FC<{ topColor: string; bottomColor: string; flip?: boolean }> = ({
  topColor, bottomColor, flip = false,
}) => (
  <div style={{ lineHeight: 0, background: topColor, transform: flip ? 'scaleY(-1)' : undefined }}>
    <svg
      viewBox="0 0 1440 72"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: 72 }}
    >
      <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill={bottomColor} />
    </svg>
  </div>
);


export const GetInvolved: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    { q: "Is there a minimum age to volunteer?", a: "Yes, volunteers must be at least 18 years old. For those under 18, parental consent is required." },
    { q: "Do I need specific skills?", a: "While specific skills help, the primary requirement is a passion for service. We provide training for specific programs." },
    { q: "Can I volunteer remotely?", a: "Yes! Our Digital Advocacy and Content Creation teams work entirely remotely." },
    { q: "How do organizations partner with you?", a: "Corporates and NGOs can reach out via the 'Partner With Us' section for CSR collaborations." }
  ];

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO title="Get Involved" description="Volunteer, partner, or learn more about helping Johar Foundation." />

      {/* ── Hero Header ──────────────────────────────────────────────────────── */}
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
          animation: 'gi-blobMorph 12s ease-in-out infinite',
          filter: 'blur(52px)',
          zIndex: 0,
          borderRadius: '62% 38% 55% 45% / 48% 52% 48% 52%',
        }} />

        {/* Floating ornaments */}
        <div aria-hidden style={{
          position: 'absolute', bottom: 80, left: '8%',
          width: 64, height: 64,
          borderRadius: '50%', background: SAND, opacity: 0.7,
          animation: 'gi-floatY 5s ease-in-out infinite',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 120, right: '10%',
          width: 42, height: 42,
          borderRadius: '10% 50% 10% 50%', background: SAND, opacity: 0.6,
          animation: 'gi-floatY 7s ease-in-out infinite 1s',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="gi-fade-in gi-d1" style={{
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: EARTH,
            lineHeight: 1.25,
            margin: '8px 0 24px',
          }}>
            Get <span style={{ color: CRIMSON }}>Involved</span>
          </h1>
          <p className="gi-fade-in gi-d2" style={{
            fontSize: '1.15rem',
            color: EARTH_MUTED,
            maxWidth: 540,
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}>
            You don't need a resume or a plan. People across India don't need your credentials — they need you to show up. That's what our volunteers do.
          </p>
          <p className="gi-fade-in gi-d2" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.6,
            maxWidth: 580, margin: '0 auto 40px',
            fontFamily: "'Lora', serif", fontStyle: 'italic', fontWeight: 400,
            color: EARTH_MUTED,
          }}>
            उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत<br />
            <span style={{ fontSize: '0.92rem', letterSpacing: '0.03em', color: CRIMSON, fontWeight: 400 }}>"Arise, awake, and stop not till the goal is reached."</span>
          </p>
          <div className="gi-fade-in gi-d3" style={{
            width: 1, height: 56,
            background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`,
            margin: '0 auto', borderRadius: 1,
          }} />
        </div>
      </section>


      {/* ── Volunteer Section ──────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: '40px 5%', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="vol-ursha-wrapper" style={{
          maxWidth: '1200px', margin: '0 auto', width: '100%',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
        }}>

          {/* LEFT — overlapping polaroids + text */}
          <div>
            {/* 2×2 polaroid grid with overlap */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, marginBottom: 28, padding: '10px' }}>
              {[
                { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', rot: '-4deg', x: 8, y: 0 },
                { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80', rot: '3deg', x: -8, y: 10 },
                { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80', rot: '2deg', x: 12, y: -10 },
                { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', rot: '-3deg', x: -6, y: -4 },
              ].map(({ src, rot, x, y }, i) => (
                <div key={i} className="gi-polaroid" style={{
                  background: '#fff',
                  padding: '6px 6px 24px',
                  borderRadius: 3,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.14)',
                  transform: `rotate(${rot}) translate(${x}px, ${y}px)`,
                  zIndex: i === 2 ? 3 : i,
                  position: 'relative',
                  animation: `gi-floatY ${3 + i * 0.8}s ease-in-out infinite ${i * 0.5}s`,
                }}>
                  <img src={src} alt="volunteer" style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block', borderRadius: 2 }} />
                </div>
              ))}
            </div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, color: EARTH, margin: '0 0 12px' }}>
              Be Part of the Mission
            </h2>
            <p style={{ fontSize: '0.92rem', color: EARTH_MUTED, lineHeight: 1.75, margin: '0 0 20px' }}>
              Johar Welfare Foundation works at the grassroots — in classrooms, health camps, and self-help groups. Our volunteers are not helpers; they are the mission.
            </p>
            {[
              'Education, livelihoods, and women\'s empowerment — pick your ground.',
              'Work alongside experienced field teams making real, measurable impact.',
              'Your skills find their highest purpose here.',
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                <span style={{ color: CRIMSON, fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.6 }}>✦</span>
                <span style={{ fontSize: '0.88rem', color: EARTH, lineHeight: 1.6, fontWeight: 600 }}>{text}</span>
              </div>
            ))}
          </div>

          {/* RIGHT — form centered */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: WHITE, borderRadius: 10, padding: '32px 32px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', width: '100%', maxWidth: 480 }}>
              <VolunteerForm />
            </div>
          </div>

        </div>
      </section>

      {/* Partner and FAQ sections hidden for now */}
      {false && (
      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />
      )}
      {false && (
      <section style={{ background: SECTION_ALT, padding: '60px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <FaHandshake size={50} color={CRIMSON} style={{ marginBottom: '20px' }} />
          <h2 className="section-title">Partner With Us</h2>
          <p className="section-subtitle" style={{ marginBottom: '30px' }}>
            We collaborate with corporations and government bodies to scale impact.
          </p>
          <a
            href="mailto:support@joharfoundation.com"
            style={{
              display: 'inline-block',
              padding: '12px 35px',
              backgroundColor: EARTH,
              color: WHITE,
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.9rem'
            }}
          >
            DISCUSS PARTNERSHIP
          </a>
        </div>
      </section>
      )}

      {false && (
      <WaveDivider topColor={SECTION_ALT} bottomColor={BG} />
      )}

      {false && (
      <section style={{ background: BG, padding: '60px 5%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Common Questions</h2>
          </div>
          {faqData.map((faq, index) => (
            <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #e8e0d8' }}>
              <div
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', cursor: 'pointer', alignItems: 'center' }}
              >
                <h4 style={{ margin: 0, color: EARTH, fontSize: '1rem' }}>{faq.q}</h4>
                {activeFaq === index ? <FaChevronUp color={CRIMSON} /> : <FaChevronDown color={CRIMSON} />}
              </div>
              {activeFaq === index && (
                <div style={{ paddingBottom: '15px', color: EARTH_MUTED, lineHeight: '1.6', fontSize: '0.9rem' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      )}

      {/* ── CSS ──────────────────────────────────────────────────────────────── */}
      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        @media (max-width: 768px) {
          .vol-ursha-wrapper { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        .section-title { font-size: 2rem; color: ${EARTH}; margin-bottom: 10px; }
        .section-subtitle { font-size: 0.95rem; color: ${EARTH_MUTED}; max-width: 700px; margin: 0 auto; }
        .impact-grid { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-top: 30px; }
        .card-h3 { font-size: 1.1rem; margin: 0; font-weight: bold; }
        .card-p { font-size: 0.85rem; line-height: 1.5; opacity: 0.9; }

        @keyframes gi-blobMorph {
          0%,100% { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
          25%      { border-radius: 45% 55% 38% 62% / 55% 45% 60% 40%; }
          50%      { border-radius: 55% 45% 62% 38% / 42% 58% 45% 55%; }
          75%      { border-radius: 38% 62% 48% 52% / 60% 40% 52% 48%; }
        }

        @keyframes gi-floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        @keyframes gi-fadeIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .gi-fade-in { animation: gi-fadeIn 0.75s ease both; }
        .gi-d1 { animation-delay: 0.10s; }
        .gi-d2 { animation-delay: 0.22s; }
        .gi-d3 { animation-delay: 0.34s; }

        .role-display-card:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03) !important;
          border-color: ${WARM_TAN} !important;
        }

        .vol-split-wrapper { display: flex; }
        .vol-left-panel { flex: 0 0 42%; font-family: 'DM Sans', sans-serif; }
        .vol-right-panel { flex: 1; font-family: 'DM Sans', sans-serif; }
        @media (max-width: 900px) {
          .vol-split-wrapper { flex-direction: column; min-height: unset !important; }
          .vol-left-panel { flex: none !important; width: 100% !important; padding: 48px 32px !important; }
          .vol-right-panel { flex: none !important; width: 100% !important; padding: 40px 28px !important; }
        }
        @media (max-width: 480px) {
          .vol-left-panel { padding: 36px 24px !important; }
          .vol-right-panel { padding: 32px 20px !important; }
        }

        @media (max-width: 992px) {
          .responsive-h1 { font-size: 2.2rem; }
          .section-title { font-size: 1.7rem; text-align: center !important; }
          .impact-grid { flex-direction: column; align-items: center; }
          .impact-grid > div { width: 100%; max-width: 450px; }
        }
      `}</style>
    </div>
  );
};
