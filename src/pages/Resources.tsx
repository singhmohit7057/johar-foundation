import React from 'react';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { 
  FaFilePdf, FaShieldAlt, FaBalanceScale, 
  FaDownload, FaRegFileAlt, FaUniversity 
} from 'react-icons/fa';

// Statutory Documents Dataset
const complianceDocs = [
  { title: "80G Tax Exemption Certificate", subtitle: "In perpetuity validation for donor tax exemptions.", fileUrl: "/resources/80G_Certificate.pdf", size: "1.2 MB" },
  { title: "12A Registration Certificate", subtitle: "Primary non-profit institutional registration track.", fileUrl: "/resources/12A_Certificate.pdf", size: "1.1 MB" },
  { title: "Society Registration Certificate", subtitle: "Legal establishment under the Societies Registration Act.", fileUrl: "/resources/Society_Registration.pdf", size: "2.4 MB" },
  { title: "Permanent Account Number (PAN)", subtitle: "Official government tax identification document.", fileUrl: "/resources/Johar_Foundation_PAN.pdf", size: "450 KB" }
];

// Financial Governance & Work Reports Dataset
const financialDocs = [
  { year: "2025 - 2026", type: "Annual Work Report", desc: "Comprehensive framework delivery documentation across all 5 operational states.", fileUrl: "/resources/Annual_Report_2025_26.pdf" },
  { year: "2025 - 2026", type: "Audited Balance Sheet", desc: "Formal financial position statement verified by independent institutional auditors.", fileUrl: "/resources/Balance_Sheet_2025_26.pdf" },
  { year: "2024 - 2025", type: "Annual Work Report", desc: "Historical tracking of initial cluster setups and Self-Help Group (SHG) deployments.", fileUrl: "/resources/Annual_Report_2024_25.pdf" },
  { year: "2024 - 2025", type: "Audited Balance Sheet", desc: "Verified statement of allocation of resources and public donation tracking files.", fileUrl: "/resources/Balance_Sheet_2024_25.pdf" }
];

