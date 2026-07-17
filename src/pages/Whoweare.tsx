import React, { useEffect, useRef, useState } from 'react';
import { SEO } from '../shared/seo';
import {
  FaHandshake,
  FaBullhorn,
  FaLeaf,
  FaUsers,
  FaGraduationCap,
  FaAward,
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
        description="Johar Foundation — 15+ years, 350+ SHGs, 10,000+ lives transformed across India."
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

        /* MVV bordered card hover */
        .d4b-mvv-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }
        .d4b-mvv-card:hover {
          border-color: rgba(166,38,57,0.35) !important;
          box-shadow: 0 8px 28px rgba(166,38,57,0.10) !important;
          transform: translateY(-4px);
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
      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* Mobile-only hero image */}
      <div className="d4b-mobile-hero-img" style={{ background: SECTION_ALT }}>
        <img
          src="/whoweare.jpg"
          alt="Johar Foundation community work"
          style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 2 — WHO WE ARE: 2-col + photo stack
      ══════════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: SECTION_ALT,
        padding: '88px 5%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Soft blob bg */}
        <div aria-hidden style={{
          position: 'absolute', top: -80, right: -80,
          width: 360, height: 300,
          background: WARM_TAN,
          opacity: 0.10,
          borderRadius: '62% 38% 55% 45% / 48% 52% 48% 52%',
          filter: 'blur(44px)',
          pointerEvents: 'none',
        }} />

        <div
          className="d4b-who-grid"
          style={{
            display: 'flex',
            gap: 64,
            maxWidth: 1100,
            margin: '0 auto',
            alignItems: 'center',
          }}
        >
          {/* Rotated vertical label */}
          <div className="so-vertical-text" style={{
            flexShrink: 0, writingMode: 'vertical-rl',
            textOrientation: 'mixed', transform: 'rotate(180deg)',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.75rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: WARM_TAN,
            fontWeight: 700, opacity: 0.7, userSelect: 'none',
            paddingRight: 16, borderRight: `2px solid ${WARM_TAN}40`,
          }}>Johar Foundation</div>

          {/* Left — text */}
          <div className="d4b-fade-in" style={{ flex: '1 1 52%' }}>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)',
              fontWeight: 800,
              color: EARTH,
              lineHeight: 1.2,
              marginBottom: 28,
            }}>
              Rooted in India,<br />
              <span style={{ color: CRIMSON }}>Driven by Purpose.</span>
            </h2>

            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: EARTH_MUTED,
              marginBottom: 18,
              maxWidth: 520,
            }}>
              India is a land rich in culture, heritage, natural resources, and resilient
              communities. Yet many children remain out of school, women lack economic
              opportunities, youth struggle to find employment, and rural communities continue
              to face challenges in accessing quality education, healthcare, and sustainable livelihoods.
            </p>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: EARTH_MUTED,
              marginBottom: 18,
              maxWidth: 520,
            }}>
              Johar Foundation was established to bridge these gaps through community-led
              development — focusing on long-term opportunities that empower individuals to
              become self-reliant, confident, and capable of transforming their own communities.
            </p>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: 1.8,
              color: EARTH_MUTED,
              marginBottom: 36,
              maxWidth: 520,
            }}>
              We believe that real development begins at the grassroots. Every village, every
              family, and every individual has the potential to create change when given the
              right support, knowledge, and opportunities.
            </p>

            {/* Tag pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {[
                'SHG Formation',
                'Marginalised Communities',
                'Gender Equity',
                'Pan India',
                'Livelihood',
                'Rights-Based',
              ].map((tag) => (
                <span key={tag} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  color: EARTH,
                  background: SAND,
                  border: `1.5px solid ${WARM_TAN}`,
                  borderRadius: 24,
                  padding: '5px 14px',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* SVG hand-drawn wave line */}
            <div style={{ marginTop: 32, display: 'flex', gap: 12, alignItems: 'center' }}>
              <svg width="140" height="18" viewBox="0 0 140 18" aria-hidden>
                <path
                  d="M2,10 C20,4 35,16 55,8 C75,2 90,14 115,8 C125,5 132,10 138,8"
                  stroke={WARM_TAN} strokeWidth="2.5" fill="none"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="so-toc-line"
                />
              </svg>
              <span style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '0.9rem', color: WARM_TAN }}>
                15+ years of service
              </span>
            </div>
          </div>

          {/* Right — stacked polaroid photos */}
          <div
            className="d4b-photo-stack"
            style={{
              flex: '1 1 44%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 0,
              paddingTop: 20,
            }}
          >
            {/* Top photo */}
            <div
              className="d4b-fade-scale d4b-d1"
              style={{
                background: WHITE,
                padding: '7px 7px 24px 7px',
                borderRadius: 18,
                boxShadow: '0 8px 32px rgba(60,53,48,0.16)',
                transform: 'rotate(-2deg)',
                zIndex: 2,
                position: 'relative',
                marginBottom: -36,
                border: `6px solid ${WHITE}`,
                width: 'min(340px, 90%)',
              }}
            >
              <img
                src="/whoweare.jpg"
                alt="Johar Foundation community work"
                style={{
                  width: '100%',
                  height: 220,
                  objectFit: 'cover',
                  borderRadius: 12,
                  display: 'block',
                }}
              />
            </div>

            {/* Bottom photo */}
            <div
              className="d4b-fade-scale d4b-d2"
              style={{
                background: WHITE,
                padding: '7px 7px 24px 7px',
                borderRadius: 18,
                boxShadow: '0 12px 40px rgba(60,53,48,0.20)',
                transform: 'rotate(2deg)',
                zIndex: 1,
                border: `6px solid ${WHITE}`,
                width: 'min(320px, 86%)',
                marginLeft: 28,
              }}
            >
              <img
                src="/tribal.jpg"
                alt="Tribal community in Jharkhand"
                style={{
                  width: '100%',
                  height: 210,
                  objectFit: 'cover',
                  borderRadius: 12,
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-only tribal image */}
      <div className="d4b-mobile-tribal-img" style={{ background: SECTION_ALT }}>
        <img
          src="/tribal.jpg"
          alt="Tribal community"
          style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
        />
      </div>

      <WaveDivider topColor={SECTION_ALT} bottomColor={BG} />

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
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
              fontWeight: 800,
              color: EARTH,
              margin: 0,
            }}>
              Mission, Vision &amp; Values
            </h2>
          </div>

          {/* ── 3 bordered MVV cards ── */}
          <div
            className="d4b-mvv-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 28,
            }}
          >
            {[
              {
                letter: 'M',
                chipLabel: 'Mission',
                heading: 'Mobilising Communities',
                body: 'To improve lives by mobilising the caring power of communities around the country to advance the common good.',
                delay: 'd4b-d1',
              },
              {
                chipLabel: 'Vision',
                heading: 'Breaking Out of Poverty',
                body: 'A world where people break out of poverty to lead fulfilling, rewarding lives and contribute positively to their communities.',
                delay: 'd4b-d2',
              },
              {
                chipLabel: 'Values',
                heading: 'People Drive Change',
                body: 'We believe that all people are capable of driving the change they need.',
                delay: 'd4b-d3',
              },
            ].map(({ chipLabel, heading, body, delay }) => (
              <div
                key={chipLabel}
                className={`d4b-fade-in ${delay} d4b-mvv-card`}
                style={{
                  position: 'relative',
                  background: WHITE,
                  border: `1px solid #e8e0d8`,
                  borderRadius: 16,
                  padding: '36px 30px 32px',
                  overflow: 'hidden',
                }}
              >
                {/* Label chip */}
                <span style={{
                  display: 'inline-block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: WHITE,
                  background: CRIMSON,
                  borderRadius: 20,
                  padding: '4px 12px',
                  marginBottom: 18,
                }}>
                  {chipLabel}
                </span>

                <h3 style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: EARTH,
                  marginBottom: 14,
                  lineHeight: 1.3,
                }}>
                  {heading}
                </h3>
                <p style={{
                  fontSize: '0.97rem',
                  lineHeight: 1.82,
                  color: EARTH_MUTED,
                  margin: 0,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 4 (formerly 5) — STATS + HOW WE WORK
      ══════════════════════════════════════════════════════════════════════════ */}
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
              Impact &amp; Methodology
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

          {/* How We Work — 4 principle rows */}
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
        </div>
      </section>

      </div>{/* end zoom wrapper */}

      {/* ══════════════════════════════════════════════════════════════════════════
          FULL-WIDTH BANNER PHOTO — /women.jpg
      ══════════════════════════════════════════════════════════════════════════ */}
      <div style={{ position: 'relative', lineHeight: 0 }}>
        <img
          src="/women.jpg"
          alt="Women of Johar Foundation"
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
                code: 'FCRA',
                name: 'Foreign Contributions',
                authority: 'Ministry of Home Affairs',
                year: '2013',
                delay: 'd4b-d3',
              },
              {
                code: 'CSR',
                name: 'CSR Eligible',
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
            ].map(({ code, name, authority, year, delay }) => (
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
                <div style={{
                  marginTop: 5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}>
                  <FaAward size={9} color={CRIMSON} />
                  <span style={{
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    color: CRIMSON,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                    Since {year}
                  </span>
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
