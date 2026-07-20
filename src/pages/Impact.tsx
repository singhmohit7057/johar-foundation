import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // updated
import { SEO } from '../shared/seo';
import {
  FaQuoteLeft, FaImage, FaTimes,
  FaArrowRight, FaHeart, FaChevronRight,
  FaRegEnvelope
} from 'react-icons/fa';

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

// Success Stories Dataset
const successStories = [
  {
    id: 'story-1',
    tag: "WOMEN'S EMPOWERMENT",
    title: "Sumi Marandi's Journey to Financial Independence",
    location: "Dumka Cluster, Jharkhand",
    quote: "Joining the local Self-Help Group didn't just give me access to credit; it gave me the confidence to manage a business and support my children's higher education.",
    narrative: "Sumi started with a micro-loan of ₹5,000 to purchase sewing equipment. Today, she runs an independent tailoring cooperative employing four other tribal women, effectively multiplying the economic resilience of her entire village.",
    image: "skill.jpg"
  },
  {
    id: 'story-2',
    tag: "YOUTH & SPORTS",
    title: "From Red-Soil Pitches to State-Level Athletics",
    location: "Sundargarh, Odisha",
    quote: "Johar Foundation's sports clinic provided me with professional kits and standard nutrition when I had no shoes to run in.",
    narrative: "Amit Oraon, an 11th-grade tribal youth, was identified during a rural sports talent hunt camp. After receiving 12 months of structured track mentoring and endurance mapping, he recently secured a silver medal at the State Athletics Championship.",
    image: "popup.png"
  },
  {
    id: 'story-3',
    tag: "SKILL DEVELOPMENT",
    title: "Breaking Barriers Through Localized Digital Literacy",
    location: "Purulia, West Bengal",
    quote: "I thought computers were only for urban graduates. Learning to use digital marketplaces changed how our family sells forest produce.",
    narrative: "Deepak Mahato completed our 3-month regional digital literacy program. He now independently operates an e-service kiosk in his panchayat, helping local collection centers process fair-price bank settlements digitally.",
    image: "popup.png"
  }
];

// Media Gallery Dataset
const galleryItems = [
  { id: 1, type: 'IMAGE', category: 'SHG Setup', title: 'Women Empowerment Drive', imageUrl: 'women.jpg' },
  { id: 2, type: 'IMAGE', category: 'Sports Clinics', title: 'Youth Training Camp', imageUrl: 'youth.jpg' },
  { id: 3, type: 'IMAGE', category: 'Skill Labs', title: 'Digital Literacy Classroom', imageUrl: 'education.jpg' },
  { id: 4, type: 'IMAGE', category: 'Heritage', title: 'Tribal Artisans Workshop', imageUrl: 'tribal.jpg' },
  { id: 5, type: 'IMAGE', category: 'Healthcare', title: 'Rural Maternal Health Outpost', imageUrl: 'health.jpg' },
  { id: 6, type: 'IMAGE', category: 'Eco-Tourism', title: 'Community Tourism Infrastructure', imageUrl: 'tourism.jpg' }
];

