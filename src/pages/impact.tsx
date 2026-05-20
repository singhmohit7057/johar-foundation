import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { 
  FaQuoteLeft, FaImage, FaTimes, 
  FaArrowRight, FaHeart, FaChevronRight,
  FaRegEnvelope
} from 'react-icons/fa';

// Success Stories Dataset
const successStories = [
  {
    id: 'story-1',
    tag: "WOMEN'S EMPOWERMENT",
    title: "Sumi Marandi’s Journey to Financial Independence",
    location: "Dumka Cluster, Jharkhand",
    quote: "Joining the local Self-Help Group didn't just give me access to credit; it gave me the confidence to manage a business and support my children's higher education.",
    narrative: "Sumi started with a micro-loan of ₹5,000 to purchase sewing equipment. Today, she runs an independent tailoring cooperative employing four other tribal women, effectively multiplying the economic resilience of her entire village.",
    image: "test.jpg"
  },
  {
    id: 'story-2',
    tag: "YOUTH & SPORTS",
    title: "From Red-Soil Pitches to State-Level Athletics",
    location: "Sundargarh, Odisha",
    quote: "Johar Foundation’s sports clinic provided me with professional kits and standard nutrition when I had no shoes to run in.",
    narrative: "Amit Oraon, an 11th-grade tribal youth, was identified during a rural sports talent hunt camp. After receiving 12 months of structured track mentoring and endurance mapping, he recently secured a silver medal at the State Athletics Championship.",
    image: "test.jpg"
  },
  {
    id: 'story-3',
    tag: "SKILL DEVELOPMENT",
    title: "Breaking Barriers Through Localized Digital Literacy",
    location: "Purulia, West Bengal",
    quote: "I thought computers were only for urban graduates. Learning to use digital marketplaces changed how our family sells forest produce.",
    narrative: "Deepak Mahato completed our 3-month regional digital literacy program. He now independently operates an e-service kiosk in his panchayat, helping local collection centers process fair-price bank settlements digitally.",
    image: "test.jpg"
  }
];

// Media Gallery Dataset
const galleryItems = [
  { id: 1, type: 'IMAGE', category: 'SHG Setup', title: 'Women Empowerment Drive', imageUrl: 'test.jpg' },
  { id: 2, type: 'IMAGE', category: 'Sports Clinics', title: 'Youth Training Camp', imageUrl: 'test.jpg' },
  { id: 3, type: 'IMAGE', category: 'Skill Labs', title: 'Digital Literacy Classroom', imageUrl: 'test.jpg' },
  { id: 4, type: 'IMAGE', category: 'Heritage', title: 'Tribal Artisans Workshop', imageUrl: 'test.jpg' },
  { id: 5, type: 'IMAGE', category: 'Healthcare', title: 'Rural Maternal Health Outpost', imageUrl: 'test.jpg' },
  { id: 6, type: 'IMAGE', category: 'Eco-Tourism', title: 'Community Tourism Infrastructure', imageUrl: 'test.jpg' }
];

