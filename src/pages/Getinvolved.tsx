import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { VolunteerForm } from '../components/volunteerform';
import { 
  FaHandshake, FaUsers, FaChevronDown, FaChevronUp, 
  FaHandHoldingDollar, FaBullhorn, FaGift, FaGraduationCap,
  FaVenus, FaBookOpen, FaHeartPulse, FaCamera, FaLaptopCode, FaPenNib
} from 'react-icons/fa6';

const volunteerRolesData = [
  {
    title: 'Skill Trainer',
    desc: 'Teach vocational skills like tailoring, computing, or carpentry to youth.',
    icon: <FaGraduationCap />
  },
  {
    title: "Women's Program Facilitator",
    desc: 'Support Mahila SHG sessions, legal literacy, and livelihood training.',
    icon: <FaVenus />
  },
  {
    title: 'Education Volunteer',
    desc: 'Conduct tuition camps and digital literacy classes for children.',
    icon: <FaBookOpen />
  },
  {
    title: 'Health Camp Support',
    desc: 'Assist doctors at free health camps and manage patient flow.',
    icon: <FaHeartPulse />
  },
  {
    title: 'Media & Documentation',
    desc: 'Photograph, film, and document field programs to tell our story.',
    icon: <FaCamera />
  },
  {
    title: 'Digital & Tech Support',
    desc: 'Help with website maintenance, social media, and data outreach.',
    icon: <FaLaptopCode />
  },
  {
    title: 'Community Outreach',
    desc: 'Mobilize community members and coordinate with local panchayats.',
    icon: <FaHandshake />
  },
  {
    title: 'Grant Writing & Research',
    desc: 'Research funding opportunities and draft institutional proposals.',
    icon: <FaPenNib />
  }
];

