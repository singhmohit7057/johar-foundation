import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { footprintRegions } from '../data/footprintRegions';

import {
  FaArrowRight, FaUsers, FaGraduationCap,
  FaHeartPulse, FaHandHoldingHeart,
  FaGlobe, FaVenus, FaBookOpen, FaBriefcase, FaStethoscope, FaChartBar,
  FaUserShield
} from 'react-icons/fa6';

// Multi-Ticker Marquee Continuous Items Array Source
const sliderSectors = [
  { label: 'TOURISM DEVELOPMENT', icon: <FaGlobe /> },
  { label: 'TRIBAL AFFAIRS', icon: <FaUsers /> },
  { label: "WOMEN'S EMPOWERMENT", icon: <FaVenus /> },
  { label: 'YOUTH AFFAIRS', icon: <FaHandHoldingHeart /> },
  { label: 'SKILL DEVELOPMENT', icon: <FaBriefcase /> },
  { label: 'EDUCATION & LITERACY', icon: <FaBookOpen /> },
  { label: 'HEALTH & FAMILY WELFARE', icon: <FaStethoscope /> },
  { label: 'HUMAN RIGHTS & SPORTS', icon: <FaChartBar /> }
];

// footprintRegions imported from src/data/footprintRegions.ts

const WaveDivider: React.FC<{ topColor: string; bottomColor: string; flip?: boolean }> = ({
  topColor, bottomColor, flip = false,
}) => (
  <div style={{ lineHeight: 0, background: topColor, transform: flip ? 'scaleX(-1)' : undefined }}>
    <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: 72 }}>
      <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill={bottomColor} />
    </svg>
  </div>
);

/* ==========================================================================
   HERO — POLAROID DENSE (Warm Red Blob)
   39/61 split: compact text left, scattered polaroid photos right
   Images cycle through public folder; swap src paths to use real photos.
   ========================================================================== */

const polaroidCards = [
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', caption: 'Tribal Youth',   rot: '-7deg', top: '10px',  left: '20px',  z: 3  },
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80', caption: 'Education',     rot: '5deg',  top: '30px',  left: '200px', z: 6  },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80', caption: 'Community',     rot: '-3deg', top: '20px',  left: '400px', z: 4  },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', caption: 'Women Leaders', rot: '4deg',  top: '150px', left: '80px',  z: 7  },
  { src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&q=80',    caption: 'Skill Dev',     rot: '-6deg', top: '170px', left: '270px', z: 9  },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80', caption: 'Jharkhand',    rot: '2deg',  top: '160px', left: '460px', z: 5  },
  { src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80', caption: 'Odisha',        rot: '-2deg', top: '310px', left: '30px',  z: 8  },
  { src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&q=80', caption: 'Bihar',         rot: '7deg',  top: '330px', left: '210px', z: 2  },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80', caption: 'Self-Reliance', rot: '-5deg', top: '320px', left: '420px', z: 10 },
  { src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&q=80',    caption: 'Impact',        rot: '3deg',  top: '200px', left: '150px', z: 1  },
];

const HeroCopyContent = ({ size }: { size: 'mobile' | 'tablet' | 'desktop' }) => (
  <>
    {/* Sanskrit shloka */}
    <p style={{
      fontFamily: "'Lora', Georgia, serif",
      fontSize:
        size === 'mobile'  ? '1.05rem' :
        size === 'tablet'  ? 'clamp(1.1rem, 2vw, 1.4rem)' :
                             'clamp(1.3rem, 1.6vw, 1.7rem)',
      fontWeight: 500, fontStyle: 'italic',
      lineHeight: 1.35, color: theme.colors.secondary,
      margin: 0, opacity: 0.78,
    }}>
      सेवा परमो धर्मः
    </p>

    {/* Main tagline */}
    <h1 style={{
      fontSize:
        size === 'mobile'  ? 'clamp(1.2rem, 4.5vw, 1.5rem)' :
        size === 'tablet'  ? 'clamp(1.4rem, 2.8vw, 1.9rem)' :
                             'clamp(1.8rem, 2.4vw, 2.4rem)',
      fontWeight: 500, lineHeight: 1.25, color: theme.colors.secondary,
      letterSpacing: '-0.02em',
      margin: size === 'mobile' ? '7px 0 0' : size === 'tablet' ? '8px 0 0' : '10px 0 0',
    }}>
      {size === 'mobile'
        ? <>Together, we're not just reaching lives — we're <span>transforming them.</span></>
        : <>Together, we're not just reaching lives —<br />we're <span>transforming them.</span></>}
    </h1>

    {/* English translation */}
    <p style={{
      margin: size === 'mobile' ? '7px 0 0' : '9px 0 0',
      fontSize: size === 'mobile' ? '0.77rem' : '0.82rem',
      fontStyle: 'italic',
      color: '#C4A882',
      letterSpacing: '0.03em',
      lineHeight: 1.5,
      fontWeight: 400,
    }}>
      "Service is the Highest Duty."
    </p>

    <div style={{ height: size === 'mobile' ? 20 : 22 }} />

    <Link to="/donate" style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      background: theme.colors.primary, color: '#fff',
      fontFamily: 'inherit',
      fontSize: size === 'tablet' ? '0.88rem' : '0.95rem',
      fontWeight: 600, border: 'none', borderRadius: '8px',
      padding: size === 'mobile' ? '10px 20px' : size === 'tablet' ? '11px 22px' : '13px 28px',
      cursor: 'pointer', textDecoration: 'none', width: 'fit-content',
      boxShadow: '0 4px 14px rgba(166,38,57,0.28)',
    }}>
      Be the Change →
    </Link>
  </>
);

