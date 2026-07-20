import React, { useState } from 'react';
import { SEO } from '../shared/seo';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { footprintRegions } from '../data/footprintRegions';
import {
  FaGraduationCap, FaBriefcase, FaStethoscope, FaLeaf,
  FaUsers, FaGlobe, FaSearch, FaUserFriends, FaChartBar,
  FaBookOpen, FaHeart, FaBolt, FaShieldAlt
} from 'react-icons/fa';

/* ─── Design tokens ──────────────────────────────────────────────────────────── */
const CRIMSON    = '#A62639';
const EARTH      = '#3C3530';
const BG         = '#F9F7F2';
const SAND       = '#E8DCC8';
const WARM_TAN   = '#C4A882';
const WHITE      = '#FFFFFF';
const SECTION_ALT = '#FAFAFA';
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

/* ─── Morphing Blob ──────────────────────────────────────────────────────────── */
const HeroBlob: React.FC = () => (
  <div aria-hidden style={{
    position: 'absolute', width: 500, height: 420,
    background: `radial-gradient(ellipse at 40% 50%, ${WARM_TAN}40 0%, ${CRIMSON}18 60%, transparent 100%)`,
    top: '50%', left: '50%', transform: 'translate(-50%, -54%)',
    animation: 'jwf-blobMorph 12s ease-in-out infinite',
    filter: 'blur(52px)', zIndex: 0,
  }} />
);