const Impact: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <SEO title="Our Impact" description="Read real success stories and browse our visual media gallery documenting change across rural communities." />

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
          animation: 'imp-blobMorph 12s ease-in-out infinite',
          filter: 'blur(52px)',
          zIndex: 0,
          borderRadius: '62% 38% 55% 45% / 48% 52% 48% 52%',
        }} />

        {/* Floating ornaments */}
        <div aria-hidden style={{
          position: 'absolute', bottom: 80, left: '8%',
          width: 64, height: 64,
          borderRadius: '50%', background: SAND, opacity: 0.7,
          animation: 'imp-floatY 5s ease-in-out infinite',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 120, right: '10%',
          width: 42, height: 42,
          borderRadius: '10% 50% 10% 50%', background: SAND, opacity: 0.6,
          animation: 'imp-floatY 7s ease-in-out infinite 1s',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="imp-fade-in imp-d2" style={{
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: EARTH,
            lineHeight: 1.25,
            margin: '8px 0 24px',
          }}>
            Our <span style={{ color: CRIMSON }}>Impact</span>
          </h1>
          <p className="imp-fade-in imp-d3" style={{
            fontSize: '1.15rem',
            color: EARTH_MUTED,
            maxWidth: 540,
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}>
            Behind every number in our reports is a name. The women who started cooperatives. A teenager who ran barefoot and won silver. A man who taught his village to sell online.
          </p>
          <p className="imp-fade-in imp-d3" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.6,
            maxWidth: 580, margin: '0 auto 40px',
            fontFamily: "'Lora', serif", fontStyle: 'italic', fontWeight: 400,
            color: EARTH_MUTED,
          }}>
            परोपकाराय फलन्ति वृक्षाः<br />
            <span style={{ fontSize: '0.92rem', letterSpacing: '0.03em', color: CRIMSON, fontWeight: 400 }}>"Trees bear fruit for others, not themselves."</span>
          </p>
          <div className="imp-fade-in imp-d4" style={{
            width: 1, height: 56,
            background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`,
            margin: '0 auto', borderRadius: 1,
          }} />
        </div>
      </section>

      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* ── SUCCESS STORIES SECTION ──────────────────────────────────────────── */}
      <section style={{ background: SECTION_ALT, padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 className="responsive-title" style={{ color: EARTH, fontWeight: 'bold' }}>
              Stories of Resilience
            </h2>
          </div>

          <div className="stories-split-box" style={{
            display: 'flex', backgroundColor: WHITE, borderRadius: '24px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid #e8e0d8', overflow: 'hidden'
          }}>
            {/* Left Block: Narrative Selector Tabs */}
            <div className="stories-nav-panel" style={{ flex: '1', backgroundColor: BG, borderRight: '1px solid #e8e0d8', padding: '25px' }}>
              <h4 style={{ color: EARTH_MUTED, fontSize: '0.7rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', paddingLeft: '10px' }}>
                Select a Narrative
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {successStories.map((story, idx) => (
                  <button
                    key={story.id}
                    onClick={() => setActiveStoryIdx(idx)}
                    style={{
                      textAlign: 'left', padding: '16px 20px', borderRadius: '12px', border: 'none',
                      cursor: 'pointer', transition: 'all 0.2s ease', display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', boxSizing: 'border-box', width: '100%',
                      backgroundColor: activeStoryIdx === idx ? WHITE : 'transparent',
                      boxShadow: activeStoryIdx === idx ? '0 4px 15px rgba(0,0,0,0.04)' : 'none',
                      borderLeft: activeStoryIdx === idx ? `4px solid ${CRIMSON}` : '4px solid transparent'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.6rem', fontWeight: 'bold', color: activeStoryIdx === idx ? CRIMSON : EARTH_MUTED, display: 'inline-block', letterSpacing: '0.5px' }}>
                        {story.tag}
                      </span>
                      <h5 style={{ margin: '4px 0 0 0', fontSize: '0.9rem', fontWeight: '700', color: EARTH }}>
                        {story.title.split('’s')[0]}
                      </h5>
                    </div>
                    <FaChevronRight style={{ color: activeStoryIdx === idx ? CRIMSON : '#ccc', fontSize: '0.75rem' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Block: Expanded Active Profile Card */}
            <div className="stories-content-panel" style={{ flex: '2.2', padding: '50px', display: 'flex', gap: '40px', boxSizing: 'border-box', alignItems: 'center' }}>
              <div style={{ flex: '1.2', textAlign: 'left' }}>
                <FaQuoteLeft style={{ color: `${CRIMSON}25`, fontSize: '2.5rem', marginBottom: '15px', display: 'block' }} />
                <blockquote style={{ margin: '0 0 20px 0', fontSize: '1.2rem', fontWeight: '600', color: EARTH, fontStyle: 'italic', lineHeight: '1.5' }}>
                  "{successStories[activeStoryIdx].quote}"
                </blockquote>
                <div style={{ marginBottom: '25px' }}>
                  <h4 style={{ margin: '0', fontSize: '1.05rem', fontWeight: '700', color: EARTH }}>{successStories[activeStoryIdx].title}</h4>
                  <span style={{ fontSize: '0.8rem', color: EARTH_MUTED, fontWeight: '500' }}>{successStories[activeStoryIdx].location}</span>
                </div>
                <p style={{ color: EARTH_MUTED, fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                  {successStories[activeStoryIdx].narrative}
                </p>
              </div>

              <div className="story-image-wrapper" style={{ flex: '0.9', height: '320px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.06)', backgroundColor: '#eaeaea' }}>
                <img
                  src={successStories[activeStoryIdx].image}
                  alt={successStories[activeStoryIdx].title}
                  fetchPriority="high"
                  loading="eager"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor={SECTION_ALT} bottomColor={BG} />

      {/* ── MEDIA GALLERY SECTION ────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="responsive-title" style={{ color: EARTH, fontWeight: 'bold', marginBottom: '15px' }}>
            Ground Implementations
          </h2>
          <p style={{ color: EARTH_MUTED, fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 45px auto', lineHeight: '1.6' }}>
            A visual overview of our continuous framework adjustments and localized community distribution models.
          </p>

          <div className="gallery-grid-layout">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                className="gallery-item-card"
                onClick={() => setLightboxImg(item.imageUrl)}
                style={{
                  position: 'relative', height: '240px', borderRadius: '16px', overflow: 'hidden',
                  cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', boxSizing: 'border-box',
                  backgroundColor: '#eaeaea'
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading={idx < 3 ? "eager" : "lazy"}
                  fetchPriority={idx < 3 ? "high" : "low"}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  className="gallery-img"
                />

                {/* Floating Meta Hover Mask overlay layout */}
                <div className="gallery-overlay" style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px',
                  boxSizing: 'border-box', textAlign: 'left', opacity: 0.9, transition: 'all 0.3s ease'
                }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 'bold', color: CRIMSON, backgroundColor: WHITE, padding: '3px 8px', borderRadius: '4px', width: 'fit-content', marginBottom: '8px', letterSpacing: '0.5px' }}>
                    {item.category}
                  </span>
                  <h4 style={{ color: WHITE, margin: 0, fontSize: '0.95rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {item.title} <FaImage style={{ opacity: 0.6, fontSize: '0.85rem' }} />
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* CALLOUT SUBSECTION: Submission Anchor Placement */}
          <div style={{ marginTop: '55px', paddingTop: '15px' }}>
            <p style={{ color: EARTH_MUTED, fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 24px 0' }}>
              More photos coming soon as we document our field programs.<br className="desktop-only-break" />
              Or if you have any pictures from our events, we would love to see them.
            </p>
            <a
              href="mailto:support@joharfoundation.com?subject=Field%20Program%20Photos"
              className="share-photos-btn"
              style={{
                backgroundColor: 'transparent',
                color: CRIMSON,
                border: `2px solid ${CRIMSON}`,
                padding: '12px 28px',
                borderRadius: '50px',
                fontSize: '0.88rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                textDecoration: 'none',
              }}
            >
              <FaRegEnvelope style={{ fontSize: '1rem' }} /> Share Your Photos With Us
            </a>
          </div>
        </div>
      </section>

      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* ── FINAL INTERACTIVE DRIVER CTA SECTION ─────────────────────────────── */}
      <section style={{ background: SECTION_ALT, padding: '80px 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <FaHeart style={{ color: CRIMSON, fontSize: '2.2rem', marginBottom: '20px' }} />
          <h2 className="responsive-title" style={{ color: EARTH, fontWeight: '700', marginBottom: '15px' }}>
            Be Part of the Resilience Story
          </h2>
          <p style={{ color: EARTH_MUTED, fontSize: '1rem', lineHeight: '1.6', marginBottom: '35px' }}>
            Your resources directly enable operational deployment, buy asset kits, or construct digital labs across underserved zones.
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-involved" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: CRIMSON, color: WHITE, border: 'none', padding: '14px 32px',
                borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: `0 4px 15px ${CRIMSON}33`
              }}>
                Support a Cluster <FaArrowRight fontSize="0.8rem" />
              </button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                backgroundColor: 'transparent', color: EARTH, border: `2px solid ${EARTH}`,
                padding: '12px 30px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer'
              }}>
                Partner with Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ───────────────────────────────────────────────────── */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box'
          }}
        >
          <button style={{ position: 'absolute', top: '25px', right: '25px', backgroundColor: 'transparent', border: 'none', color: WHITE, fontSize: '1.8rem', cursor: 'pointer' }}>
            <FaTimes />
          </button>
          <img src={lightboxImg} alt="Enlarged View" style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
        </div>
      )}

      {/* ── CSS ──────────────────────────────────────────────────────────────── */}
      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        .responsive-title { font-size: 2.2rem; font-weight: bold; margin-bottom: 15px; }

        @keyframes imp-blobMorph {
          0%,100% { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
          25%      { border-radius: 45% 55% 38% 62% / 55% 45% 60% 40%; }
          50%      { border-radius: 55% 45% 62% 38% / 42% 58% 45% 55%; }
          75%      { border-radius: 38% 62% 48% 52% / 60% 40% 52% 48%; }
        }

        @keyframes imp-floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }

        @keyframes imp-fadeIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .imp-fade-in { animation: imp-fadeIn 0.75s ease both; }
        .imp-d1 { animation-delay: 0.10s; }
        .imp-d2 { animation-delay: 0.22s; }
        .imp-d3 { animation-delay: 0.34s; }
        .imp-d4 { animation-delay: 0.46s; }

        .gallery-grid-layout {
          display: grid;
          gap: 25px;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
        }

        .gallery-item-card:hover .gallery-img {
          transform: scale(1.05);
        }

        .gallery-item-card:hover .gallery-overlay {
          background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 100%) !important;
        }

        .share-photos-btn:hover {
          background-color: ${CRIMSON} !important;
          color: #ffffff !important;
          box-shadow: 0 8px 24px rgba(166, 38, 57, 0.3) !important;
          transform: translateY(-2px);
        }

        .share-photos-btn:active {
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .stories-split-box { flex-direction: column !important; }
          .stories-nav-panel { border-right: none !important; border-bottom: 1px solid #e8e0d8 !important; display: flex !important; flex-direction: row !important; overflow-x: auto; gap: 12px; padding: 16px 20px !important; }
          .stories-nav-panel h4 { display: none !important; }
          .stories-nav-panel > div { display: flex !important; flex-direction: row !important; width: max-content; gap: 12px; }
          .stories-nav-panel button { width: 200px !important; flex-shrink: 0 !important; border-left: none !important; border-bottom: 3px solid transparent !important; }
          .stories-content-panel { padding: 30px !important; flex-direction: column-reverse !important; gap: 24px !important; }
          .story-image-wrapper { width: 100% !important; height: 240px !important; flex: none !important; }
          .gallery-grid-layout { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 992px) {
          .responsive-h1 { font-size: 2.2rem; }
          .responsive-title { font-size: 1.8rem; }
        }

        @media (max-width: 600px) {
          .gallery-grid-layout { grid-template-columns: 1fr !important; gap: 15px; }
          .stories-content-panel { padding: 25px 20px !important; }
          .stories-content-panel blockquote { font-size: 1.05rem !important; }
          .responsive-h1 { font-size: 2rem; }
          .responsive-title { font-size: 1.6rem; }
          .desktop-only-break { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Impact;
