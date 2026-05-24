import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { 
  FaGraduationCap, FaBriefcase, FaStethoscope, FaLeaf, 
  FaUsers, FaGlobe, FaSearch, FaUserFriends, FaChartBar,
  FaBookOpen, FaHeart, FaBolt, FaShieldAlt, FaHandshake
} from 'react-icons/fa';

// 8 Focus Areas Data with layout image mappings
const focusAreasData = [
  { title: 'Tourism Development', segment: 'PRIMARY', desc: 'Eco-tourism and cultural tourism in rural belts to generate community livelihoods.', icon: <FaGlobe />, imageUrl: 'tourism.jpg' },
  { title: 'Tribal Affairs', segment: 'PRIMARY', desc: 'Protecting rights, culture and heritage of indigenous communities across eastern India.', icon: <FaUserFriends />, imageUrl: 'tribal.jpg' },
  { title: 'Women\'s Empowerment', segment: 'PRIMARY', desc: 'Enabling women through SHGs, legal literacy, and economic independence programs.', icon: <FaShieldAlt />, imageUrl: 'women.jpg' },
  { title: 'Youth Affairs', segment: 'PRIMARY', desc: 'Channeling youth energy into leadership, sports, and community service initiatives.', icon: <FaUsers />, imageUrl: 'youth.jpg' },
  { title: 'Skill Development', segment: 'SECONDARY', desc: 'Vocational and digital training to make rural youth employment-ready for modern industries.', icon: <FaBriefcase />, imageUrl: 'skill.jpg' },
  { title: 'Education & Literacy', segment: 'SECONDARY', desc: 'Building access to quality education in remote rural and semi-urban areas.', icon: <FaGraduationCap />, imageUrl: 'education.jpg' },
  { title: 'Health & Family Welfare', segment: 'SECONDARY', desc: 'Health camps, nutrition programs, and maternal care in underserved communities.', icon: <FaStethoscope />, imageUrl: 'health.jpg' },
  { title: 'Human Rights & Sports', segment: 'SECONDARY', desc: 'Advocating for justice while using sports as a vehicle for youth development.', icon: <FaChartBar />, imageUrl: 'human.jpg' }
];

// 6 Fields of Work Data from Ribbon
const fieldsOfWork = [
  { label: 'EDUCATION', icon: <FaBookOpen />, color: '#1abc9c' },
  { label: 'HEALTH', icon: <FaHeart />, color: '#e84393' },
  { label: 'RESILIENCE', icon: <FaBolt />, color: '#f39c12' },
  { label: 'LIVELIHOOD', icon: <FaLeaf />, color: '#2ecc71' },
  { label: 'PROTECTION', icon: <FaShieldAlt />, color: '#e67e22' },
  { label: 'HUMANITARIAN', icon: <FaGraduationCap />, color: '#9b59b6' }
];

// Combined 5 Core Values Data for the Single Line Row Configuration
const coreValuesData = [
  { title: 'Respect', desc: 'We treat every community member, partner and volunteer with deep dignity and cultural sensitivity.', icon: <FaUserFriends />, color: '#f39c12' },
  { title: 'Transparency', desc: 'We maintain open books, honest reporting and clear communication with all stakeholders.', icon: <FaSearch />, color: '#e67e22' },
  { title: 'Participation', desc: 'Communities are not beneficiaries — they are co-creators of every program we build.', icon: <FaUsers />, color: '#1abc9c' },
  { title: 'Sustainability', desc: 'We design for long-term self-reliance, not short-term dependency, in all our programs.', icon: <FaLeaf />, color: '#9b59b6' },
  { title: 'Impact', desc: 'Every rupee and every hour is accounted for and evaluated against measurable community outcomes.', icon: <FaChartBar />, color: '#A62639' }
];

// Geographic Information Dataset Linked directly with map vectors
const mapRegionsData: Record<string, { name: string; tagline: string; description: string; highlights: string[] }> = {
  JH: {
    name: "Jharkhand",
    tagline: "Core Operational Hub",
    description: "Our primary base running extensive Self-Help Group (SHG) networks, sports academies, and deep-root cultural heritage protection setups.",
    highlights: ["15+ Districts Engaged", "350+ Active SHGs", "Digital Training Labs"]
  },
  OR: {
    name: "Odisha",
    tagline: "Eco-Tourism & Livelihoods",
    description: "Focusing on sustainable community-owned tourism modules across coastal and tribal belts coupled with specialized artisanal trade development.",
    highlights: ["Artisanal Clusters", "Maternal Care Outposts", "Tourism Cooperatives"]
  },
  WB: {
    name: "West Bengal",
    tagline: "Youth Leadership Foundations",
    description: "Empowering rural and semi-urban communities via tech literacy programs, primary health camps, and structured sports advancement tracks.",
    highlights: ["Border-block Outreach", "Vocational Hubs", "Community Clinics"]
  },
  BR: {
    name: "Bihar",
    tagline: "Health & Capacity Elevation",
    description: "Deploying grassroots family welfare workshops, basic educational pathways, and alternative micro-livelihoods frameworks for women.",
    highlights: ["Rural Literacy Centers", "Health Awareness Camps", "Skill Modules"]
  },
  CG: {
    name: "Chhattisgarh",
    tagline: "Tribal Advocacy & Resilience",
    description: "Partnering closely with indigenous pockets to map forest rights assets, preserve generational craftsmanship, and introduce localized farming methods.",
    highlights: ["5 Indigenous Belts", "Forest Produce Collectives", "Rights Workshops"]
  }
};