const Impact: React.FC = () => {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const badgeStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '4px 12px',
    backgroundColor: `${theme.colors.primary}15`,
    color: theme.colors.primary,
    borderRadius: '50px',
    fontSize: '0.7rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    letterSpacing: '1px',
    textTransform: 'uppercase'
  };

  return (
    <div style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Our Impact" description="Read real success stories and browse our visual media gallery documenting change across rural communities." />

      {/* Hero Header */}
      <div style={{ 
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #1a1a1a 100%)`,
        color: theme.colors.white, 
        padding: '80px 5%',
        textAlign: 'center',
        borderBottom: `4px solid ${theme.colors.primary}`
      }}>
        <div style={{ ...badgeStyle, backgroundColor: `${theme.colors.primary}33`, color: '#ff9da9' }}>
          STORIES & MEDIA
        </div>
        <h1 className="responsive-h1" style={{ marginBottom: '15px', fontWeight: 'bold' }}>Our Impact</h1>
        <p style={{ fontSize: '1rem', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
          Witness the human element behind our execution metrics. Read about real milestones achieved across rural sectors.
        </p>
      </div>

      {/* SUCCESS STORIES SECTION WITH SWITCHER */}
      <div style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div style={badgeStyle}>VOICES FROM THE FIELD</div>
          <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: 'bold' }}>
            Stories of Resilience
          </h2>
        </div>

        <div className="stories-split-box" style={{ 
          display: 'flex', backgroundColor: 'white', borderRadius: '24px', 
          boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid #f0f0f0', overflow: 'hidden' 
        }}>
          {/* Left Block: Narrative Selector Tabs */}
          <div className="stories-nav-panel" style={{ flex: '1', backgroundColor: '#fafafa', borderRight: '1px solid #f0f0f0', padding: '25px' }}>
            {/* FIXED: Changed tracking to letterSpacing */}
            <h4 style={{ color: '#999', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', paddingLeft: '10px' }}>
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
                    backgroundColor: activeStoryIdx === idx ? 'white' : 'transparent',
                    boxShadow: activeStoryIdx === idx ? '0 4px 15px rgba(0,0,0,0.04)' : 'none',
                    borderLeft: activeStoryIdx === idx ? `4px solid ${theme.colors.primary}` : '4px solid transparent'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.6rem', fontWeight: 'bold', color: activeStoryIdx === idx ? theme.colors.primary : '#888', display: 'inline-block', letterSpacing: '0.5px' }}>
                      {story.tag}
                    </span>
                    <h5 style={{ margin: '4px 0 0 0', fontSize: '0.9rem', fontWeight: '700', color: theme.colors.secondary }}>
                      {story.title.split('’s')[0]}
                    </h5>
                  </div>
                  <FaChevronRight style={{ color: activeStoryIdx === idx ? theme.colors.primary : '#ccc', fontSize: '0.75rem' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Block: Expanded Active Profile Card */}
          <div className="stories-content-panel" style={{ flex: '2.2', padding: '50px', display: 'flex', gap: '40px', boxSizing: 'border-box', alignItems: 'center' }}>
            <div style={{ flex: '1.2', textAlign: 'left' }}>
              <FaQuoteLeft style={{ color: `${theme.colors.primary}25`, fontSize: '2.5rem', marginBottom: '15px', display: 'block' }} />
              <blockquote style={{ margin: '0 0 20px 0', fontSize: '1.2rem', fontWeight: '600', color: theme.colors.secondary, fontStyle: 'italic', lineHeight: '1.5' }}>
                "{successStories[activeStoryIdx].quote}"
              </blockquote>
              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ margin: '0', fontSize: '1.05rem', fontWeight: '700', color: '#111' }}>{successStories[activeStoryIdx].title}</h4>
                <span style={{ fontSize: '0.8rem', color: '#777', fontWeight: '500' }}>{successStories[activeStoryIdx].location}</span>
              </div>
              <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                {successStories[activeStoryIdx].narrative}
              </p>
            </div>
            
            <div className="story-image-wrapper" style={{ flex: '0.9', height: '320px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 25px rgba(0,0,0,0.06)' }}>
              <img 
                src={successStories[activeStoryIdx].image} 
                alt={successStories[activeStoryIdx].title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MEDIA GALLERY SECTION */}
      <div style={{ backgroundColor: '#fff', padding: '80px 5%', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={badgeStyle}>MEDIA ARCHIVE</div>
          <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: 'bold', marginBottom: '15px' }}>
            Ground Implementations
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 45px auto', lineHeight: '1.6' }}>
            A visual overview of our continuous framework adjustments and localized community distribution models.
          </p>

          <div className="gallery-grid-layout">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="gallery-item-card"
                onClick={() => setLightboxImg(item.imageUrl)}
                style={{ 
                  position: 'relative', height: '240px', borderRadius: '16px', overflow: 'hidden',
                  cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', boxSizing: 'border-box'
                }}
              >
                <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="gallery-img" />
                
                {/* Floating Meta Hover Mask overlay layout */}
                <div className="gallery-overlay" style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'end', padding: '20px',
                  boxSizing: 'border-box', textAlign: 'left', opacity: 0.9, transition: 'all 0.3s ease'
                }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: 'bold', color: theme.colors.primary, backgroundColor: '#fff', padding: '3px 8px', borderRadius: '4px', width: 'fit-content', marginBottom: '8px', letterSpacing: '0.5px' }}>
                    {item.category}
                  </span>
                  <h4 style={{ color: '#fff', margin: 0, fontSize: '0.95rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {item.title} <FaImage style={{ opacity: 0.6, fontSize: '0.85rem' }} />
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* CALLOUT SUBSECTION: Submission Anchor Placement */}
          <div style={{ marginTop: '55px', paddingTop: '15px' }}>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 24px 0' }}>
              More photos coming soon as we document our field programs.<br className="desktop-only-break" />
              Or if you have any pictures from our events, we would love to see them.
            </p>
            <a href="mailto:support@joharfoundation.com?subject=Field%20Program%20Photos" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <button 
                className="share-photos-btn"
                style={{
                  backgroundColor: 'transparent',
                  color: '#A62639', // Johar Crimson Red
                  border: '2px solid #A62639',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '0.88rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  outline: 'none'
                }}
              >
                <FaRegEnvelope style={{ fontSize: '1rem' }} /> Share Your Photos With Us
              </button>
            </a>
          </div>

        </div>
      </div>

      {/* ANNUAL AUDIT REPORTS DOWNLOAD CALLOUT */}
      <div style={{ backgroundColor: '#fafafa', padding: '50px 5%', borderBottom: '1px solid #f0f0f0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ color: theme.colors.secondary, fontWeight: '700', fontSize: '1.5rem', marginBottom: '10px' }}>
            Accountability & Transparency
          </h3>
          <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '30px' }}>
            We hold our operations to the highest standards of financial governance and tracking.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/resources/annual-report-2025.pdf" target="_blank" style={{ textDecoration: 'none' }}>
              <button className="audit-download-btn" style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '12px 24px', borderRadius: '8px', color: '#333', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                📄 Download Annual Report 2025
              </button>
            </a>
            <a href="/resources/audit-statement.pdf" target="_blank" style={{ textDecoration: 'none' }}>
              <button className="audit-download-btn" style={{ backgroundColor: '#fff', border: '1px solid #ddd', padding: '12px 24px', borderRadius: '8px', color: '#333', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                📊 Financial Audit Statement
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* FINAL INTERACTIVE DRIVER CTA SECTION WITH ACTIVE LINKS */}
      <div style={{ padding: '80px 5%', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
        <FaHeart style={{ color: theme.colors.primary, fontSize: '2.2rem', marginBottom: '20px' }} />
        <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: '700', marginBottom: '15px' }}>
          Be Part of the Resilience Story
        </h2>
        <p style={{ color: '#555', fontSize: '1rem', lineHeight: '1.6', marginBottom: '35px' }}>
          Your resources directly enable operational deployment, buy asset kits, or construct digital labs across underserved zones.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/get-involved" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: theme.colors.primary, color: 'white', border: 'none', padding: '14px 32px',
              borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: `0 4px 15px ${theme.colors.primary}33`
            }}>
              Support a Cluster <FaArrowRight fontSize="0.8rem" />
            </button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: 'transparent', color: theme.colors.secondary, border: `2px solid ${theme.colors.secondary}`,
              padding: '12px 30px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer'
            }}>
              Partner with Us
            </button>
          </Link>
        </div>
      </div>

      {/* INTERACTIVE COMPONENT LIGHTBOX LIGHTWEIGHT MODAL SYSTEM */}
      {lightboxImg && (
        <div 
          onClick={() => setLightboxImg(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', boxSizing: 'border-box'
          }}
        >
          <button style={{ position: 'absolute', top: '25px', right: '25px', backgroundColor: 'transparent', border: 'none', color: '#fff', fontSize: '1.8rem', cursor: 'pointer' }}>
            <FaTimes />
          </button>
          <img src={lightboxImg} alt="Enlarged View" style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
        </div>
      )}

      {/* CSS Layout Breakpoints Scoped Block */}
      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        .responsive-title { font-size: 2.2rem; font-weight: bold; margin-bottom: 15px; }

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

        /* Dynamic Hover States for Submission Trigger */
        .share-photos-btn:hover {
          background-color: #A62639 !important;
          color: #ffffff !important;
          box-shadow: 0 8px 24px rgba(166, 38, 57, 0.3) !important;
          transform: translateY(-2px);
        }

        .share-photos-btn:active {
          transform: translateY(0);
        }

        /* Hover States for Audit Download Buttons */
        .audit-download-btn:hover {
          background-color: #f5f5f5 !important;
          border-color: #b5b5b5 !important;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .stories-split-box { flex-direction: column; }
          .stories-nav-panel { border-right: none !important; border-bottom: 1px solid #e2e2e2; display: flex !important; flex-direction: row !important; overflow-x: auto; gap: 15px; padding: 20px !important; }
          .stories-nav-panel > div { flex-direction: row !important; display: flex !important; width: max-content; }
          .stories-nav-panel h4 { display: none; }
          .stories-nav-panel button { width: 220px !important; flex-shrink: 0; border-left: none !important; border-bottom: 3px solid transparent !important; }
          .stories-nav-panel button:hover { border-bottom-color: ${theme.colors.primary} !important; }
          .stories-content-panel { padding: 35px !important; flex-direction: column-reverse; gap: 30px !important; }
          .story-image-wrapper { width: 100% !important; height: 260px !important; }
          .gallery-grid-layout { grid-template-columns: repeat(2, 1fr); }
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