/* ─── Section heading + pill badge ──────────────────────────────────────────── */
const SectionHeader: React.FC<{ pill?: string; heading: string; sub?: string }> = ({ heading, sub }) => (
  <div style={{ textAlign: 'center', marginBottom: 48 }}>
    <h2 style={{
      fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
      fontWeight: 800, color: EARTH, margin: '0 0 14px',
    }}>
      {heading}
    </h2>
    {sub && (
      <p style={{ color: EARTH_MUTED, fontSize: '0.95rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.65 }}>
        {sub}
      </p>
    )}
  </div>
);

/* ─── Data ───────────────────────────────────────────────────────────────────── */
const focusAreasData = [
  { title: 'Tourism Development',   desc: 'Eco-tourism and cultural tourism in rural belts to generate community livelihoods.',                   icon: <FaGlobe />,       imageUrl: 'tourism.jpg',   primary: true  },
  { title: 'Tribal Affairs',        desc: 'Protecting rights, culture and heritage of indigenous communities across eastern India.',             icon: <FaUserFriends />, imageUrl: 'tribal.jpg',    primary: true  },
  { title: "Women's Empowerment",   desc: 'Enabling women through SHGs, legal literacy, and economic independence programs.',                    icon: <FaShieldAlt />,   imageUrl: 'women.jpg',     primary: true  },
  { title: 'Youth Affairs',         desc: 'Channeling youth energy into leadership, sports, and community service initiatives.',                  icon: <FaUsers />,       imageUrl: 'youth.jpg',     primary: true  },
  { title: 'Skill Development',     desc: 'Vocational and digital training to make rural youth employment-ready for modern industries.',          icon: <FaBriefcase />,   imageUrl: 'skill.jpg',     primary: false },
  { title: 'Education & Literacy',  desc: 'Building access to quality education in remote rural and semi-urban areas.',                          icon: <FaGraduationCap />, imageUrl: 'education.jpg', primary: false },
  { title: 'Health & Family Welfare', desc: 'Health camps, nutrition programs, and maternal care in underserved communities.',                   icon: <FaStethoscope />, imageUrl: 'health.jpg',    primary: false },
  { title: 'Human Rights & Sports', desc: 'Advocating for justice while using sports as a vehicle for youth development.',                       icon: <FaChartBar />,    imageUrl: 'human.jpg',     primary: false },
];

const fieldsOfWork = [
  { label: 'EDUCATION',    icon: <FaBookOpen />   },
  { label: 'HEALTH',       icon: <FaHeart />      },
  { label: 'RESILIENCE',   icon: <FaBolt />       },
  { label: 'LIVELIHOOD',   icon: <FaLeaf />       },
  { label: 'PROTECTION',   icon: <FaShieldAlt />  },
  { label: 'HUMANITARIAN', icon: <FaGraduationCap /> },
];

const coreValuesData = [
  { title: 'Respect',         desc: 'We treat every community member, partner and volunteer with deep dignity and cultural sensitivity.', icon: <FaUserFriends /> },
  { title: 'Transparency',    desc: 'We maintain open books, honest reporting and clear communication with all stakeholders.',            icon: <FaSearch />      },
  { title: 'Participation',   desc: 'Communities are not beneficiaries — they are co-creators of every program we build.',              icon: <FaUsers />       },
  { title: 'Sustainability',  desc: 'We design for long-term self-reliance in all our programs.',                                        icon: <FaLeaf />        },
  { title: 'Impact',          desc: 'Every rupee and every hour is evaluated against measurable community outcomes.',                    icon: <FaChartBar />    },
];


/* ─── Component ──────────────────────────────────────────────────────────────── */
const Initiatives: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('JH');

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", backgroundColor: BG, color: EARTH, overflowX: 'hidden' }}>
      <SEO title="Our Initiatives" description="Explore our core focus areas, active programs, and core values in practice." />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,600;0,700;1,400;1,600&display=swap');

        @keyframes jwf-blobMorph {
          0%,100% { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
          25%      { border-radius: 45% 55% 38% 62% / 55% 45% 60% 40%; }
          50%      { border-radius: 55% 45% 62% 38% / 42% 58% 45% 55%; }
          75%      { border-radius: 38% 62% 48% 52% / 60% 40% 52% 48%; }
        }
        @keyframes jwf-floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes jwf-fadeIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .jwf-fade-in { animation: jwf-fadeIn 0.75s ease both; }
        .jwf-d1 { animation-delay: 0.10s; }
        .jwf-d2 { animation-delay: 0.22s; }
        .jwf-d3 { animation-delay: 0.34s; }
        .jwf-d4 { animation-delay: 0.46s; }

        .jwf-focus-card { transition: box-shadow 0.25s ease, transform 0.25s ease; }
        .jwf-focus-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(166,38,57,0.10) !important; border-color: rgba(166,38,57,0.30) !important; }

        .jwf-field-card { transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease; }
        .jwf-field-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(166,38,57,0.10) !important; border-color: rgba(166,38,57,0.30) !important; }
        .jwf-field-card:hover .jwf-field-icon { transform: scale(1.1); }
        .jwf-field-icon { transition: transform 0.25s ease; }

        .jwf-value-card { transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease; }
        .jwf-value-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(166,38,57,0.10) !important; border-color: rgba(166,38,57,0.30) !important; }

        .jwf-partner-card { transition: box-shadow 0.2s ease, border-color 0.2s ease; }
        .jwf-partner-card:hover { border-color: rgba(166,38,57,0.30) !important; box-shadow: 0 6px 20px rgba(166,38,57,0.08) !important; }

        .jwf-init-grid { display: grid; gap: 24px; grid-template-columns: repeat(4, 1fr); }
        .jwf-fields-grid { display: grid; gap: 20px; grid-template-columns: repeat(6, 1fr); }
        .jwf-values-grid { display: grid; gap: 20px; grid-template-columns: repeat(5, 1fr); }
        .jwf-partners-grid { display: grid; gap: 20px; grid-template-columns: repeat(6, 1fr); }

        @media (max-width: 1024px) {
          .jwf-init-grid    { grid-template-columns: repeat(2, 1fr); }
          .jwf-fields-grid  { grid-template-columns: repeat(3, 1fr); }
          .jwf-values-grid  { grid-template-columns: repeat(2, 1fr); }
          .jwf-values-grid > div:last-child { grid-column: span 2; }
          .jwf-partners-grid { grid-template-columns: repeat(3, 1fr); }
          .map-split-container { flex-direction: column; }
          .map-split-container > div { padding: 30px !important; }
        }
        @media (max-width: 600px) {
          .jwf-init-grid, .jwf-values-grid, .jwf-partners-grid { grid-template-columns: 1fr !important; }
          .jwf-fields-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .jwf-values-grid > div:last-child { grid-column: span 1 !important; }
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', minHeight: '92vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: BG, overflow: 'hidden', padding: '80px 5% 60px',
      }}>
        <HeroBlob />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 720 }}>
          <h1 className="jwf-fade-in jwf-d1" style={{
            fontFamily: "'Lora', serif", fontStyle: 'italic',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 600,
            color: EARTH, lineHeight: 1.25, margin: '0 0 28px',
          }}>
            Our Work,<br />
            <span style={{ color: CRIMSON }}>Our Mission.</span>
          </h1>
          <p className="jwf-fade-in jwf-d2" style={{ fontSize: '1.15rem', lineHeight: 1.75, color: EARTH_MUTED, maxWidth: 540, margin: '0 auto 40px' }}>
            There are people this system has never reached — not because they don't exist, but because reaching them is hard. The Johar Foundation has been making that trip, again and again.
          </p>
          <p className="jwf-fade-in jwf-d2" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.6,
            maxWidth: 580, margin: '0 auto 40px',
            fontFamily: "'Lora', serif", fontStyle: 'italic', fontWeight: 400,
            color: EARTH_MUTED,
          }}>
            सेवा परमो धर्मः<br />
            <span style={{ fontSize: '0.92rem', letterSpacing: '0.03em', color: CRIMSON, fontWeight: 400 }}>"Service is the Highest Duty."</span>
          </p>
          <div className="jwf-fade-in jwf-d3" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 1, height: 56, background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`, borderRadius: 1 }} />
          </div>
        </div>
        <div aria-hidden style={{ position: 'absolute', bottom: 100, left: '6%', width: 80, height: 68, borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', background: SAND, opacity: 0.55, animation: 'jwf-floatY 6s ease-in-out infinite' }} />
        <div aria-hidden style={{ position: 'absolute', top: 140, right: '7%', width: 52, height: 52, borderRadius: '50%', background: SAND, opacity: 0.45, animation: 'jwf-floatY 8s ease-in-out infinite 2s' }} />
        <div aria-hidden style={{ position: 'absolute', bottom: 160, right: '14%', width: 28, height: 28, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: WARM_TAN, opacity: 0.4, animation: 'jwf-floatY 5s ease-in-out infinite 0.5s' }} />
      </section>

      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* ── FOCUS AREAS ───────────────────────────────────────────────────────── */}
      <section style={{ background: SECTION_ALT }}>
        <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <SectionHeader
            heading="Our Focus Areas"
            sub="Our registered sectors cover both primary and secondary development areas ensuring broad and practical community impact."
          />
          <div className="jwf-init-grid">
            {focusAreasData.map((area, index) => (
              <div key={index} className="jwf-focus-card" style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                border: '1px solid #f1f1f1',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxSizing: 'border-box',
              }}>
                <div style={{ width: '100%', height: '150px', position: 'relative', overflow: 'hidden', backgroundColor: '#eaeaea' }}>
                  <img
                    src={area.imageUrl}
                    alt={area.title}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.12)' }} />
                  <div style={{
                    position: 'absolute', top: '12px', right: '12px', backgroundColor: 'white',
                    fontSize: '0.65rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '4px',
                    color: area.primary ? CRIMSON : '#2ecc71',
                    letterSpacing: '0.5px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                  }}>
                    {area.primary ? 'PRIMARY' : 'SECONDARY'}
                  </div>
                </div>
                <div style={{ padding: '25px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff',
                    color: CRIMSON, display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: '-43px auto 15px auto', position: 'relative', zIndex: 2,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)', fontSize: '0.95rem', border: '1px solid #f0f0f0',
                  }}>
                    {area.icon}
                  </div>
                  <h4 style={{ color: EARTH, margin: '0 0 12px 0', fontSize: '1.1rem', fontWeight: '700' }}>
                    {area.title}
                  </h4>
                  <p style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.6', margin: 0 }}>
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor={SECTION_ALT} bottomColor={BG} />

      {/* ── FIELDS OF WORK ────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: '80px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader
            pill="Our Fields of Work"
            heading="Areas of Core Engagement"
            sub="Operating across foundational pillars to build long-term local resilience."
          />
          <div className="jwf-fields-grid">
            {fieldsOfWork.map((item, i) => (
              <div key={i} className="jwf-field-card" style={{
                background: WHITE, border: '1px solid #e8e0d8', borderRadius: 16,
                padding: '28px 14px', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 12, cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(60,53,48,0.03)',
              }}>
                <div className="jwf-field-icon" style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: `${CRIMSON}14`, color: CRIMSON,
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  fontSize: '1.35rem',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', fontWeight: 800, color: EARTH, letterSpacing: '1px', textTransform: 'uppercase' as const }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* ── MAP FOOTPRINT ─────────────────────────────────────────────────────── */}
      <section style={{ background: SECTION_ALT, padding: '80px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader
            pill="Regional Footprint"
            heading="Where We Create Impact"
            sub="Hover or tap a state to see our work on the ground across eastern India."
          />
          <div className="map-split-container" style={{
            display: 'flex', background: WHITE, border: '1px solid #e8e0d8',
            borderRadius: 24, overflow: 'hidden', boxShadow: '0 10px 30px rgba(60,53,48,0.06)',
          }}>
            <div style={{ flex: 1, background: SECTION_ALT, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 24 }}>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [85.05, 22.74], scale: 2600 }}
                width={500} height={600}
                style={{ width: '100%', maxWidth: 340, height: 'auto', display: 'block' }}
              >
                <Geographies geography="/india-states.json">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {({ geographies }: { geographies: any[] }) =>
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    geographies.filter((geo: any) => footprintRegions.some(r => r.name === geo.properties.name)).map((geo: any) => {
                      const match = footprintRegions.find(r => r.name === geo.properties.name)!;
                      const isActive = selectedState === match.id;
                      return (
                        <Geography key={geo.rsmKey} geography={geo} tabIndex={0}
                          onClick={() => setSelectedState(match.id)}
                          onMouseEnter={() => setSelectedState(match.id)}
                          style={{
                            default: { fill: isActive ? CRIMSON : '#dcdcdc', stroke: WHITE, strokeWidth: 2, outline: 'none', cursor: 'pointer', transition: 'fill 0.2s ease' },
                            hover:   { fill: CRIMSON, stroke: WHITE, strokeWidth: 2, outline: 'none', cursor: 'pointer' },
                            pressed: { fill: CRIMSON, stroke: WHITE, strokeWidth: 2, outline: 'none' },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>
            <div style={{ flex: '1.2', padding: 45, textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box', borderLeft: '1px solid #f0f0f0' }}>
              {(() => {
                const r = footprintRegions.find(reg => reg.id === selectedState)!;
                return (
                  <>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", margin: '0 0 14px', fontSize: '1.8rem', color: EARTH, fontWeight: 800 }}>
                      {r.name}
                    </h3>
                    <p style={{ margin: '0 0 24px', color: EARTH_MUTED, fontSize: '0.9rem', lineHeight: 1.65 }}>
                      {r.description}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {r.highlights.map(h => (
                        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: EARTH, fontWeight: 600 }}>
                          <span style={{ width: 6, height: 6, borderRadius: '50%', background: CRIMSON, flexShrink: 0 }} />
                          {h}
                        </div>
                      ))}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor={SECTION_ALT} bottomColor={BG} />

      {/* ── CORE VALUES ───────────────────────────────────────────────────────── */}
      <section style={{ background: BG, padding: '80px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeader
            pill="How We Work"
            heading="Core Values in Practice"
          />
          <div className="jwf-values-grid">
            {coreValuesData.map((val, i) => (
              <div key={i} className="jwf-value-card" style={{
                background: WHITE, border: '1px solid #e8e0d8', borderRadius: 16,
                padding: '32px 24px', textAlign: 'center',
                boxShadow: '0 2px 12px rgba(60,53,48,0.04)',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: `${CRIMSON}14`, color: CRIMSON,
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  margin: '0 auto 16px', fontSize: '1.2rem',
                }}>
                  {val.icon}
                </div>
                <h4 style={{ fontFamily: "'DM Sans', sans-serif", margin: '0 0 10px', fontSize: '1.05rem', fontWeight: 700, color: EARTH }}>
                  {val.title}
                </h4>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.65, margin: 0, color: EARTH_MUTED }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Initiatives;
