import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
// import { Newsletter } from '../subscribe/newsletter';

import { 
  FaArrowRight, FaUsers, FaGraduationCap, 
  FaHeartPulse, FaHandHoldingHeart, FaMapLocationDot,
  FaGlobe, FaVenus, FaBookOpen, FaBriefcase, FaStethoscope, FaChartBar
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

// Geographical Dataset mapped for Vector Paths
const footprintRegions = [
  { id: 'JH', name: 'Jharkhand', node: 'Core Hub', focus: 'SHG Networks, Sports Academies & Tribal Advocacy' },
  { id: 'OR', name: 'Odisha', node: 'Eco-Tourism Belt', focus: 'Artisanal Cluster Trade & Maternal Care' },
  { id: 'WB', name: 'West Bengal', node: 'Leadership Node', focus: 'Vocational Hubs & Primary Tech Literacy' },
  { id: 'BR', name: 'Bihar', node: 'Capacity Elevation', focus: 'Rural Literacy Centers & Women Welfare' },
  { id: 'CG', name: 'Chhattisgarh', node: 'Resilience Pocket', focus: 'Forest Produce Collectives & Rights Workshops' }
];

/* ==========================================================================
   HERO SELECTION VARIATION (Asymmetric Narrative Slider)
   ========================================================================== */
export const HeroBackgroundSliderAsymmetric: React.FC = () => {
  const slides = ["/skill.jpg", "/whoweare.jpg"]; 
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="hero-slider-root" style={{ 
      position: 'relative',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: '#111',
      borderBottom: `5px solid ${theme.colors.primary}`
    }}>

      {/* Background Image Layer Loops */}
      {slides.map((img, idx) => (
        <div 
          key={idx} 
          className="hero-bg-layer" 
          style={{
            position: 'absolute',
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%',
            backgroundImage: `url("${img}")`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: current === idx ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 0
          }}
        >
          {/* Standalone Dark Text-Contrast Overlay Layer */}
          <div className="hero-gradient-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1
          }} />
        </div>
      ))}

      <div style={{ maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 1 }} className="hero-wrapper-inner">
        <div style={{ maxWidth: '600px', textAlign: 'left' }} className="hero-text-container">
          <div style={{ borderLeft: `4px solid ${theme.colors.primary}`, paddingLeft: '20px', marginBottom: '30px' }} className="hero-badge-container">
            <h3 style={{ color: theme.colors.primary, margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>Our On-Ground Reality</h3>
            <p style={{ color: '#ccc', margin: 0, fontSize: '0.9rem', fontStyle: 'italic' }}>Creating sustainable futures for tribal youth.</p>
          </div>

          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', color: 'white', lineHeight: '1.2', marginBottom: '25px' }} className="hero-title-responsive">
            Sustainable Models.<br />Scalable Change.
          </h1>
          
          <p style={{ fontSize: '1.05rem', color: '#bbb', lineHeight: '1.7', marginBottom: '35px' }} className="hero-desc-responsive">
            Johar Welfare Foundation doesn't just provide aid; we build infrastructure and self-reliance pipelines that remain long after we leave.
          </p>

          <div style={{ display: 'flex', gap: '20px' }} className="hero-btn-group">
            <Link to="/donate" style={{ color: 'white', textDecoration: 'none', border: '2px solid white', padding: '14px 32px', borderRadius: '5px', fontWeight: 'bold' }}>
              BE THE CHANGE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   MAIN ROUTER PAGE WRAPPER 
   ========================================================================== */
const HomePage: React.FC = () => {
  const [hoveredState, setHoveredState] = useState<string>('JH');

{/* commented for future use
    const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '5px 14px',
    backgroundColor: `${theme.colors.primary}12`,
    color: theme.colors.primary,
    borderRadius: '50px',
    fontSize: '0.72rem',
    fontWeight: 'bold',
    marginBottom: '14px',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  }; 
  
  */}

  const sectionWrapperStyle: React.CSSProperties = {
    padding: '80px 5%',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Home" description="Welcome to Johar Welfare Foundation (Jo Hare Na). Dedicated to sustainable development and community empowerment." />

      {/* 1. MOUNTED ACTIVE HERO BLOCK */}
      <HeroBackgroundSliderAsymmetric />

      {/* 2. INFINITE SECTOR TICKER SLIDER MARQUEE RUNWAY */}
      <div style={{ 
        backgroundColor: theme.colors.primary, 
        overflow: 'hidden', 
        whiteSpace: 'nowrap', 
        padding: '24px 0', 
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        <div className="marquee-track" style={{ display: 'inline-flex', gap: '60px' }}>
          {/* Loop Set 1 */}
          {sliderSectors.map((sector, sIdx) => (
            <div key={`s1-${sIdx}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              <span style={{ display: 'flex', opacity: 0.9 }}>{sector.icon}</span>
              <span>{sector.label}</span>
              <span style={{ marginLeft: '45px', opacity: 0.4, fontSize: '0.8rem' }}>✦</span>
            </div>
          ))}
          {/* Mirror Duplicate Track loop */}
          {sliderSectors.map((sector, sIdx) => (
            <div key={`s2-${sIdx}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
              <span style={{ display: 'flex', opacity: 0.9 }}>{sector.icon}</span>
              <span>{sector.label}</span>
              <span style={{ marginLeft: '45px', opacity: 0.4, fontSize: '0.8rem' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. WHO WE ARE INTRODUCTION SECTION PREVIEW */}
      <div style={sectionWrapperStyle}>
        {/* Classes added to inner child components to structure the layout breakdown on mobile */}
        <div style={{ display: 'flex', gap: '60px', alignItems: 'center' }} className="split-layout whoweare-layout">
          <div style={{ flex: '1.2', textAlign: 'left' }} className="whoweare-text-col">

          {/* <div style={badgeStyle}>OUR IDENTITY</div> */}

            <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: '0 0 20px 0' }} className="whoweare-title">
              Who We Are
            </h2>
            <p style={{ color: '#555', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '25px' }} className="whoweare-desc">
              Headquartered in Jamshedpur, <strong>Johar Welfare Foundation</strong> is a Section 8 identity working across 5 eastern states. Guided by our philosophy <strong>"Jo Hare Na,"</strong> we co-create programs alongside tribal and rural communities to ensure absolute, sustainable transformation rather than transactional aid.
            </p>
            <Link to="/who-we-are" className="redirect-btn whoweare-btn">
              Learn More About Our Team <FaArrowRight size={12} />
            </Link>
          </div>
          <div style={{ flex: '0.8' }} className="img-container whoweare-img-col">
            <div style={{
              width: '100%', height: '300px', backgroundColor: '#fafafa', borderRadius: '20px',
              backgroundImage: 'url("/whoweare.jpg")', backgroundSize: 'cover', backgroundPosition: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0'
            }} />
          </div>
        </div>
      </div>

      {/* 4. MAIN PROGRAMMATIC INITIATIVES PREVIEW TRACK */}
      <div style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f2f2f2', borderBottom: '1px solid #f2f2f2' }}>
        <div style={sectionWrapperStyle}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>

          {/* <div style={badgeStyle}> WHAT WE DO</div> */}

            <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: 0 }}>
              Our Core Initiatives
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px', marginBottom: '40px' }} className="grid-layout-3x">
            <div className="preview-card">
              <FaUsers size={24} color={theme.colors.primary} />
              <h4>Tribal Affairs & Advocacy</h4>
              <p>Protecting rights, custom mapping forest assets, and preserving cultural heritage structures.</p>
            </div>
            <div className="preview-card">
              <FaGraduationCap size={24} color={theme.colors.primary} />
              <h4>Skill Development</h4>
              <p>Providing modern vocational training and tech classrooms for underprivileged rural youth.</p>
            </div>
            <div className="preview-card">
              <FaHeartPulse size={24} color={theme.colors.primary} />
              <h4>Health & Family Welfare</h4>
              <p>Deploying responsive screening health camps and baseline child nutrition programs.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/initiatives" className="redirect-btn inline">
              Explore All Focus Sectors <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* 5. INTERACTIVE REGIONAL MAP FOOTPRINT PREVIEW */}
      <div style={sectionWrapperStyle}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>

         {/* <div style={badgeStyle}>REGIONAL FOOTPRINT</div> */}

          <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: '0 0 10px 0' }}>
            States We Serve
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto' }}>
            Hover or tap on a state to highlight our active implementation hubs across Eastern India.
          </p>
        </div>

        <div className="map-split-container" style={{ 
          display: 'flex', backgroundColor: '#fff', border: '1px solid #ececec', 
          borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.015)' 
        }}>
          <div style={{ flex: '1', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' }}>
            <svg viewBox="0 0 400 380" style={{ width: '100%', maxWidth: '320px', height: 'auto' }}>
              <path d="M120,60 L240,55 L260,110 L160,120 L115,110 Z"
                tabIndex={0} role="button" aria-label="Bihar"
                onClick={() => setHoveredState('BR')} onMouseEnter={() => setHoveredState('BR')} onFocus={() => setHoveredState('BR')}
                style={{ fill: hoveredState === 'BR' ? theme.colors.primary : '#e5e5e5', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease', outline: 'none' }}
              />
              <text x="165" y="90" style={{ fontSize: '10px', fontWeight: 'bold', fill: hoveredState === 'BR' ? '#fff' : '#666', pointerEvents: 'none' }}>BIHAR</text>

              <path d="M115,110 L160,120 L260,110 L280,180 L190,200 L110,175 Z"
                tabIndex={0} role="button" aria-label="Jharkhand"
                onClick={() => setHoveredState('JH')} onMouseEnter={() => setHoveredState('JH')} onFocus={() => setHoveredState('JH')}
                style={{ fill: hoveredState === 'JH' ? theme.colors.primary : '#dcdcdc', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease', outline: 'none' }}
              />
              <text x="160" y="155" style={{ fontSize: '11px', fontWeight: 'bold', fill: hoveredState === 'JH' ? '#fff' : '#333', pointerEvents: 'none' }}>JHARKHAND</text>

              <path d="M260,110 L350,115 L340,170 L280,240 L265,195 L280,180 Z"
                tabIndex={0} role="button" aria-label="West Bengal"
                onClick={() => setHoveredState('WB')} onMouseEnter={() => setHoveredState('WB')} onFocus={() => setHoveredState('WB')}
                style={{ fill: hoveredState === 'WB' ? theme.colors.primary : '#e5e5e5', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease', outline: 'none' }}
              />
              <text x="285" y="155" style={{ fontSize: '9px', fontWeight: 'bold', fill: hoveredState === 'WB' ? '#fff' : '#666', pointerEvents: 'none', transform: 'rotate(12 278 150)' }}>W. BENGAL</text>

              <path d="M110,175 L190,200 L185,250 L145,340 L95,290 L100,220 Z"
                tabIndex={0} role="button" aria-label="Chhattisgarh"
                onClick={() => setHoveredState('CG')} onMouseEnter={() => setHoveredState('CG')} onFocus={() => setHoveredState('CG')}
                style={{ fill: hoveredState === 'CG' ? theme.colors.primary : '#ebebeb', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease', outline: 'none' }}
              />
              <text x="103" y="255" style={{ fontSize: '9px', fontWeight: 'bold', fill: hoveredState === 'CG' ? '#fff' : '#666', pointerEvents: 'none', transform: 'rotate(-70 115 255)' }}>CHHATTISGARH</text>

              <path d="M190,200 L265,195 L280,240 L230,310 L185,250 Z"
                tabIndex={0} role="button" aria-label="Odisha"
                onClick={() => setHoveredState('OR')} onMouseEnter={() => setHoveredState('OR')} onFocus={() => setHoveredState('OR')}
                style={{ fill: hoveredState === 'OR' ? theme.colors.primary : '#dfdfdf', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease', outline: 'none' }}
              />
              <text x="205" y="245" style={{ fontSize: '11px', fontWeight: 'bold', fill: hoveredState === 'OR' ? '#fff' : '#666', pointerEvents: 'none' }}>ODISHA</text>
            </svg>
          </div>

          <div style={{ flex: '1.2', padding: '45px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: theme.colors.primary, fontSize: '0.82rem', fontWeight: '800', marginBottom: '8px', textTransform: 'uppercase' }}>
              <FaMapLocationDot /> {footprintRegions.find(r => r.id === hoveredState)?.node}
            </div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '1.8rem', color: theme.colors.secondary, fontWeight: '800' }}>
              {footprintRegions.find(r => r.id === hoveredState)?.name}
            </h3>
            <p style={{ margin: '0 0 25px 0', color: '#555', fontSize: '0.92rem', lineHeight: '1.6' }}>
              {footprintRegions.find(r => r.id === hoveredState)?.focus}
            </p>
            <Link to="/initiatives" className="redirect-btn">
              View Regional Operations <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* 6. VOLUNTEER WORKSPACE ACTION PREVIEW */}
      <div style={{ backgroundColor: theme.colors.secondary, color: 'white', borderTop: `4px solid ${theme.colors.primary}` }}>
        <div style={{ ...sectionWrapperStyle, textAlign: 'center', padding: '70px 5%' }}>
          <FaHandHoldingHeart size={40} color={theme.colors.primary} style={{ marginBottom: '15px' }} />
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', margin: '0 0 15px 0', color: 'white' }}>
            Become a Catalyst for Change
          </h2>
          <p style={{ color: '#bbb', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 35px auto', lineHeight: '1.6' }}>
            Our field operations run on the energy of over 30+ dedicated on-ground volunteers. Whether your skill is digital advocacy or grassroot teaching, your hours matter.
          </p>
          <Link to="/get-involved" style={{
            display: 'inline-block', backgroundColor: 'white', color: 'black', textDecoration: 'none',
            padding: '12px 35px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem'
          }} className="white-hover-btn">
            Apply For Open Roles
          </Link>
        </div>
      </div>

      {/* 7. GLOBAL IMPACT SUMMARY CARD BLOCK */}
      <div style={{ backgroundColor: '#fafafa', borderTop: '1px solid #f2f2f2', borderBottom: '1px solid #f2f2f2' }}>
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

      {/* Scoped CSS Style Framework and Marquee Track Controllers */}
      <style>{`
        .hero-title-responsive { font-size: 3.6rem; }
        
        .preview-card {
          background-color: white;
          border: 1px solid #eaeaea;
          border-radius: 16px;
          padding: 30px 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.01);
        }
        
        .preview-card h4 {
          font-size: 1.05rem; color: ${theme.colors.secondary}; margin: 15px 0 8px 0; font-weight: 700;
        }

        .preview-card p {
          color: #666; font-size: 0.82rem; line-height: 1.6; margin: 0;
        }

        .redirect-btn {
          color: ${theme.colors.primary}; font-weight: 700; text-decoration: none;
          display: inline-flex; align-items: center; gap: 6px; font-size: 0.92rem;
          transition: gap 0.2s ease;
        }
        .redirect-btn:hover { gap: 10px; }

        .hero-sec-btn:hover { background-color: rgba(255,255,255,0.05) !important; border-color: #fff !important; }
        .white-hover-btn:hover { opacity: 0.95; }

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

        @media (max-width: 1024px) {
          .hero-title-responsive { font-size: 2.8rem !important; }
          .grid-layout-3x { grid-template-columns: repeat(2, 1fr) !important; gap: 20px !important; }
        }

        @media (max-width: 992px) {
          .hero-split-responsive { flex-direction: column !important; text-align: center !important; gap: 40px !important; }
          .hero-split-responsive > div { text-align: center !important; }
          .map-split-container { flex-direction: column !important; }
          .map-split-container > div { padding: 30px !important; text-align: center !important; }
          .map-split-container > div:last-child { align-items: center !important; }
          .redirect-btn { justify-content: center; }
          .hero-img-pane { height: 300px !important; width: 100% !important; }
        }

        @media (max-width: 768px) {
          .hero-metric-panel-hide, .hero-media-container-hide { display: none !important; }
          
          .split-layout { 
            flex-direction: column !important; 
            gap: 35px !important; 
            text-align: center !important; 
            align-items: center !important;
          }
          
          .split-layout.reverse { 
            flex-direction: column-reverse !important; 
          }
          
          /* ==========================================================================
             WHO WE ARE: STRUCTURAL SEPARATION (TITLE -> IMAGE -> TEXT)
             ========================================================================== */
          .split-layout.whoweare-layout {
            display: flex !important;
            flex-direction: column !important; /* Enforces top-to-bottom stack block routing */
            gap: 20px !important;
          }

          .whoweare-text-col {
            display: contents !important; /* Breaks out of container styles to isolate children sequencing */
          }

          .whoweare-title {
            order: 1 !important; /* Title to dead top position */
            text-align: center !important;
            margin-bottom: 5px !important;
          }

          .whoweare-img-col {
            order: 2 !important; /* Image locks directly in the center row context */
            width: 100% !important;
            margin-bottom: 10px !important;
          }

          .whoweare-desc {
            order: 3 !important; /* Paragraph text flows cleanly underneath the layout image */
            text-align: center !important;
            margin-bottom: 20px !important;
          }

          .whoweare-btn {
            order: 4 !important; /* Redirect link element settles at the final footer bounds */
            justify-content: center !important;
          }
          /* ========================================================================== */
          
          .split-layout > div {
            text-align: center !important;
          }

          .img-container { width: 100% !important; }
          
          /* ==========================================================================
             PREMIUM GLASS CONTAINER CARDS FOR IMMERSIVE RESPONSIVE LAYOUTS
             ========================================================================== */
          .hero-slider-root {
            height: 75vh !important; 
            padding: 0 !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }

          .hero-wrapper-inner {
            padding: 0 20px !important;
            width: 100% !important;
            z-index: 2 !important;
          }

          .hero-text-container {
            text-align: center !important;
            max-width: 100% !important;
            background: rgba(0, 0, 0, 0.65) !important; 
            backdrop-filter: blur(8px) !important; 
            -webkit-backdrop-filter: blur(8px) !important;
            padding: 30px 20px !important;
            border-radius: 16px !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .hero-badge-container {
            border-left: none !important;
            padding-left: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            margin-bottom: 15px !important;
          }

          .hero-title-responsive { 
            font-size: 2rem !important; 
            text-align: center !important;
            line-height: 1.3 !important;
            margin-bottom: 12px !important;
          }
          
          .hero-desc-responsive {
            text-align: center !important;
            font-size: 0.92rem !important;
            line-height: 1.6 !important;
            margin-bottom: 20px !important;
            color: #dddddd !important;
          }

          .hero-btn-group {
            justify-content: center !important;
            width: 100% !important;
          }

          .hero-btn-group a {
            padding: 12px 28px !important;
            font-size: 0.85rem !important;
          }

          .hero-bg-layer {
            position: absolute !important;
            height: 100% !important; 
            width: 100% !important;
            background-size: cover !important; 
            background-position: center center !important;
            order: unset !important;
            margin-top: 0 !important;
            top: 0 !important;
            left: 0 !important;
          }

          .hero-gradient-overlay {
            display: block !important;
            background: linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7)) !important;
          }
          /* ========================================================================== */

          .hero-img-pane { height: 240px !important; }
        }

        @media (max-width: 550px) {
          .grid-layout-3x { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;