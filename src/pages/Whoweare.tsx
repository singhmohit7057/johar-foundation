import React, { useEffect, useRef, useState } from 'react';
import { SEO } from '../shared/seo';
import {
  FaHandshake,
  FaBullhorn,
  FaLeaf,
  FaUsers,
  FaGraduationCap,
} from 'react-icons/fa';

/* ─── Design Tokens ─────────────────────────────────────────────────────────── */
const CRIMSON    = '#A62639';
const EARTH      = '#3C3530';
const BG         = '#F9F7F2';
const PARCHMENT  = '#F5EFE6';
const SAND       = '#E8DCC8';
const WARM_TAN   = '#C4A882';
const WHITE      = '#FFFFFF';
const SECTION_ALT = '#FAFAFA';
const EARTH_MUTED = '#5a514a';

/* ─── Count-up hook ─────────────────────────────────────────────────────────── */
function useCountUp(target: number, duration = 1800, triggered = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);
  return value;
}

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
      <path
        d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z"
        fill={bottomColor}
      />
    </svg>
  </div>
);

/* ─── Morphing Blob ──────────────────────────────────────────────────────────── */
const HeroBlob: React.FC = () => (
  <div
    aria-hidden
    style={{
      position: 'absolute',
      width: 560,
      height: 480,
      background: `radial-gradient(ellipse at 40% 50%, ${WARM_TAN}40 0%, ${CRIMSON}18 60%, transparent 100%)`,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -54%)',
      animation: 'blobMorph4b 12s ease-in-out infinite',
      filter: 'blur(52px)',
      zIndex: 0,
    }}
  />
);