export const HeroBackgroundSliderAsymmetric: React.FC = () => {
  const [heroHeight,    setHeroHeight]    = React.useState('calc(100vh - 160px)');
  const [scatterScale,  setScatterScale]  = React.useState(1);
  const [layout, setLayout] = React.useState<'mobile'|'tablet'|'desktop'>('desktop');

  React.useEffect(() => {
    const measure = () => {
      const vw       = window.innerWidth;
      const vh       = window.innerHeight;
      const nav      = document.querySelector('nav') as HTMLElement | null;
      const topBar   = document.querySelector('.top-header') as HTMLElement | null;
      const marquee  = document.querySelector('.jwf-hero')?.nextElementSibling as HTMLElement | null;
      const navH     = nav     ? nav.getBoundingClientRect().height    : 50;
      const topH     = topBar  ? topBar.getBoundingClientRect().height  : 28;
      const marqueeH = marquee ? marquee.getBoundingClientRect().height : 40;

      const lyt: 'mobile'|'tablet'|'desktop' =
        vw <= 640 ? 'mobile' : vw <= 1024 ? 'tablet' : 'desktop';
      setLayout(lyt);

      if (lyt === 'mobile') {
        setHeroHeight('auto');
        const scaleByW = (vw - 32) / 700;
        const scaleByH = (vh * 0.32) / 580;
        setScatterScale(Math.max(Math.min(scaleByW, scaleByH), 0.25));
      } else if (lyt === 'tablet') {
        setHeroHeight('auto');
        const scatterColW = vw * 0.55;
        const remaining   = vh - navH - topH - marqueeH;
        const clampedH    = Math.max(remaining, 400);
        const scaleByW    = (scatterColW - 24) / 700;
        const scaleByH    = (clampedH - 60) / 580;
        setScatterScale(Math.max(Math.min(scaleByW, scaleByH, 0.75), 0.42));
      } else {
        const remaining = vh - navH - topH - marqueeH;
        const clampedH  = Math.max(remaining, 500);
        setHeroHeight(`${clampedH}px`);
        const sidePad     = Math.min(vw * 0.05, 80);
        const scatterColW = Math.min(vw, 1400) * 0.61 - sidePad;
        const scaleByW    = (scatterColW - 20) / 700;
        const scaleByH    = (clampedH - 20) / 580;
        setScatterScale(Math.max(Math.min(scaleByW, scaleByH, 1.1), 0.65) * 0.95);
      }
    };

    const t = setTimeout(measure, 50);
    window.addEventListener('resize', measure);
    return () => { clearTimeout(t); window.removeEventListener('resize', measure); };
  }, []);

  const STAGE_W = 680;
  const STAGE_H = 580;
  const scaledW = STAGE_W * scatterScale;
  const scaledH = STAGE_H * scatterScale;

  const ScatterPanel = (
    <div style={{
      position: 'relative',
      width: '100%',
      height: layout === 'mobile' ? `${scaledH + 60}px` : '100%',
      minHeight: layout === 'mobile' ? `${scaledH + 60}px` : '300px',
      paddingTop: layout === 'mobile' ? '40px' : '0',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: layout === 'mobile' ? '0' : 'clamp(24px, 5vw, 80px)',
    }}>
      <div style={{ position: 'relative', width: `${scaledW}px`, height: `${scaledH}px`, flexShrink: 0 }}>
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: `${STAGE_W}px`, height: `${STAGE_H}px`,
          transformOrigin: 'top left',
          transform: `scale(${scatterScale})`,
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '720px', height: '620px',
            pointerEvents: 'none', zIndex: 0,
          }}>
            <svg viewBox="0 0 720 620" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
              <defs>
                <filter id="blobBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="10" />
                </filter>
                <filter id="blobBlur2" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" />
                </filter>
              </defs>
              <path filter="url(#blobBlur)" fill="rgba(166,38,57,0.30)"
                d="M 130,48
                   C 180,10 260,22 320,15
                   C 390,6 440,30 500,18
                   C 565,5 630,40 670,90
                   C 710,140 700,210 695,270
                   C 690,335 715,390 700,450
                   C 685,510 640,565 585,590
                   C 525,618 455,600 390,608
                   C 320,617 250,605 185,585
                   C 115,563 55,520 30,458
                   C 5,395 20,320 18,255
                   C 15,185 -5,120 30,70
                   C 55,28 90,78 130,48 Z"
              />
              <path filter="url(#blobBlur2)" fill="rgba(120,22,40,0.18)"
                d="M 165,80
                   C 210,48 280,58 340,52
                   C 405,44 455,68 510,58
                   C 560,48 615,78 648,122
                   C 680,165 668,228 664,285
                   C 659,348 678,398 664,452
                   C 648,506 608,548 558,570
                   C 502,594 438,578 378,585
                   C 312,592 248,580 192,558
                   C 132,534 82,492 62,435
                   C 40,375 58,305 56,242
                   C 54,178 38,118 68,78
                   C 90,46 130,105 165,80 Z"
              />
            </svg>
          </div>
          {polaroidCards.map((card, i) => (
            <div key={i} className="jwf-polaroid" style={{
              width: '200px',
              top: card.top, left: card.left,
              transform: `rotate(${card.rot})`,
              zIndex: card.z,
            }}>
              <span style={{
                position: 'absolute', top: '-5px', left: '50%',
                transform: 'translateX(-50%)',
                width: '10px', height: '10px', borderRadius: '50%',
                background: theme.colors.primary,
                boxShadow: '0 1px 4px rgba(166,38,57,0.35)', zIndex: 2, display: 'block',
              }} />
              <img src={card.src} alt={card.caption} loading="eager" decoding="async"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block', borderRadius: '2px' }} />
              <p className="jwf-polaroid__caption">{card.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CopyPanel = (
    <div className="jwf-hero-copy" style={{
      padding:
        layout === 'mobile'  ? `20px 20px clamp(32px, 7vh, 80px)` :
        layout === 'tablet'  ? '28px 20px 28px clamp(20px, 5vw, 80px)' :
                               `48px 20px 48px clamp(24px, 5vw, 80px)`,
      display: 'flex', flexDirection: 'column',
      alignItems: layout === 'desktop' ? 'flex-start' : 'center',
      textAlign: layout === 'desktop' ? 'left' : 'center',
      gap: 0,
      justifyContent: 'center',
      height: layout === 'desktop' ? '100%' : 'auto',
      boxSizing: 'border-box',
    }}>
      {HeroCopyContent({ size: layout })}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap');
        @keyframes heroSlideInLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .jwf-hero-copy { animation: heroSlideInLeft 0.7s ease-out both; }
        .jwf-polaroid {
          position: absolute;
          background: #fff;
          padding: 6px 6px 22px 6px;
          border-radius: 4px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
          transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer; will-change: transform;
        }
        .jwf-polaroid:hover {
          transform: rotate(0deg) scale(1.1) translateY(-8px) !important;
          box-shadow: 0 18px 40px rgba(0,0,0,0.26); z-index: 20 !important;
        }
        .jwf-polaroid__caption {
          font-family: 'Caveat', cursive; font-size: 0.9rem; font-weight: 500;
          color: #3C3530; text-align: center; margin-top: 4px; line-height: 1.2;
        }
      `}</style>

      {layout === 'mobile' ? (
        <section className="jwf-hero" style={{
          display: 'flex', flexDirection: 'column',
          backgroundColor: theme.colors.background,
          backgroundImage: `repeating-linear-gradient(118deg,transparent,transparent 38px,rgba(166,38,57,0.028) 38px,rgba(166,38,57,0.028) 39px)`,
          overflow: 'hidden',
        }}>
          {ScatterPanel}
          {CopyPanel}
        </section>

      ) : layout === 'tablet' ? (
        <section className="jwf-hero" style={{
          backgroundColor: theme.colors.background,
          backgroundImage: `repeating-linear-gradient(118deg,transparent,transparent 38px,rgba(166,38,57,0.028) 38px,rgba(166,38,57,0.028) 39px)`,
          overflow: 'hidden', minHeight: '500px',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '45fr 55fr', maxWidth: '1400px', margin: '0 auto', minHeight: '500px' }}>
            {CopyPanel}
            {ScatterPanel}
          </div>
        </section>

      ) : (
        <section className="jwf-hero" style={{
          backgroundColor: theme.colors.background,
          backgroundImage: `repeating-linear-gradient(118deg,transparent,transparent 38px,rgba(166,38,57,0.028) 38px,rgba(166,38,57,0.028) 39px)`,
          overflow: 'hidden', height: heroHeight, maxHeight: '920px',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '44fr 56fr', maxWidth: '1400px', margin: '0 auto', height: '100%', alignItems: 'stretch' }}>
            {CopyPanel}
            {ScatterPanel}
          </div>
        </section>
      )}
    </>
  );
};

/* ==========================================================================
   MAIN ROUTER PAGE WRAPPER 
   ========================================================================== */
const HomePage: React.FC = () => {
  const [hoveredState, setHoveredState] = useState<string>('JH');

  const sectionWrapperStyle: React.CSSProperties = {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  return (
    <div className="jwf-snap-container" style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Home" description="Welcome to Johar Welfare Foundation (Jo Hare Na). Dedicated to sustainable development and community empowerment." />

      {/* 1. MOUNTED ACTIVE HERO BLOCK */}
      <HeroBackgroundSliderAsymmetric />

      {/* 2. INFINITE SECTOR TICKER SLIDER MARQUEE RUNWAY */}
      <div className="jwf-marquee-bar" style={{
        backgroundColor: theme.colors.primary,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        <div className="marquee-track" style={{ display: 'inline-flex', gap: '58px' }}>
          {/* Loop Set 1 */}
          {sliderSectors.map((sector, sIdx) => (
            <div key={`s1-${sIdx}`} style={{ display: 'flex', alignItems: 'center', gap: '11px', color: 'white', fontWeight: '600', fontSize: '0.94rem', letterSpacing: '0.5px' }}>
              <span style={{ display: 'flex', opacity: 0.9, fontSize: '0.9rem' }}>{sector.icon}</span>
              <span>{sector.label}</span>
              <span style={{ marginLeft: '38px', opacity: 0.4, fontSize: '0.84rem' }}>✦</span>
            </div>
          ))}
          {/* Mirror Duplicate Track loop */}
          {sliderSectors.map((sector, sIdx) => (
            <div key={`s2-${sIdx}`} style={{ display: 'flex', alignItems: 'center', gap: '11px', color: 'white', fontWeight: '600', fontSize: '0.94rem', letterSpacing: '0.5px' }}>
              <span style={{ display: 'flex', opacity: 0.9, fontSize: '0.9rem' }}>{sector.icon}</span>
              <span>{sector.label}</span>
              <span style={{ marginLeft: '38px', opacity: 0.4, fontSize: '0.84rem' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider topColor={theme.colors.background} bottomColor="#fafafa" />

      {/* 3. WHO WE ARE INTRODUCTION SECTION PREVIEW */}
      <div className="jwf-snap-section" style={{ backgroundColor: theme.colors.primary, position: 'relative' }}>
        {/* Decorative thematic icon stamps */}
        {[
          { Icon: FaGraduationCap, top: '10%',   left: '3%',   size: 44, circle: 90,  rotate: -12 },
          { Icon: FaVenus,         top: '6%',    right: '6%',  size: 38, circle: 78,  rotate: 8   },
          { Icon: FaUsers,         bottom: '8%', left: '4%',   size: 40, circle: 82,  rotate: -6  },
          { Icon: FaBriefcase,     bottom: '10%',right: '4%',  size: 38, circle: 78,  rotate: 10  },
          { Icon: FaBookOpen,      top: '48%',   left: '1%',   size: 30, circle: 62,  rotate: -18 },
          { Icon: FaHandHoldingHeart, top: '42%',right: '2%',  size: 30, circle: 62,  rotate: 14  },
          { Icon: FaStethoscope,   bottom: '30%',left: '14%',  size: 26, circle: 54,  rotate: -8  },
          { Icon: FaGlobe,         top: '22%',   right: '14%', size: 26, circle: 54,  rotate: 5   },
        ].map(({ Icon, size, circle, rotate, ...pos }, i) => (
          <div key={i} aria-hidden className="wwa-leaf" style={{
            position: 'absolute', ...pos,
            width: circle, height: circle,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: `rotate(${rotate}deg)`,
            backdropFilter: 'blur(1px)',
          }}>
            <Icon style={{ fontSize: size, color: 'rgba(255,255,255,0.55)' }} />
          </div>
        ))}
        <div style={{ ...sectionWrapperStyle, padding: '72px 5%', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Heading */}
          <h2 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 'clamp(2.6rem, 6vw, 5rem)',
            fontWeight: 900, lineHeight: 1.1,
            color: '#fff', margin: '0 0 20px',
            letterSpacing: '-0.02em',
          }}>
            <span style={{ fontWeight: 900 }}>Who</span>
            <span style={{ fontWeight: 300 }}> we are?</span>
          </h2>

          {/* Gold divider */}
          <div style={{ width: 48, height: 3, background: '#C4A882', borderRadius: 2, margin: '0 auto 32px' }} />

          {/* Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 620, margin: '0 auto 36px' }}>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.08rem', fontWeight: 450, lineHeight: 1.8, margin: 0 }}>
              We are <strong style={{ color: '#fff' }}>Johar Welfare Foundation</strong>, a registered non-profit working towards community development and social welfare.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.08rem', fontWeight: 450, lineHeight: 1.8, margin: 0 }}>
              Founded in <span style={{ color: '#C4A882', fontWeight: 600 }}>2026</span>, we are at the beginning of our journey — focused on education, livelihoods, women's empowerment, and access to basic rights.
            </p>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '1.08rem', fontWeight: 450, lineHeight: 1.8, maxWidth: 620, margin: '0 auto 36px' }}>
            And yes, we are a registered non-profit in India — 12A, 80G, PAN, and NITI Aayog DARPAN certified.
          </p>

          {/* CTA */}
          <Link to="/who-we-are" className="whoweare-learn-btn" style={{
            display: 'inline-block', backgroundColor: '#fff',
            color: theme.colors.primary, textDecoration: 'none',
            padding: '12px 35px', borderRadius: '50px',
            fontWeight: 'bold', fontSize: '0.9rem',
          }}>
            Learn More
          </Link>

        </div>
      </div>

      <WaveDivider topColor={theme.colors.primary} bottomColor={theme.colors.background} />

      {/* WHY JOHAR FOUNDATION */}
      <div className="jwf-snap-section" style={{ backgroundColor: theme.colors.background }}>
        <div style={{ ...sectionWrapperStyle, padding: '60px 5%' }}>
          <div style={{ display: 'flex', gap: '80px', alignItems: 'center' }} className="split-layout">
            {/* Left: heading + shloka */}
            <div style={{ flex: '1', minWidth: 0 }}>
              <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: '0 0 10px 0' }}>
                Why Johar Welfare Foundation?
              </h2>
              <p style={{ color: '#999', fontSize: '0.95rem', marginBottom: '36px', fontStyle: 'italic' }}>Because we believe...</p>
              <div style={{ borderLeft: `3px solid ${theme.colors.primary}`, paddingLeft: '18px', marginBottom: '20px' }}>
                <p style={{
                  fontFamily: "'Lora', serif", fontStyle: 'italic', fontWeight: 400,
                  fontSize: '1.15rem', color: theme.colors.secondary, margin: '0 0 6px',
                }}>
                  उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।
                </p>
                <p style={{ fontStyle: 'italic', color: theme.colors.primary, fontSize: '0.88rem', margin: 0 }}>
                  "Success comes through effort, not merely by wishes."
                </p>
              </div>
              <p style={{ color: '#777', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>
                This principle inspires us to move beyond intentions and create meaningful action.
              </p>
            </div>
            {/* Right: belief lines */}
            <div style={{ flex: '1', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                'A child deserves education.',
                'A woman deserves opportunity.',
                'A youth deserves employment.',
                'A family deserves dignity.',
                'A community deserves hope.',
              ].map((line) => (
                <div key={line} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: theme.colors.primary, flexShrink: 0 }} />
                  <span style={{ fontSize: '1.1rem', fontWeight: '600', color: theme.colors.secondary }}>{line}</span>
                </div>
              ))}
              <p style={{ color: '#888', fontSize: '0.95rem', marginTop: '8px', paddingLeft: '22px', fontStyle: 'italic' }}>
                And together, we can make that possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider topColor="#F9F7F2" bottomColor="#fafafa" />

      {/* 4. MAIN PROGRAMMATIC INITIATIVES PREVIEW TRACK */}
      <div className="jwf-snap-section" style={{ backgroundColor: '#fafafa' }}>
        <div style={sectionWrapperStyle}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: 0 }}>
              Our Core Initiatives
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '40px' }} className="grid-layout-3x">
            <div className="preview-card">
              <div className="preview-card-header"><FaUsers size={24} color="#fff" /><h4>Tribal Affairs & Advocacy</h4></div>
              <p>Working with tribal communities on forest rights, land mapping, and getting their claims on record before someone else decides.</p>
            </div>
            <div className="preview-card">
              <div className="preview-card-header"><FaGraduationCap size={24} color="#fff" /><h4>Skill Development</h4></div>
              <p>Vocational training and digital classrooms for rural youth — tailoring, computing, and trades that actually lead somewhere.</p>
            </div>
            <div className="preview-card">
              <div className="preview-card-header"><FaHeartPulse size={24} color="#fff" /><h4>Health & Family Welfare</h4></div>
              <p>Free health camps, child nutrition tracking, and maternal care in villages where the nearest clinic is more than a walk away.</p>
            </div>
            <div className="preview-card hide-mobile">
              <div className="preview-card-header"><FaVenus size={24} color="#fff" /><h4>Women's Empowerment</h4></div>
              <p>SHGs, legal literacy, and livelihood training. Women in the program have opened bank accounts and started small businesses.</p>
            </div>
            <div className="preview-card hide-mobile">
              <div className="preview-card-header"><FaBookOpen size={24} color="#fff" /><h4>Education & Literacy</h4></div>
              <p>Tuition centres and digital classrooms in areas where the nearest school is a long walk. Someone who shows up changes things.</p>
            </div>
            <div className="preview-card hide-mobile">
              <div className="preview-card-header"><FaUserShield size={24} color="#fff" /><h4>Child Protection & Rights</h4></div>
              <p>Village-level work on birth registration, child labour, and school re-enrollment. Getting children on record and back in a classroom.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/initiatives" className="redirect-btn inline">
              Explore All Focus Sectors <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      <WaveDivider topColor="#fafafa" bottomColor="#F9F7F2" flip />

      {/* 5. INTERACTIVE REGIONAL MAP FOOTPRINT PREVIEW */}
      <div className="jwf-snap-section" style={sectionWrapperStyle}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: '0 0 10px 0' }}>
            States We Serve
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
            Hover or tap on a state to highlight our active implementation hubs across Eastern India.
          </p>
        </div>

        <div className="map-split-container" style={{
          display: 'flex', backgroundColor: '#fff', border: '1px solid #ececec',
          borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
        }}>
          {/* Left: map */}
          <div style={{ flex: 1, backgroundColor: '#fafafa', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '24px' }}>
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [85.05, 22.74], scale: 2600 }}
              width={500}
              height={600}
              style={{ width: '100%', maxWidth: '340px', height: 'auto', display: 'block' }}
            >
              <Geographies geography="/india-states.json">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {({ geographies }: { geographies: any[] }) =>
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  geographies.filter((geo: any) => footprintRegions.some(r => r.name === geo.properties.name)).map((geo: any) => {
                    const stateName: string = geo.properties.name || '';
                    const match = footprintRegions.find(r => r.name === stateName);
                    const id = match!.id;
                    const isActive = hoveredState === id;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        tabIndex={0}
                        onClick={() => setHoveredState(id)}
                        onMouseEnter={() => setHoveredState(id)}
                        style={{
                          default: {
                            fill: isActive ? theme.colors.primary : '#dcdcdc',
                            stroke: '#fff',
                            strokeWidth: 2,
                            outline: 'none',
                            cursor: 'pointer',
                            transition: 'fill 0.2s ease',
                          },
                          hover: {
                            fill: theme.colors.primary,
                            stroke: '#fff',
                            strokeWidth: 2,
                            outline: 'none',
                            cursor: 'pointer',
                          },
                          pressed: { fill: theme.colors.primary, stroke: '#fff', strokeWidth: 2, outline: 'none' },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

          {/* Right: info panel */}
          <div style={{ flex: '1.2', padding: '45px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', borderLeft: '1px solid #f0f0f0' }}>
            {/* State name heading */}
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.8rem', color: theme.colors.secondary, fontWeight: '700' }}>
              {footprintRegions.find(r => r.id === hoveredState)?.name}
            </h3>
            {/* Description */}
            <p style={{ margin: '0 0 25px 0', color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {footprintRegions.find(r => r.id === hoveredState)?.description}
            </p>
            {/* Bullet highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {footprintRegions.find(r => r.id === hoveredState)?.highlights.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333', fontWeight: '600' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: theme.colors.primary, flexShrink: 0 }} />
                  {h}
                </div>
              ))}
            </div>
            <Link to="/initiatives" className="redirect-btn">
              View Regional Operations <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* 6. GLOBAL IMPACT SUMMARY CARD BLOCK — commented out for future use
      <WaveDivider topColor="#F9F7F2" bottomColor="#fafafa" />
      <div style={{ backgroundColor: '#fafafa' }}>
        <div style={sectionWrapperStyle}>
          <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }} className="split-layout reverse">
            <div style={{ flex: '0.8' }} className="img-container">
              <div style={{
                width: '100%', height: '240px', backgroundColor: 'white', borderRadius: '20px',
                border: '1px solid #eaeaea', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '30px', boxSizing: 'border-box'
              }}>
                <span style={{ fontSize: '3rem', fontWeight: '800', color: theme.colors.primary }}>350+</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: theme.colors.secondary, textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'center' }}>Active Mahila SHGs</span>
              </div>
            </div>
            <div style={{ flex: '1.2', textAlign: 'left' }}>
              <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: '0 0 20px 0' }}>
                The Impact Created
              </h2>
              <p style={{ color: '#555', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '25px' }}>
                We monitor data lines transparently across 15+ engaged field districts. From establishing micro-financial literacy metrics for women to launching local athletic programs, every parameter is fully audited and available for community verification.
              </p>
              <Link to="/impact" className="redirect-btn">
                View Audit Reports & Statistics <FaArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider topColor="#fafafa" bottomColor={theme.colors.secondary} flip />
      */}

      <WaveDivider topColor="#F9F7F2" bottomColor={theme.colors.secondary} flip />

      {/* 7. VOLUNTEER WORKSPACE ACTION PREVIEW */}
      <div className="jwf-snap-section" style={{ backgroundColor: theme.colors.secondary, color: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative thematic icon stamps */}
        {[
          { Icon: FaUsers,           top: '10%',    left: '3%',   size: 40, circle: 82,  rotate: -10 },
          { Icon: FaHandHoldingHeart,bottom: '10%', right: '4%',  size: 36, circle: 74,  rotate: 8   },
          { Icon: FaVenus,           top: '8%',     right: '7%',  size: 34, circle: 70,  rotate: 6   },
          { Icon: FaGraduationCap,   bottom: '12%', left: '5%',   size: 36, circle: 74,  rotate: -7  },
          { Icon: FaGlobe,           top: '45%',    left: '1%',   size: 28, circle: 58,  rotate: -15 },
          { Icon: FaBriefcase,       top: '40%',    right: '2%',  size: 28, circle: 58,  rotate: 12  },
        ].map(({ Icon, size, circle, rotate, ...pos }, i) => (
          <div key={i} aria-hidden className="wwa-leaf" style={{
            position: 'absolute', ...pos,
            width: circle, height: circle,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transform: `rotate(${rotate}deg)`,
          }}>
            <Icon style={{ fontSize: size, color: 'rgba(255,255,255,0.5)' }} />
          </div>
        ))}
        <div style={{ ...sectionWrapperStyle, textAlign: 'center', padding: '70px 5%', position: 'relative', zIndex: 1 }}>
          <FaHandHoldingHeart size={40} color={theme.colors.primary} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0 0 15px 0', color: 'white' }}>
            Your time is worth something here.
          </h2>
          <p style={{ color: '#bbb', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 35px auto', lineHeight: '1.6' }}>
            Our programs exist because 30 people showed up. A few hours or a full season — all of it moves things forward.
          </p>
          <Link to="/get-involved" style={{
            display: 'inline-block', backgroundColor: 'white', color: 'black', textDecoration: 'none',
            padding: '12px 35px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem'
          }} className="white-hover-btn">
            Become a Volunteer
          </Link>
        </div>
      </div>

      {/* Scoped CSS Rules System Framework */}
      <style>{`
        .preview-card {
          background-color: ${theme.colors.primary};
          border: none;
          border-radius: 16px;
          padding: 30px 24px;
          box-shadow: 0 4px 15px rgba(166,38,57,0.15);
        }

        .preview-card-header {
          display: flex; align-items: center; gap: 12px; margin-bottom: 12px;
          padding-bottom: 10px;
          border-bottom: 2px solid rgba(255,255,255,0.3);
        }
        .preview-card h4 {
          font-size: 1.05rem; color: #fff; margin: 0; font-weight: 700;
        }

        .preview-card p {
          color: rgba(255,255,255,0.85); font-size: 0.82rem; line-height: 1.6; margin: 0;
        }

        .redirect-btn {
          color: ${theme.colors.primary}; font-weight: 700; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px; font-size: 0.92rem;
          transition: gap 0.2s ease;
        }
        .redirect-btn:hover { gap: 10px; }

        .white-hover-btn:hover { opacity: 0.95; }

        .whoweare-learn-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
        }
        .whoweare-learn-btn:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 8px 24px rgba(0,0,0,0.18);
          background-color: #f5ede0 !important;
        }
        @media (max-width: 768px) {
          .wwa-leaf { display: none !important; }
        }

        @media (min-width: 1025px) {
          html {
            scroll-snap-type: y proximity;
          }
          .jwf-snap-section {
            scroll-snap-align: start;
          }
        }

        .marquee-track {
          animation: infiniteScrollMarquee 32s linear infinite;
          width: max-content;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes infiniteScrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 640px) {
          .jwf-marquee-bar { padding: 18px 0 !important; }
        }

        .hero-cta-solid-btn:hover {
          opacity: 0.95;
          transform: translateY(-2px);
        }
        .hero-cta-solid-btn:hover .arrow-transition {
          transform: translateX(4px);
          display: inline-block;
        }

        .polaroid-frame {
          position: absolute;
          background-color: #F9F7F2;
          padding: 8px 8px 12px 8px; 
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e2e2;
          width: 122px;
          box-sizing: border-box;
          transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.3s ease, z-index 0.1s step-end;
        }

        .polaroid-frame:hover {
          z-index: 99 !important; 
          transform: scale(1.18) rotate(0deg) !important;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
        }

        .polaroid-img {
          width: 100%;
          height: 100px; 
          background-size: cover;
          background-position: center;
          background-color: #f5f5f5;
        }

        .polaroid-caption {
          font-family: 'Georgia', cursive, serif;
          font-size: 0.7rem;
          color: #444;
          text-align: center;
          margin-top: 6px;
          font-style: italic;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .polaroid-pin {
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background-color: #a32a3f;
          border-radius: 50%;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15);
        }

        /* ==========================================================================
           RESPONSIVE DESIGN FRAMEWORK & COLLAPSE LOGIC
           ========================================================================== */
        @media (max-width: 1024px) {
          .grid-layout-3x { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }

        @media (max-width: 992px) {
          .hero-polaroid-root {
            height: auto !important;
            padding: 60px 0 40px 0 !important;
          }
          .hero-split-grid {
            flex-direction: column !important;
            text-align: center !important;
            gap: 40px !important;
          }
          .hero-text-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center !important;
          }
          .hero-title-responsive {
            font-size: 2.8rem !important;
          }
          .hero-desc-responsive {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-stats-row {
            justify-content: center;
          }
          
          /* HIDES THE COLLAGE SYSTEM COMPLETELY ON MOBILE VIEWPORTS */
          .hero-collage-container {
            display: none !important;
          }

          .map-split-container { flex-direction: column !important; }
          .map-split-container > div { padding: 24px !important; }
          .map-split-container > div:last-child { text-align: left !important; align-items: flex-start !important; border-left: none !important; border-top: 1px solid #f0f0f0; }
          .redirect-btn { justify-content: center; }
        }

        @media (max-width: 768px) {
          .hero-title-responsive {
            font-size: 2.4rem !important;
          }
          
          .split-layout { 
            flex-direction: column !important; 
            gap: 35px !important; 
            text-align: center !important; 
            align-items: center !important;
          }
          
          .split-layout.reverse { 
            flex-direction: column-reverse !important; 
          }
          
          .split-layout.whoweare-layout {
            display: flex !important;
            flex-direction: column !important;
            gap: 20px !important;
          }

          .whoweare-text-col { display: contents !important; }
          .whoweare-title { order: 1 !important; text-align: center !important; margin-bottom: 5px !important; }
          .whoweare-img-col { order: 2 !important; width: 100% !important; margin-bottom: 10px !important; }
          .whoweare-desc { order: 3 !important; text-align: center !important; margin-bottom: 20px !important; }
          .whoweare-btn { order: 4 !important; justify-content: center !important; }
          
          .img-container { width: 100% !important; }
        }

        @media (max-width: 550px) {
          .grid-layout-3x { grid-template-columns: 1fr !important; }
          .hide-mobile { display: none !important; }
        }

        @media (max-width: 480px) {
          .hero-title-responsive {
            font-size: 2.0rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;