export const GetInvolved: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqData = [
    { q: "Is there a minimum age to volunteer?", a: "Yes, volunteers must be at least 18 years old. For those under 18, parental consent is required." },
    { q: "Do I need specific skills?", a: "While specific skills help, the primary requirement is a passion for service. We provide training for specific programs." },
    { q: "Can I volunteer remotely?", a: "Yes! Our Digital Advocacy and Content Creation teams work entirely remotely." },
    { q: "How do organizations partner with you?", a: "Corporates and NGOs can reach out via the 'Partner With Us' section for CSR collaborations." }
  ];

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

  const impactBoxStyle = (color: string): React.CSSProperties => ({
    backgroundColor: color,
    color: 'white',
    padding: '30px 20px',
    borderRadius: '16px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    flex: '1 1 300px',
    boxShadow: '0 8px 15px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s ease'
  });

  const whiteBtnStyle: React.CSSProperties = {
    background: 'white',
    color: 'black',
    border: 'none',
    padding: '10px 25px',
    borderRadius: '50px',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    cursor: 'pointer',
    marginTop: '10px',
    textDecoration: 'none',
    display: 'inline-block'
  };

  return (
    <div style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Get Involved" description="Volunteer, partner, or learn more about helping Johar Foundation." />

      {/* Hero Header */}
      <div style={{ 
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #1a1a1a 100%)`,
        color: 'white', padding: '70px 5%', textAlign: 'center', borderBottom: `4px solid ${theme.colors.primary}`
      }}>
        <div style={{ ...badgeStyle, backgroundColor: `${theme.colors.primary}33`, color: '#ff9da9' }}>
          CONTRIBUTE
        </div>
        <h1 className="responsive-h1" style={{ marginBottom: '15px', fontWeight: 'bold' }}>Get Involved</h1>
        <p style={{ fontSize: '1rem', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
          Change doesn't happen alone. Whether you give time, talent, or resources, your contribution matters.
        </p>
      </div>

      {/* Impact Options */}
      <div style={{ padding: '60px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title">CREATE A LASTING IMPACT</h2>
          <p className="section-subtitle">Explore the ways in which you can support children in need.</p>
        </div>

        <div className="impact-grid">
          <div style={impactBoxStyle('#A62639')}>
            <FaHandHoldingDollar size={35} /> 
            <h3 className="card-h3">MAKE A DONATION</h3>
            <p className="card-p">
              Every small contribution helps provide essential nutrition and education to children in remote clusters.
            </p>
            <Link to="/donate" style={whiteBtnStyle}>Donate Now</Link>
          </div>

          <div style={impactBoxStyle('#1abc9c')}>
            <FaGift size={35} />
            <h3 className="card-h3">HIGH VALUE GIVING</h3>
            <p className="card-p">
              To make a customized or high-value donation for specific school or health projects, please contact our team.
            </p>
            <Link to="/contact" style={whiteBtnStyle}>Contact Us</Link>
          </div>

          <div style={impactBoxStyle('#9b59b6')}>
            <FaBullhorn size={35} />
            <h3 className="card-h3">SUPPORT A CAMPAIGN</h3>
            <p className="card-p">
              Become an advocate. Sign up for our advocacy initiatives and help us voice the issues of underprivileged children.
            </p>
            <Link to="/initiatives" style={whiteBtnStyle}>View Campaigns</Link>
          </div>
        </div>
      </div>

      {/* WORKSPACE SECTION */}
      <div style={{ backgroundColor: '#fff', padding: '60px 5%', borderTop: '1px solid #f9f9f9', borderBottom: '1px solid #f9f9f9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Centered Heading Group */}
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <div style={badgeStyle}>BE THE CHANGE</div>
            <h2 style={{ fontSize: '2.2rem', color: theme.colors.secondary, fontWeight: '800', margin: '0 0 12px 0' }}>
              Volunteer Roles <span style={{ color: theme.colors.primary }}>Available</span>
            </h2>
            <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '750px', lineHeight: '1.6', margin: '0 auto' }}>
              We have opportunities for people of all backgrounds across multiple sectors in Jharkhand and eastern India.
            </p>
          </div>

          {/* Grid setup utilizing space distribution */}
          <div className="volunteer-workspace-split" style={{ display: 'flex', gap: '40px', alignItems: 'stretch' }}>
            
            {/* LEFT COLUMN: AUTO-SPACE DISTRIBUTED BOX HOOKS */}
            <div style={{ 
              flex: '1.2', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between', // Distributes items evenly to seamlessly align with the height of the right column
              gap: '10px' 
            }}>
              {volunteerRolesData.map((role, rIdx) => (
                <div key={rIdx} className="role-display-card" style={{
                  backgroundColor: '#fff',
                  border: '1px solid #f0f0f0',
                  borderRadius: '12px',
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  boxSizing: 'border-box',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.005)',
                  flexGrow: 1, // Dynamically expands slightly if needed to match column parity
                  transition: 'all 0.2s ease-in-out'
                }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: `${theme.colors.primary}12`, color: theme.colors.primary,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    fontSize: '1rem', flexShrink: 0
                  }}>
                    {role.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '0.92rem', color: theme.colors.secondary, fontWeight: '700', margin: '0 0 2px 0' }}>
                      {role.title}
                    </h3>
                    <p style={{ color: '#777', fontSize: '0.8rem', lineHeight: '1.4', margin: '0' }}>
                      {role.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN: STICKY FORM PANEL LAYOUT */}
            <div style={{ flex: '1', width: '100%', maxWidth: '460px' }}>
              <div style={{ 
                backgroundColor: '#fdfdfd', 
                border: '1px solid #eaeaea', 
                borderRadius: '20px', 
                padding: '30px', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                height: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '1.3rem', color: theme.colors.secondary, fontWeight: '800' }}>
                    Become a Volunteer
                  </h3>
                  <p style={{ margin: '0 0 20px 0', fontSize: '0.85rem', color: '#666', lineHeight: '1.4' }}>
                    Join our on-ground team or support us digitally. Fill out the application parameters below.
                  </p>
                  
                  <VolunteerForm />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
                  <div style={{ backgroundColor: `${theme.colors.primary}15`, padding: '8px', borderRadius: '50%', color: theme.colors.primary, display: 'flex' }}>
                    <FaUsers size={14} />
                  </div>
                  <div>
                    <h5 style={{ margin: 0, color: theme.colors.secondary, fontSize: '0.8rem', fontWeight: '700' }}>Join Our Active Network</h5>
                    <p style={{ margin: 0, fontSize: '0.75rem', color: '#888' }}>30+ volunteers operating across 5 Eastern states.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Partner Section */}
      <div style={{ backgroundColor: theme.colors.white, padding: '60px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <FaHandshake size={50} color={theme.colors.primary} style={{ marginBottom: '20px' }} />
          <h2 className="section-title">Partner With Us</h2>
          <p className="section-subtitle" style={{ marginBottom: '30px' }}>
            We collaborate with corporations and government bodies to scale impact.
          </p>
          <a 
            href="mailto:support@joharfoundation.com" 
            style={{ 
              display: 'inline-block',
              padding: '12px 35px', 
              backgroundColor: theme.colors.secondary, 
              color: 'white', 
              borderRadius: '50px', 
              textDecoration: 'none',
              fontWeight: 'bold', 
              fontSize: '0.9rem'
            }}
          >
            DISCUSS PARTNERSHIP
          </a>
        </div>
      </div>

      {/* FAQ Section */}
      <div style={{ padding: '60px 5%', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Common Questions</h2>
        </div>
        {faqData.map((faq, index) => (
          <div key={index} style={{ marginBottom: '10px', borderBottom: '1px solid #eee' }}>
            <div 
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', cursor: 'pointer', alignItems: 'center' }}
            >
              <h4 style={{ margin: 0, color: theme.colors.secondary, fontSize: '1rem' }}>{faq.q}</h4>
              {activeFaq === index ? <FaChevronUp color={theme.colors.primary} /> : <FaChevronDown color={theme.colors.primary} />}
            </div>
            {activeFaq === index && (
              <div style={{ paddingBottom: '15px', color: '#666', lineHeight: '1.6', fontSize: '0.9rem' }}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        .section-title { font-size: 2rem; color: ${theme.colors.secondary}; margin-bottom: 10px; }
        .section-subtitle { font-size: 0.95rem; color: #666; max-width: 700px; margin: 0 auto; }
        .impact-grid { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin-top: 30px; }
        .card-h3 { font-size: 1.1rem; margin: 0; font-weight: bold; }
        .card-p { font-size: 0.85rem; line-height: 1.5; opacity: 0.9; }

        .role-display-card:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03) !important;
          border-color: #e5e5e5 !important;
        }

        @media (max-width: 1100px) {
          .volunteer-workspace-split { flex-direction: column !important; gap: 40px !important; }
          .volunteer-workspace-split > div { width: 100% !important; max-width: 100% !important; }
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