import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { 
  FaChartLine, FaHandshake, FaBullhorn, FaLightbulb,
  FaShieldAlt, FaGlobeAmericas, FaLeaf, FaUsers,
  FaBullseye, FaEye, FaHeart, FaMapMarkedAlt, FaLayerGroup, FaCalendarCheck 
} from 'react-icons/fa';

const WhoWeAre: React.FC = () => {
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

  const theoryTileStyle = (color: string): React.CSSProperties => ({
    backgroundColor: color,
    color: 'white',
    padding: '30px 20px',
    borderRadius: '16px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    flex: '1 1 250px',
    boxShadow: '0 8px 15px rgba(0,0,0,0.08)',
    boxSizing: 'border-box'
  });

  const missionCardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '40px 30px',
    borderRadius: '24px',
    textAlign: 'left',
    boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
    border: '1px solid #f0f0f0',
    flex: '1 1 300px'
  };

  const iconCircle = (bgColor: string) => ({
    width: '60px',
    height: '60px',
    borderRadius: '15px',
    backgroundColor: `${bgColor}15`,
    color: bgColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '25px',
    fontSize: '1.5rem'
  });

  return (
    <div style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Who We Are" description="Identity, Mission, Theory of Change, and Impact Stats." />

      {/* Hero Header */}
      <div style={{ 
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #1a1a1a 100%)`,
        color: theme.colors.white, 
        padding: '80px 5%',
        textAlign: 'center',
        borderBottom: `4px solid ${theme.colors.primary}`
      }}>
        <div style={{ ...badgeStyle, backgroundColor: `${theme.colors.primary}33`, color: '#ff9da9' }}>
          OUR IDENTITY
        </div>
        <h1 className="responsive-h1" style={{ marginBottom: '15px', fontWeight: 'bold' }}>Jo Hare Na.</h1>
        <p style={{ fontSize: '1rem', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
          Rooted in Jharkhand, committed to resilient communities and a stronger nation.
        </p>
      </div>

      {/* Mission, Vision & Values */}
      <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={badgeStyle}>GUIDING PRINCIPLES</div>
        <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, marginBottom: '15px', fontWeight: 'bold' }}>
          Mission, Vision & Values
        </h2>
        <p style={{ color: '#666', marginBottom: '40px' }}>Three pillars that define how we think, act and deliver impact.</p>
        
        <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={missionCardStyle}>
            <div style={iconCircle('#f39c12')}><FaBullseye /></div>
            <h3 style={{ fontSize: '1.4rem', color: theme.colors.secondary, marginBottom: '15px' }}>Our Mission</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
              To empower communities through meaningful programs in tribal affairs, women empowerment, youth engagement, and skill development.
            </p>
          </div>
          <div style={missionCardStyle}>
            <div style={iconCircle('#1abc9c')}><FaEye /></div>
            <h3 style={{ fontSize: '1.4rem', color: theme.colors.secondary, marginBottom: '15px' }}>Our Vision</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
              A self-reliant, educated and resilient eastern India where every individual has equal access to opportunity, dignity and growth.
            </p>
          </div>
          <div style={missionCardStyle}>
            <div style={iconCircle(theme.colors.primary)}><FaHeart /></div>
            <h3 style={{ fontSize: '1.4rem', color: theme.colors.secondary, marginBottom: '15px' }}>Our Values</h3>
            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>
              Respect for all communities, radical transparency, cultural sensitivity, and impact-driven delivery in every initiative.
            </p>
          </div>
        </div>
      </div>

      {/* THEORY OF CHANGE */}
      <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#fff', borderRadius: '30px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">OUR THEORY OF CHANGE</h2>
          <p className="section-subtitle">Our set of interventions lead to specific developments and change at the ground level.</p>
        </div>

        <div className="theory-grid">
          <div style={theoryTileStyle('#f39c12')}>
            <FaChartLine size={30} />
            <h3 className="theory-card-h3">ACHIEVE RESULTS<br/>AT SCALE</h3>
            <p className="theory-card-p">Evidence-based programming to ensure scalable impact on marginalised children.</p>
          </div>
          <div style={theoryTileStyle('#e67e22')}>
            <FaHandshake size={35} />
            <h3 className="theory-card-h3">BUILD STRATEGIC<br/>PARTNERSHIPS</h3>
            <p className="theory-card-p">Alliances with government and donors to amplify our child welfare expertise.</p>
          </div>
          <div style={theoryTileStyle('#1abc9c')}>
            <FaBullhorn size={30} />
            <h3 className="theory-card-h3">BE A CONVENOR<br/>OF VOICES</h3>
            <p className="theory-card-p">Inspiring collective action through evidence-based advocacy and campaigns.</p>
          </div>
          <div style={theoryTileStyle('#9b59b6')}>
            <FaLightbulb size={30} />
            <h3 className="theory-card-h3">BE AN<br/>INNOVATOR</h3>
            <p className="theory-card-p">Catalysing new ideas to deliver positive impact on pressing problems.</p>
          </div>
        </div>
      </div>

      {/* restored: HOW WE WORK (Pillars) */}
      <div style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={badgeStyle}>CORE PILLARS</div>
          <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: 'bold' }}>How We Work</h2>
        </div>
        <div className="pillars-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'space-between' }}>
          {[
            { title: 'Transparency', icon: <FaShieldAlt />, desc: '100% fiscal honesty and donation tracking.' },
            { title: 'Local Impact', icon: <FaGlobeAmericas />, desc: 'Direct operations in remote Jharkhand areas.' },
            { title: 'Sustainability', icon: <FaLeaf />, desc: 'Programs designed for long-term growth.' },
            { title: 'Inclusivity', icon: <FaUsers />, desc: 'Ensuring no community is left behind.' }
          ].map((item, index) => (
            <div key={index} className="pillar-card" style={{ 
              flex: 1, backgroundColor: 'white', padding: '30px 20px', 
              borderRadius: '16px', textAlign: 'center', border: '1px solid #f0f0f0' 
            }}>
              <div style={{ fontSize: '1.8rem', color: theme.colors.primary, marginBottom: '15px' }}>{item.icon}</div>
              <h4 style={{ color: theme.colors.secondary, marginBottom: '10px', fontSize: '1.1rem' }}>{item.title}</h4>
              <p style={{ fontSize: '0.85rem', color: theme.colors.text, lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT STATS BANNER */}
      <div style={{ backgroundColor: theme.colors.primary, padding: '60px 5%', color: 'white', textAlign: 'center' }}>
        <div className="stats-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px', maxWidth: '1100px', margin: '0 auto' }}>
          <div className="stat-item">
            <FaMapMarkedAlt size={35} style={{ opacity: 0.8, marginBottom: '10px' }} />
            <h2 style={{ fontSize: '2.2rem', margin: 0 }}>5</h2>
            <p style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>States Focused</p>
          </div>
          <div className="stat-item">
            <FaLayerGroup size={35} style={{ opacity: 0.8, marginBottom: '10px' }} />
            <h2 style={{ fontSize: '2.2rem', margin: 0 }}>9</h2>
            <p style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Core Sectors</p>
          </div>
          <div className="stat-item">
            <FaUsers size={35} style={{ opacity: 0.8, marginBottom: '10px' }} />
            <h2 style={{ fontSize: '2.2rem', margin: 0 }}>30+</h2>
            <p style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Volunteer Network</p>
          </div>
          <div className="stat-item">
            <FaCalendarCheck size={35} style={{ opacity: 0.8, marginBottom: '10px' }} />
            <h2 style={{ fontSize: '2.2rem', margin: 0 }}>5,000+</h2>
            <p style={{ fontSize: '0.7rem', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '5px' }}>Lives Impacted</p>
          </div>
        </div>
      </div>

      {/* GANDHI QUOTE */}
      <div style={{ padding: '80px 5%', textAlign: 'center', background: `#333333`, color: 'white' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ color: theme.colors.primary, fontSize: '2rem', marginBottom: '10px' }}>“</div>
          <h2 className="responsive-quote" style={{ fontStyle: 'italic', fontWeight: '400', lineHeight: '1.4' }}>
            The best way to find yourself is to lose yourself in the service of others.
          </h2>
          <p style={{ marginTop: '15px', color: theme.colors.primary, fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem' }}>
            — MAHATMA GANDHI
          </p>
        </div>
      </div>

      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        .responsive-quote { font-size: 1.6rem; }
        .theory-card-h3 { font-size: 1.1rem; margin: 0; }
        .theory-card-p { font-size: 0.9rem; line-height: 1.5; opacity: 0.95; }
        .theory-grid { display: flex; gap: 15px; justify-content: center; }

        @media (max-width: 992px) {
          .theory-grid, .pillars-grid { flex-direction: column !important; align-items: center; }
          .pillar-card, .theory-grid > div { width: 100%; max-width: 450px; }
          .responsive-h1 { font-size: 2.1rem; }
          .responsive-quote { font-size: 1.3rem; }
          .theory-card-h3 { font-size: 1.1rem !important; }
          .theory-card-p { font-size: 0.85rem !important; }
          .stats-container { flex-direction: column; gap: 30px; }
        }
      `}</style>
    </div>
  );
};

export default WhoWeAre;