const Resources: React.FC = () => {
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
      <SEO title="Institutional Resources" description="Access official statutory registrations, tax exemption certificates, audited balance sheets, and annual work reports." />

      {/* Hero Header */}
      <div style={{ 
        background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, #1a1a1a 100%)`,
        color: theme.colors.white, 
        padding: '80px 5%',
        textAlign: 'center',
        borderBottom: `4px solid ${theme.colors.primary}`
      }}>
        <div style={{ ...badgeStyle, backgroundColor: `${theme.colors.primary}33`, color: '#ff9da9' }}>
          PUBLIC TRANSPARENCY
        </div>
        <h1 className="responsive-h1" style={{ marginBottom: '15px', fontWeight: 'bold' }}>Resources & Governance</h1>
        <p style={{ fontSize: '1rem', color: '#aaa', maxWidth: '650px', margin: '0 auto', lineHeight: '1.5' }}>
          We maintain open compliance architectures. Review our official certifications, legal registrations, and audited financial statements.
        </p>
      </div>

      {/* STATUTORY REGISTRATIONS SECTION */}
      <div style={{ padding: '80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div style={badgeStyle}>LEGAL MANDATES</div>
          <h2 className="responsive-title" style={{ color: theme.colors.secondary }}>
            Statutory Certifications
          </h2>
          <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '580px', margin: '10px auto 0 auto', lineHeight: '1.6' }}>
            Official validation documents confirming our status as a registered, tax-exempt entity eligible for public support.
          </p>
        </div>

        <div className="compliance-grid">
          {complianceDocs.map((doc, idx) => (
            <div key={idx} className="resource-card" style={{
              backgroundColor: 'white', border: '1px solid #eaeaea', borderRadius: '16px',
              padding: '25px', display: 'flex', gap: '20px', alignItems: 'start',
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)', boxSizing: 'border-box'
            }}>
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '12px', 
                backgroundColor: `${theme.colors.primary}10`, color: theme.colors.primary,
                display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem', flexShrink: 0
              }}>
                <FaShieldAlt />
              </div>
              
              <div style={{ flexGrow: 1, textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', fontWeight: '700', color: theme.colors.secondary }}>
                  {doc.title}
                </h4>
                <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: '0.82rem', lineHeight: '1.5' }}>
                  {doc.subtitle}
                </p>
                <a href={doc.fileUrl} download style={{ textDecoration: 'none' }}>
                  <button className="download-btn" style={{
                    backgroundColor: 'transparent', border: '1px solid #dcdcdc', borderRadius: '6px',
                    padding: '8px 14px', fontSize: '0.78rem', fontWeight: '700', color: '#444',
                    display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s'
                  }}>
                    <FaDownload style={{ fontSize: '0.7rem', color: theme.colors.primary }} /> Download PDF <span style={{ color: '#999', fontWeight: 'normal' }}>({doc.size})</span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FINANCIAL AUDITS & WORK REPORTS GRID */}
      <div style={{ backgroundColor: '#fafafa', padding: '80px 5%', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <div style={badgeStyle}>ANNUAL STATUS</div>
            <h2 className="responsive-title" style={{ color: theme.colors.secondary }}>
              Governance & Work Reports
            </h2>
            <p style={{ color: '#666', fontSize: '0.95rem', maxWidth: '580px', margin: '10px auto 0 auto', lineHeight: '1.6' }}>
              Detailed operational breakthroughs matched against audited balanced accounts for each fiscal tracking term.
            </p>
          </div>

          <div className="financial-grid">
            {financialDocs.map((report, idx) => (
              <div key={idx} className="financial-row-card" style={{
                backgroundColor: 'white', border: '1px solid #ececec', borderRadius: '16px',
                padding: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.01)', boxSizing: 'border-box', transition: 'all 0.25s'
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', textAlign: 'left' }}>
                  <div style={{
                    fontSize: '1.4rem', color: idx % 2 === 0 ? '#1abc9c' : '#f39c12',
                    backgroundColor: idx % 2 === 0 ? '#1abc9c12' : '#f39c1212',
                    width: '52px', height: '52px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0
                  }}>
                    {idx % 2 === 0 ? <FaRegFileAlt /> : <FaBalanceScale />}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: '800', color: theme.colors.primary, letterSpacing: '0.5px' }}>
                      FY {report.year}
                    </span>
                    <h4 style={{ margin: '2px 0 6px 0', fontSize: '1.15rem', fontWeight: '700', color: theme.colors.secondary }}>
                      {report.type}
                    </h4>
                    <p style={{ margin: 0, color: '#666', fontSize: '0.85rem', maxWidth: '650px', lineHeight: '1.5' }}>
                      {report.desc}
                    </p>
                  </div>
                </div>

                <a href={report.fileUrl} download style={{ textDecoration: 'none' }}>
                  <button className="download-btn-action" style={{
                    backgroundColor: theme.colors.secondary, color: 'white', border: 'none',
                    padding: '12px 24px', borderRadius: '8px', fontSize: '0.82rem', fontWeight: 'bold',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s'
                  }}>
                    <FaFilePdf /> Download Report
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INSTITUTIONAL INTEGRITY TRUST FOOTER BANNER */}
      <div style={{ padding: '80px 5%', textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '50%', backgroundColor: `${theme.colors.primary}12`,
          color: theme.colors.primary, display: 'flex', justifyContent: 'center', alignItems: 'center',
          fontSize: '1.8rem', margin: '0 auto 20px auto'
        }}>
          <FaUniversity />
        </div>
        <h3 style={{ color: theme.colors.secondary, fontWeight: '700', fontSize: '1.5rem', marginBottom: '12px' }}>
          Commitment to Financial Governance
        </h3>
        <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
          Johar Foundation operates under rigid regulatory monitoring structures. All contributions are processed transparently, channeled directly to ground resource clusters, and completely optimized to benefit targeted indigenous communities.
        </p>
      </div>

      {/* Responsive Styles Injection */}
      <style>{`
        .responsive-h1 { font-size: 2.8rem; }
        .responsive-title { font-size: 2.2rem; font-weight: bold; margin: 0; }

        .compliance-grid {
          display: grid;
          gap: 25px;
          grid-template-columns: repeat(2, 1fr);
          width: 100%;
        }

        .financial-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .resource-card:hover {
          border-color: #d0d0d0 !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.03) !important;
        }

        .download-btn:hover {
          background-color: #f7f7f7 !important;
          border-color: #b5b5b5 !important;
          color: #000 !important;
        }

        .financial-row-card:hover {
          transform: translateX(4px);
          border-color: ${theme.colors.primary}35 !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.02) !important;
        }

        .download-btn-action:hover {
          background-color: ${theme.colors.primary} !important;
          box-shadow: 0 4px 15px ${theme.colors.primary}35;
        }

        @media (max-width: 1024px) {
          .compliance-grid { grid-template-columns: 1fr; gap: 20px; }
          .financial-row-card { flex-direction: column; gap: 24px; align-items: flex-start !important; }
          .financial-row-card > a { width: 100%; }
          .download-btn-action { width: 100%; justify-content: center; }
        }

        @media (max-width: 992px) {
          .responsive-h1 { font-size: 2.2rem; }
          .responsive-title { font-size: 1.8rem; }
        }

        @media (max-width: 600px) {
          .responsive-h1 { font-size: 2rem; }
          .responsive-title { font-size: 1.6rem; }
          .financial-row-card { padding: 20px !important; }
        }
      `}</style>
    </div>
  );
};

export default Resources;