/* ─── Main Component ─────────────────────────────────────────────────────────── */
const WhoWeAre: React.FC = () => {

  /* ── Stats trigger ── */
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  /* ── Hero stats trigger ── */
  const heroStatsRef = useRef<HTMLDivElement>(null);
  const [heroStatsVisible, setHeroStatsVisible] = useState(false);

  useEffect(() => {
    const observe = (ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) => {
      const el = ref.current;
      if (!el) return () => {};
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); obs.disconnect(); } },
        { threshold: 0.2 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const d1 = observe(heroStatsRef, setHeroStatsVisible);
    const d2 = observe(statsRef, setStatsVisible);
    return () => { d1(); d2(); };
  }, []);

  /* Hero count-ups */
  void useCountUp(15,    1200, heroStatsVisible);
  void useCountUp(350,   1600, heroStatsVisible);
  void useCountUp(10000, 2200, heroStatsVisible);

  /* Section 5 count-ups */
  const s5Years      = useCountUp(15,    1200, statsVisible);
  const s5SHGs       = useCountUp(350,   1600, statsVisible);
  const s5Districts  = useCountUp(8,     900,  statsVisible);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: BG, color: EARTH, overflowX: 'hidden' }}>

      <SEO
        title="Who We Are"
        description="Johar Welfare Foundation — 15+ years, 350+ SHGs, 10,000+ lives transformed across India."
      />

      {/* ── Google Fonts + Animations ─────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Lora:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 1; }
          to   { stroke-dashoffset: 0; }
        }
        .so-toc-line {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawLine 1.4s ease forwards;
          animation-delay: 0.6s;
        }
        @media (max-width: 900px) {
          .so-vertical-text { display: none !important; }
        }
        @keyframes blobMorph4b {
          0%   { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
          25%  { border-radius: 45% 55% 38% 62% / 55% 45% 60% 40%; }
          50%  { border-radius: 55% 45% 62% 38% / 42% 58% 45% 55%; }
          75%  { border-radius: 38% 62% 48% 52% / 60% 40% 52% 48%; }
          100% { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
        }

        @keyframes d4b-fadeIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes d4b-fadeInScale {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes d4b-slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes d4b-ruleDraw {
          from { width: 0; }
          to   { width: 80px; }
        }
        @keyframes d4b-dashDraw {
          from { stroke-dashoffset: 600; }
          to   { stroke-dashoffset: 0; }
        }

        .d4b-fade-in     { animation: d4b-fadeIn 0.75s ease both; }
        .d4b-fade-scale  { animation: d4b-fadeInScale 0.8s ease both; }
        .d4b-slide-right { animation: d4b-slideRight 0.7s ease both; }
        .d4b-d1 { animation-delay: 0.10s; }
        .d4b-d2 { animation-delay: 0.22s; }
        .d4b-d3 { animation-delay: 0.34s; }
        .d4b-d4 { animation-delay: 0.46s; }
        .d4b-d5 { animation-delay: 0.58s; }
        .d4b-d6 { animation-delay: 0.70s; }

        /* MVV card — illustration overlays content; content always at top */
        .d4b-mvv-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          overflow: hidden;
          position: relative;
          cursor: default;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1.5px solid rgba(0,0,0,0.05);
          height: 380px;
        }
        .d4b-mvv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.12);
        }
        /* content sits below illustration by default; rises to top on hover */
        .d4b-mvv-content {
          position: absolute;
          inset: 0 0 5px 0;
          padding: 258px 28px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          z-index: 1;
          transition: padding-top 0.38s cubic-bezier(0.4,0,0.2,1);
        }
        .d4b-mvv-card:hover .d4b-mvv-content {
          padding-top: 80px;
        }
        /* illustration overlays the content from top; fades out on hover */
        .d4b-mvv-img {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 230px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 24px 20px;
          z-index: 2;
          transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .d4b-mvv-card:hover .d4b-mvv-img {
          opacity: 0;
          transform: translateY(-16px);
          pointer-events: none;
        }
        .d4b-mvv-chip {
          font-size: 0.67rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 50px;
          margin-bottom: 14px;
          flex-shrink: 0;
        }
        .d4b-mvv-icon-wrap {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.6);
          flex-shrink: 0;
        }
        /* body text hidden until hover */
        .d4b-mvv-body {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height 0.4s ease 0.15s, opacity 0.3s ease 0.18s;
        }
        .d4b-mvv-card:hover .d4b-mvv-body {
          max-height: 220px;
          opacity: 1;
        }
        .d4b-mvv-hint {
          font-size: 0.7rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0.32;
          margin-top: 10px;
          transition: opacity 0.2s ease;
        }
        .d4b-mvv-card:hover .d4b-mvv-hint {
          opacity: 0;
        }
        @media (max-width: 768px) {
          .d4b-mvv-grid { grid-template-columns: 1fr !important; max-width: 380px; margin: 0 auto; }
        }

        /* Approach step card hover */
        .d4b-approach-card {
          transition: background 0.28s ease, transform 0.28s ease, box-shadow 0.28s ease;
        }
        .d4b-approach-card:hover {
          background: ${WHITE} !important;
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(166,38,57,0.10) !important;
        }

        /* Cert stamp hover */
        .d4b-cert-stamp {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
        }
        .d4b-cert-stamp:hover {
          transform: rotate(5deg) scale(1.06) !important;
          box-shadow: 0 12px 40px rgba(166,38,57,0.20) !important;
        }

        /* Work principle rows */
        .d4b-work-row {
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .d4b-work-row:hover {
          background: ${PARCHMENT} !important;
          transform: translateX(4px);
        }

        /* Timeline step */
        .d4b-step-dot {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .d4b-step-dot:hover {
          transform: scale(1.12);
          box-shadow: 0 0 0 6px ${CRIMSON}22 !important;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .d4b-mvv-grid { grid-template-columns: 1fr !important; }
          .d4b-approach-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .d4b-who-grid { flex-direction: column !important; }
          .wwa-split-layout { flex-direction: column !important; gap: 24px !important; }
          .wwa-text-col { display: contents !important; }
          .wwa-title { order: 1 !important; text-align: center !important; }
          .wwa-img-col { order: 2 !important; width: 100% !important; }
          .wwa-desc { order: 3 !important; text-align: center !important; }
          .d4b-photo-stack { flex-direction: row !important; }
          .d4b-stats-row { flex-direction: column !important; gap: 28px !important; }
          .d4b-cert-row { flex-wrap: wrap !important; }
          .d4b-photo-strip { height: 160px !important; }
        }
        .d4b-mobile-hero-img { display: none; }
        .d4b-mobile-tribal-img { display: none; }
        @media (max-width: 600px) {
          .d4b-mobile-hero-img { display: block; }
          .d4b-mobile-tribal-img { display: block; }
          .d4b-photo-stack { display: none !important; }
          .d4b-hero-stat-line { font-size: clamp(1.4rem, 6vw, 2.2rem) !important; }
          .d4b-approach-strip { grid-template-columns: 1fr !important; }
          .d4b-cert-row { gap: 16px !important; }
          .d4b-cert-circle { width: 130px !important; height: 130px !important; }
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════════════════════ */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: BG, overflow: 'hidden', padding: '80px 5% 60px',
      }}>
        <HeroBlob />


<div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 720 }}>
          <h1 className="d4b-fade-in d4b-d1" style={{
            fontFamily: "'Lora', serif", fontStyle: 'italic',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 600,
            color: EARTH, lineHeight: 1.25, margin: '0 0 28px',
          }}>
            Our Story,<br />
            <span style={{ color: CRIMSON }}>Our Purpose.</span>
          </h1>

          <p className="d4b-fade-in d4b-d2" style={{
            fontSize: '1.15rem', lineHeight: 1.75, color: EARTH_MUTED,
            maxWidth: 580, margin: '0 auto 48px',
          }}>
            Inspired by the spirit of "Jo Hare Na" — meaning those who never give up — our foundation
            believes that every individual deserves the opportunity to learn, grow, and build a life of dignity.
          </p>

          <p className="d4b-fade-in d4b-d2" style={{
            fontSize: '1.25rem', lineHeight: 1.8, color: EARTH,
            maxWidth: 580, margin: '0 auto 40px',
            fontFamily: "'Lora', serif", fontStyle: 'italic',
            fontWeight: 400,
          }}>
            सर्वे भवन्तु सुखिनः । सर्वे सन्तु निरामयाः ॥<br />
            <span style={{ fontSize: '0.92rem', letterSpacing: '0.03em', color: CRIMSON, fontWeight: 400 }}>"May all be happy. May all be healthy."</span>
          </p>

          <div className="d4b-fade-in d4b-d3" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 1, height: 56, background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`, borderRadius: 1 }} />
          </div>
        </div>

        {/* Floating ornaments */}
        <div aria-hidden style={{
          position: 'absolute', bottom: 80, left: '8%', width: 64, height: 64,
          borderRadius: '50% 10% 50% 10%', background: SAND, opacity: 0.7,
          animation: 'floatY 5s ease-in-out infinite',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 120, right: '10%', width: 42, height: 42,
          borderRadius: '10% 50% 10% 50%', background: SAND, opacity: 0.6,
          animation: 'floatY 7s ease-in-out infinite 1s',
        }} />
      </section>

      <div style={{ zoom: 0.9 }}>
      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 3 — MISSION / VISION / VALUES + OUR APPROACH step strip
      ══════════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: BG,
        padding: '88px 5% 96px',
        position: 'relative',
        overflow: 'hidden',
      }}>

        <div style={{ maxWidth: 1060, margin: '0 auto' }}>

          {/* ── MVV header ── */}
          <div className="d4b-fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 600,
              color: EARTH,
              margin: '0 0 16px',
            }}>
              Our Mission
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: 48, height: 3, background: CRIMSON, borderRadius: 2 }} />
            </div>
          </div>

          {/* ── MVV cards ── */}
          <div
            className="d4b-mvv-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
          >
            {[
              {
                chipLabel: 'Skill Development',
                heading: 'Skill Development',
                body: 'We train youth and women in practical, market-relevant skills — from agriculture and digital literacy to finance and vocational trades — so they can earn, grow, and lead independently.',
                accent: CRIMSON,
                bgGradient: 'linear-gradient(140deg, #fdf1f3 0%, #f3ccd3 100%)',
                Icon: FaHandshake,
                delay: 'd4b-d1',
              },
              {
                chipLabel: 'Education',
                heading: 'Education',
                body: 'Quality education changes everything. We work to ensure children and young adults in underserved communities have access to learning that is relevant, accessible, and empowering.',
                accent: '#2196a0',
                bgGradient: 'linear-gradient(140deg, #e6f6f7 0%, #b8e0e4 100%)',
                Icon: FaGraduationCap,
                delay: 'd4b-d2',
              },
              {
                chipLabel: 'Employment',
                heading: 'Employment',
                body: 'A job is more than income — it is dignity. We connect trained individuals to livelihood opportunities, self-employment pathways, and market networks that create lasting financial independence.',
                accent: '#7B4F2E',
                bgGradient: 'linear-gradient(140deg, #f8f0ea 0%, #e5ccb5 100%)',
                Icon: FaUsers,
                delay: 'd4b-d3',
              },
            ].map(({ chipLabel, heading, body, accent, bgGradient, Icon, delay }) => (
              <div key={chipLabel} className={`d4b-fade-in ${delay} d4b-mvv-card`}>

                {/* Illustration area */}
                <div className="d4b-mvv-img" style={{ background: bgGradient, minHeight: 200 }}>
                  <div className="d4b-mvv-icon-wrap" style={{ boxShadow: `0 4px 20px ${accent}30` }}>
                    <Icon style={{ fontSize: 40, color: accent }} />
                  </div>
                </div>

                {/* Content */}
                <div className="d4b-mvv-content">
                  <h3 style={{
                    fontFamily: "'Lora', serif",
                    fontStyle: 'italic',
                    fontSize: '1.18rem',
                    fontWeight: 600,
                    color: EARTH,
                    margin: '0 0 12px',
                    lineHeight: 1.3,
                  }}>{heading}</h3>
                  <div className="d4b-mvv-divider" style={{ width: 36, height: 3, background: accent, borderRadius: 2, marginBottom: 14 }} />
                  <div className="d4b-mvv-body">
                    <p style={{ fontSize: '0.93rem', lineHeight: 1.8, color: EARTH_MUTED, margin: 0 }}>{body}</p>
                  </div>
                  <span className="d4b-mvv-hint" style={{ color: accent }}>hover to read ↑</span>
                </div>

                {/* Colored bottom accent */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, background: accent, zIndex: 3 }} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Impact section commented out — foundation is new (2026), stats not yet applicable */}
      {false && (
      <section style={{
        background: SECTION_ALT,
        padding: '88px 5%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>

          {/* Section header */}
          <div className="d4b-fade-in" style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 800,
              color: EARTH,
              margin: 0,
            }}>
              Impact
            </h2>
          </div>

          {/* Stats — 3 bordered boxes */}
          <div ref={statsRef} />
          <div
            className="d4b-stats-row"
            style={{
              display: 'flex',
              gap: 24,
              marginBottom: 72,
            }}
          >
            {[
              {
                count: s5Years,
                suffix: '+',
                label: 'Years of Service',
                sub: 'Continuously since 2009',
              },
              {
                count: s5SHGs,
                suffix: '+',
                label: 'Self-Help Groups',
                sub: 'Active across the country',
              },
              {
                count: s5Districts,
                suffix: '',
                label: 'Districts Reached',
                sub: 'Across multiple states',
              },
            ].map(({ count, suffix, label, sub }) => (
              <div
                key={label}
                className="d4b-fade-in"
                style={{
                  flex: 1,
                  background: WHITE,
                  border: `1px solid #e8e0d8`,
                  borderRadius: 16,
                  padding: '40px 24px',
                  textAlign: 'center',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = CRIMSON;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 32px ${CRIMSON}18`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#e8e0d8';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontFamily: "'Lora', serif",
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: 'clamp(2.8rem, 5vw, 3.8rem)',
                  color: CRIMSON,
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {count.toLocaleString()}{suffix}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.02rem',
                  fontWeight: 700,
                  color: EARTH,
                  marginBottom: 4,
                }}>
                  {label}
                </div>
                <div style={{
                  fontSize: '0.84rem',
                  color: EARTH_MUTED,
                }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>

          {/* HOW WE WORK — methodology rows (commented out for future use) */}
          {false && (
            <div className="d4b-fade-in d4b-d2" style={{ marginBottom: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  {
                    Icon: FaUsers,
                    title: 'Community Mobilisation',
                    body: 'We build Self-Help Groups as the foundation — women leading households, villages, and entire futures with collective power.',
                  },
                  {
                    Icon: FaGraduationCap,
                    title: 'Capacity Building',
                    body: 'Training in agriculture, finance, health, and digital literacy — transferring skills that compound across generations.',
                  },
                  {
                    Icon: FaHandshake,
                    title: 'Government Convergence',
                    body: 'Bridging communities to the entitlements they\'ve earned: MGNREGS, PDS, PMFBY, and many more.',
                  },
                  {
                    Icon: FaBullhorn,
                    title: 'Advocacy & Policy',
                    body: 'Amplifying community voices at local, state, and national levels to shape policies that reflect real lives.',
                  },
                ].map(({ Icon, title, body }) => (
                  <div
                    key={title}
                    className="d4b-work-row"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 20,
                      padding: '20px 24px',
                      borderRadius: 12,
                      borderLeft: `4px solid ${CRIMSON}`,
                      background: BG,
                      cursor: 'default',
                    }}
                  >
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: `${CRIMSON}14`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: 2,
                    }}>
                      <Icon size={18} color={CRIMSON} />
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: EARTH,
                        marginBottom: 6,
                        lineHeight: 1.2,
                      }}>
                        {title}
                      </h4>
                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.75,
                        color: EARTH_MUTED,
                        margin: 0,
                      }}>
                        {body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      )}

      </div>{/* end zoom wrapper */}

      {/* ══════════════════════════════════════════════════════════════════════════
          FULL-WIDTH BANNER PHOTO — /women.jpg
      ══════════════════════════════════════════════════════════════════════════ */}
      <div style={{ position: 'relative', lineHeight: 0 }}>
        <img
          src="/women.jpg"
          alt="Women of Johar Welfare Foundation"
          style={{
            width: '100%',
            height: 400,
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            borderRadius: 0,
          }}
        />
        {/* Overlay with quote */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(60,53,48,0.72) 0%, rgba(60,53,48,0.20) 100%)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 6%',
        }}>
          <div>
            <p style={{
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: WHITE,
              maxWidth: 560,
              lineHeight: 1.65,
              margin: '0 0 12px',
            }}>
              "We measure success not in reports, but in the strength of hands
              that no longer need to ask for help."
            </p>
            <div style={{
              width: 52,
              height: 3,
              background: CRIMSON,
              borderRadius: 2,
            }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: -72, position: 'relative', zIndex: 2 }}>
        <WaveDivider topColor="transparent" bottomColor={BG} />
      </div>

      <div style={{ zoom: 0.9 }}>
      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 5 (formerly 6) — CERTIFICATIONS: Stamp-style circles
      ══════════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: BG,
        padding: '88px 5% 100px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', bottom: -40, right: -40,
          width: 320, height: 280,
          background: SAND,
          opacity: 0.55,
          borderRadius: '50%',
          filter: 'blur(48px)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div className="d4b-fade-in" style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 800,
              color: EARTH,
              margin: 0,
            }}>
              Our Certifications
            </h2>
          </div>

          {/* Stamp circles row */}
          <div
            className="d4b-cert-row"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            {[
              {
                code: '12A',
                name: 'Tax Exemption',
                authority: 'Income Tax Dept.',
                year: '2009',
                delay: 'd4b-d1',
              },
              {
                code: '80G',
                name: 'Deductible Donations',
                authority: 'Income Tax Dept.',
                year: '2010',
                delay: 'd4b-d2',
              },
              {
                code: 'PAN',
                name: 'Permanent Account Number',
                authority: 'Income Tax Dept.',
                year: '2013',
                delay: 'd4b-d3',
              },
              {
                code: 'COI',
                name: 'Certificate of Incorporation',
                authority: 'Min. of Corporate Affairs',
                year: '2018',
                delay: 'd4b-d4',
              },
              {
                code: 'NITI',
                name: 'DARPAN Registered',
                authority: 'NITI Aayog',
                year: '2020',
                delay: 'd4b-d5',
              },
            ].map(({ code, name, authority, delay }) => (
              <div
                key={code}
                className={`d4b-fade-in ${delay} d4b-cert-stamp d4b-cert-circle`}
                style={{
                  width: 165,
                  height: 165,
                  borderRadius: '50%',
                  border: `1.5px solid #c4b8ac`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  background: PARCHMENT,
                  position: 'relative',
                  cursor: 'default',
                  padding: '8px',
                }}
              >
                {/* Inner dashed ring */}
                <div style={{
                  position: 'absolute',
                  inset: 6,
                  borderRadius: '50%',
                  border: `1.5px dashed ${WARM_TAN}`,
                  pointerEvents: 'none',
                }} />

                {/* Content */}
                <div style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 700,
                  fontSize: code.length > 3 ? '1.3rem' : '1.7rem',
                  color: CRIMSON,
                  lineHeight: 1,
                  marginBottom: 4,
                  letterSpacing: '-0.02em',
                }}>
                  {code}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  color: EARTH,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  lineHeight: 1.3,
                  marginBottom: 2,
                  maxWidth: 110,
                }}>
                  {name}
                </div>
                <div style={{
                  fontSize: '0.58rem',
                  color: EARTH_MUTED,
                  lineHeight: 1.35,
                  maxWidth: 100,
                }}>
                  {authority}
                </div>
              </div>
            ))}
          </div>

          {/* Closing mark */}
          <div style={{ textAlign: 'center', marginTop: 72 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <div style={{ width: 36, height: 2, background: WARM_TAN, borderRadius: 1 }} />
              <FaLeaf size={16} color={CRIMSON} style={{ opacity: 0.6 }} />
              <div style={{ width: 36, height: 2, background: WARM_TAN, borderRadius: 1 }} />
            </div>
            <p style={{
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
              fontSize: '1.05rem',
              color: EARTH_MUTED,
              maxWidth: 480,
              margin: '20px auto 0',
              lineHeight: 1.8,
            }}>
              Accountable to the communities we serve — and to every rupee of trust placed in us.
            </p>
          </div>
        </div>
      </section>

      </div>{/* end zoom wrapper — certifications */}
    </div>
  );
};

export default WhoWeAre;
