import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { DonateForm } from '../components/donateform';
import { 
  FaUniversity, FaShieldAlt, FaFileInvoiceDollar, FaQrcode,
  FaBook, FaPlusSquare, FaStar, FaStethoscope, FaGraduationCap
} from 'react-icons/fa';

const DonatePage: React.FC = () => {
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

  // FIXED: Removed the unused theoryTileStyle definition block to satisfy the build runner compiler parameters

  const impactItemStyle: React.CSSProperties = {
    flex: '1 1 150px',
    textAlign: 'center',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  };

  return (
    <div style={{ backgroundColor: theme.colors.background, overflowX: 'hidden' }}>
      <SEO title="Donate Now" description="Support Johar Foundation's mission. All donations are 80G tax exempt." />

      {/* Hero Header */}
      <div style={{ 
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #1a1a1a 100%)`,
        color: 'white', padding: '70px 5%', textAlign: 'center', borderBottom: `4px solid ${theme.colors.primary}`
      }}>
        <div style={{ ...badgeStyle, backgroundColor: `${theme.colors.primary}33`, color: '#ff9da9' }}>
          Support Our Work
        </div>
        <h1 className="responsive-h1" style={{ marginBottom: '15px', fontWeight: 'bold', fontSize: '2.8rem' }}>Your Support Matters</h1>
        <p style={{ fontSize: '1.1rem', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
          Your generous contribution provides under-served children with essential resources and a secure future.
        </p>
      </div>

      {/* Main Grid */}
      <div style={{ padding: '80px 5%', maxWidth: '1400px', margin: '0 auto' }}>
        <div className="donate-grid" style={{ display: 'flex', gap: '80px', alignItems: 'start', justifyContent: 'center' }}>
          {/* Left Column: Context */}
          <div style={{ flex: '1.2', maxWidth: '500px' }}>
            <h2 style={{ color: theme.colors.secondary, fontSize: '2.2rem', marginBottom: '35px', fontWeight: 'bold' }}>Why Donate to Us?</h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '35px' }}>
              <FaFileInvoiceDollar size={35} color={theme.colors.primary} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: theme.colors.secondary }}>80G Tax Benefit</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>All donations are 50% tax exempt under Section 80G of the Income Tax Act.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '45px' }}>
              <FaShieldAlt size={35} color={theme.colors.primary} />
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: theme.colors.secondary }}>100% Transparency</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#666', lineHeight: '1.6' }}>We provide full financial accountability and regular impact reports to our donors.</p>
              </div>
            </div>

            <div className="bank-box" style={{ backgroundColor: '#fff', padding: '35px', borderRadius: '20px', border: '1px dashed #ccc', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <FaUniversity size={20} color={theme.colors.secondary} />
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>Direct Bank Transfer</h3>
              </div>
              <div style={{ fontSize: '0.95rem', color: '#444', lineHeight: '2', marginBottom: '20px' }}>
                <strong>A/C Name:</strong> JOHAR FOUNDATION<br />
                <strong>A/C Number:</strong> [Account Number]<br />
                <strong>Bank Name:</strong> [Bank Name]<br />
                <strong>IFSC Code:</strong> [IFSC Code]<br />
                <strong>Branch:</strong> Bistupur, Jamshedpur
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <FaQrcode size={20} color={theme.colors.secondary} />
                <div style={{ fontSize: '0.95rem', color: '#444' }}><strong>UPI ID:</strong> joharfoundation@bank</div>
              </div>
              <div style={{ backgroundColor: `${theme.colors.primary}08`, padding: '12px', borderRadius: '8px', fontSize: '0.85rem', color: '#666', lineHeight: '1.4', borderLeft: `3px solid ${theme.colors.primary}` }}>
                Please send your transaction screenshot at <strong style={{color: theme.colors.primary}}>payment@joharfoundation.com</strong> for a formal donation receipt.
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div style={{ flex: '1.5', width: '100%', maxWidth: '600px' }}>
            <DonateForm />
          </div>
        </div>
      </div>

      {/* SECTION: HOW YOUR DONATIONS HELP */}
      <div style={{ backgroundColor: '#fff', padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: theme.colors.primary, fontSize: '2rem', marginBottom: '15px', fontWeight: 'bold' }}>HOW WILL YOUR DONATIONS FOR NGO HELP?</h2>
          <p style={{ color: '#666', marginBottom: '50px', fontSize: '1rem' }}>Your generous online donation will provide under-served children with essential resources. YOUR donations will:</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={impactItemStyle}>
              <FaBook size={45} color="#1abc9c" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500' }}>Send me back to school</p>
            </div>
            <div style={impactItemStyle}>
              <FaPlusSquare size={45} color="#e84393" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500' }}>Give me access to healthcare</p>
            </div>
            <div style={impactItemStyle}>
              <FaStar size={45} color="#f39c12" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500' }}>help me dream big</p>
            </div>
            <div style={impactItemStyle}>
              <FaStethoscope size={45} color="#9b59b6" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500' }}>Make me a doctor</p>
            </div>
            <div style={impactItemStyle}>
              <FaGraduationCap size={45} color="#f1c40f" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500' }}>Give me access to education</p>
            </div>
          </div>

          <div style={{ marginTop: '50px', maxWidth: '900px', margin: '60px auto 0', lineHeight: '1.8', color: '#555', fontSize: '0.95rem' }}>
            Through your contributions, we can reach more children and support their various needs. Together, let’s build a “Bharat” where every child has equal opportunities for growth and development in a safe and protective environment.
          </div>
        </div>
      </div>

      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        @media (max-width: 992px) {
          .donate-grid { flex-direction: column !important; gap: 40px !important; align-items: center !important; }
          .responsive-h1 { font-size: 2.2rem !important; }
          .bank-box { width: 100%; box-sizing: border-box; }
        }
        @media (max-width: 768px) {
          h2 { font-size: 1.6rem !important; }
        }
      `}</style>
    </div>
  );
};

export default DonatePage;