// Partners Data List
const partnersData = [
  { name: 'State Depts (JSLPS)' },
  { name: 'Corporate CSR' },
  { name: 'NABARD Support' },
  { name: 'Local Collaborators' },
  { name: 'Skill Partners' },
  { name: 'Academic Links' }
];

const Initiatives: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('JH');

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

  const valueTileStyle = (color: string): React.CSSProperties => ({
    backgroundColor: color,
    color: 'white',
    padding: '30px 20px',
    borderRadius: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    boxSizing: 'border-box',
    width: '100%'
  });

  return (
    <div style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Our Initiatives" description="Explore our core focus areas, active programs, and core values in practice." />

      {/* Hero Header */}
      <div style={{ 
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #1a1a1a 100%)`,
        color: theme.colors.white, 
        padding: '70px 5%',
        textAlign: 'center',
        borderBottom: `4px solid ${theme.colors.primary}`
      }}>
        <div style={{ ...badgeStyle, backgroundColor: `${theme.colors.primary}33`, color: '#ff9da9' }}>
          WHAT WE DO
        </div>
        <h1 className="responsive-h1" style={{ marginBottom: '15px', fontWeight: 'bold' }}>Our Initiatives</h1>
        <p style={{ fontSize: '1rem', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
          Discover our sustainable implementation models engineered to bring broad community impact across rural clusters.
        </p>
      </div>

      {/* 4x4 OUR FOCUS AREAS SECTION */}
      <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={badgeStyle}>WHAT WE WORK ON</div>
        <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: 'bold', marginBottom: '15px' }}>
          Our Focus Areas
        </h2>
        <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
          Our registered sectors cover both primary and secondary development areas ensuring broad and practical community impact.
        </p>

        <div className="initiatives-grid-4x4">
          {focusAreasData.map((area, index) => (
            <div key={index} className="focus-card-4x4" style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
              border: '1px solid #f1f1f1',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box'
            }}>
              <div style={{ width: '100%', height: '150px', position: 'relative', overflow: 'hidden' }}>
                <img src={area.imageUrl} alt={area.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.12)' }} />
                <div style={{ 
                  position: 'absolute', top: '12px', right: '12px', backgroundColor: 'white', 
                  fontSize: '0.65rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: '4px',
                  color: index < 4 ? theme.colors.primary : '#2ecc71',
                  letterSpacing: '0.5px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
                }}>
                  {index < 4 ? 'PRIMARY' : 'SECONDARY'}
                </div>
              </div>

              <div style={{ padding: '25px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'center', position: 'relative' }}>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff',
                  color: theme.colors.primary, display: 'flex', justifyContent: 'center', alignItems: 'center',
                  margin: '-43px auto 15px auto', position: 'relative', zIndex: 2, 
                  boxShadow: '0 4px 10px rgba(0,0,0,0.08)', fontSize: '0.95rem', border: '1px solid #f0f0f0'
                }}>
                  {area.icon}
                </div>
                <h4 style={{ color: theme.colors.secondary, margin: '0 0 12px 0', fontSize: '1.1rem', fontWeight: '700' }}>
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

      {/* 6 FIELDS OF WORK - ELEVATED MODERN GRID ARRAY */}
      <div style={{ backgroundColor: '#fafafa', padding: '60px 5%', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={badgeStyle}>OUR FIELDS OF WORK</div>
          <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: 'bold', marginBottom: '15px' }}>
            Areas of Core Engagement
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
            Operating fluidly across foundational pillars to build long-term local resilience.
          </p>

          <div className="fields-grid-6x">
            {fieldsOfWork.map((item, index) => (
              <div 
                key={index} 
                className="field-work-card"
                style={{ 
                  backgroundColor: '#fff',
                  border: '1px solid #eaeaea',
                  borderRadius: '16px',
                  padding: '30px 15px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: `${item.color}12`, 
                  color: item.color,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '4px',
                  transition: 'transform 0.3s ease'
                }} className="field-card-icon">
                  {item.icon}
                </div>
                
                <div style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: '800', 
                  color: theme.colors.secondary, 
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERACTIVE REGIONAL MAP FOOTPRINT */}
      <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={badgeStyle}>REGIONAL FOOTPRINT</div>
        <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: 'bold', marginBottom: '15px' }}>
          Where We Create Impact
        </h2>
        <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
          Hover over or click on a state to view our localized infrastructure implementations across Eastern India.
        </p>

        <div className="map-split-container" style={{ 
          display: 'flex', backgroundColor: '#fff', border: '1px solid #ececec', 
          borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' 
        }}>
          {/* Map Left Block */}
          <div style={{ flex: '1', padding: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fafafa' }}>
            <svg viewBox="0 0 400 380" style={{ width: '100%', maxWidth: '340px', height: 'auto' }}>
              {/* Bihar */}
              <path d="M120,60 L240,55 L260,110 L160,120 L115,110 Z"
                className={`map-path ${selectedState === 'BR' ? 'active' : ''}`}
                onClick={() => setSelectedState('BR')} onMouseEnter={() => setSelectedState('BR')}
                style={{ fill: selectedState === 'BR' ? theme.colors.primary : '#e5e5e5', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease' }}
              />
              <text x="165" y="90" style={{ fontSize: '10px', fontWeight: 'bold', fill: selectedState === 'BR' ? '#fff' : '#666', pointerEvents: 'none', transition: 'all 0.2s ease' }}>BIHAR</text>

              {/* Jharkhand */}
              <path d="M115,110 L160,120 L260,110 L280,180 L190,200 L110,175 Z"
                className={`map-path ${selectedState === 'JH' ? 'active' : ''}`}
                onClick={() => setSelectedState('JH')} onMouseEnter={() => setSelectedState('JH')}
                style={{ fill: selectedState === 'JH' ? theme.colors.primary : '#dcdcdc', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease' }}
              />
              <text x="160" y="155" style={{ fontSize: '11px', fontWeight: 'bold', fill: selectedState === 'JH' ? '#fff' : '#33px', pointerEvents: 'none', transition: 'all 0.2s ease' }}>JHARKHAND</text>

              {/* West Bengal */}
              <path d="M260,110 L350,115 L340,170 L280,240 L265,195 L280,180 Z"
                className={`map-path ${selectedState === 'WB' ? 'active' : ''}`}
                onClick={() => setSelectedState('WB')} onMouseEnter={() => setSelectedState('WB')}
                style={{ fill: selectedState === 'WB' ? theme.colors.primary : '#e5e5e5', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease' }}
              />
              <text x="282" y="160" style={{ fontSize: '9px', fontWeight: 'bold', fill: selectedState === 'WB' ? '#fff' : '#666', pointerEvents: 'none', transform: 'rotate(12 278 150)', transition: 'all 0.2s ease' }}>W. BENGAL</text>

              {/* Chhattisgarh */}
              <path d="M110,175 L190,200 L185,250 L145,340 L95,290 L100,220 Z"
                className={`map-path ${selectedState === 'CG' ? 'active' : ''}`}
                onClick={() => setSelectedState('CG')} onMouseEnter={() => setSelectedState('CG')}
                style={{ fill: selectedState === 'CG' ? theme.colors.primary : '#ebebeb', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease' }}
              />
              <text x="103" y="240" style={{ fontSize: '9px', fontWeight: 'bold', fill: selectedState === 'CG' ? '#fff' : '#666', pointerEvents: 'none', transform: 'rotate(-70 115 255)', transition: 'all 0.2s ease' }}>CHHATTISGARH</text>

              {/* Odisha */}
              <path d="M190,200 L265,195 L280,240 L230,310 L185,250 Z"
                className={`map-path ${selectedState === 'OR' ? 'active' : ''}`}
                onClick={() => setSelectedState('OR')} onMouseEnter={() => setSelectedState('OR')}
                style={{ fill: selectedState === 'OR' ? theme.colors.primary : '#dfdfdf', stroke: '#fff', strokeWidth: 2, cursor: 'pointer', transition: 'all 0.2s ease' }}
              />
              <text x="205" y="245" style={{ fontSize: '11px', fontWeight: 'bold', fill: selectedState === 'OR' ? '#fff' : '#666', pointerEvents: 'none', transition: 'all 0.2s ease' }}>ODISHA</text>
            </svg>
          </div>

          {/* Info Side Block */}
          <div style={{ flex: '1.2', padding: '45px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxSizing: 'border-box' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 'bold', color: theme.colors.primary, textTransform: 'uppercase', letterSpacing: '1px', border: `1px solid ${theme.colors.primary}35`, padding: '3px 10px', borderRadius: '30px', display: 'inline-block', marginBottom: '12px', width: 'fit-content' }}>
              {/* FIXED: Replaced 'tracking' with 'letterSpacing' */}
              {mapRegionsData[selectedState].tagline}
            </span>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '1.8rem', color: theme.colors.secondary, fontWeight: '700' }}>
              {mapRegionsData[selectedState].name} Focus
            </h3>
            <p style={{ margin: '0 0 25px 0', color: '#555', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {mapRegionsData[selectedState].description}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {mapRegionsData[selectedState].highlights.map((highlight, hIdx) => (
                <div key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#333', fontWeight: '600' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: theme.colors.primary }} />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CORE VALUES IN PRACTICE SECTION */}
      <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={badgeStyle}>HOW WE WORK</div>
        <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: 'bold', marginBottom: '40px' }}>Core Values in Practice</h2>

        <div className="core-values-single-line-grid">
          {coreValuesData.map((val, index) => (
            <div key={index} style={valueTileStyle(val.color)}>
              <div style={{ fontSize: '1.8rem', color: 'white' }}>{val.icon}</div>
              <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem', fontWeight: 'bold', color: 'white' }}>{val.title}</h4>
              <p style={{ fontSize: '0.82rem', lineHeight: '1.5', margin: 0, color: 'white', opacity: 0.95 }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS & STAKEHOLDERS */}
      <div style={{ backgroundColor: '#fff', padding: '60px 5%', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={badgeStyle}>OUR COLLABORATORS</div>
          <h2 className="responsive-title" style={{ color: theme.colors.secondary, fontWeight: 'bold', marginBottom: '15px' }}>
            Partners & Stakeholders
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '620px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
            We work hand-in-hand with state bodies, rural institutions, and corporate ecosystems to build scaled execution systems.
          </p>

          <div className="partners-grid">
            {partnersData.map((partner, pIdx) => (
              <div key={pIdx} className="partner-item" style={{
                backgroundColor: '#fafafa', border: '1px solid #eeeeee', borderRadius: '12px',
                padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: '10px', transition: 'all 0.2s ease'
              }}>
                <FaHandshake style={{ color: '#ccc', fontSize: '1.3rem' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#666', letterSpacing: '0.5px' }}>
                  {/* FIXED: Replaced 'tracking' with 'letterSpacing' */}
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded Mobile Responsiveness & Layout Tweaks */}
      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        .responsive-title { font-size: 2.2rem; }

        .initiatives-grid-4x4 {
          display: grid;
          gap: 25px;
          grid-template-columns: repeat(4, 1fr);
        }

        /* 6-Column Layout Blueprint */
        .fields-grid-6x {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(6, 1fr);
          width: 100%;
          margin-top: 20px;
        }

        .field-work-card {
          box-sizing: border-box;
        }

        .field-work-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.05) !important;
          border-color: #dfdfdf !important;
        }
        
        .field-work-card:hover .field-card-icon {
          transform: scale(1.1);
        }

        .core-values-single-line-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(5, 1fr);
          width: 100%;
        }

        .partners-grid {
          display: grid;
          gap: 20px;
          grid-template-columns: repeat(6, 1fr);
        }

        .map-path:hover {
          fill: ${theme.colors.primary}cc !important;
        }

        @media (max-width: 1024px) {
          .initiatives-grid-4x4 { grid-template-columns: repeat(2, 1fr); }
          .fields-grid-6x { grid-template-columns: repeat(3, 1fr); }
          .core-values-single-line-grid { grid-template-columns: repeat(2, 1fr); }
          .core-values-single-line-grid > div:last-child { grid-column: span 2; }
          .partners-grid { grid-template-columns: repeat(3, 1fr); }
          .map-split-container { flex-direction: column; }
          .map-split-container > div { padding: 30px !important; text-align: center !important; }
          .map-split-container > div:last-child { align-items: center !important; }
        }

        @media (max-width: 992px) {
          .responsive-h1 { font-size: 2.2rem; }
          .responsive-title { font-size: 1.8rem; }
        }

        @media (max-width: 600px) {
          .initiatives-grid-4x4, .core-values-single-line-grid, .partners-grid {
            grid-template-columns: 1fr !important;
          }
          .fields-grid-6x {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px;
          }
          .core-values-single-line-grid > div:last-child { grid-column: span 1 !important; }
          .responsive-h1 { font-size: 2rem; }
          .responsive-title { font-size: 1.6rem; }
        }
      `}</style>
    </div>
  );
};

export default Initiatives;