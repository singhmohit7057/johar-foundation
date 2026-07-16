import React from 'react';
import { SEO } from '../shared/seo';
import {
  FaFilePdf, FaShieldAlt, FaBalanceScale,
  FaDownload, FaRegFileAlt, FaUniversity
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
const WaveDivider: React.FC<{ topColor: string; bottomColor: string }> = ({ topColor, bottomColor }) => (
  <div style={{ lineHeight: 0, background: topColor }}>
    <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: 72 }}>
      <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,72 L0,72 Z" fill={bottomColor} />
    </svg>
  </div>
);

const complianceDocs = [
  { title: "80G Tax Exemption Certificate", subtitle: "In perpetuity validation for donor tax exemptions.", fileUrl: "/resources/80G_Certificate.pdf", size: "1.2 MB" },
  { title: "12A Registration Certificate", subtitle: "Primary non-profit institutional registration track.", fileUrl: "/resources/12A_Certificate.pdf", size: "1.1 MB" },
  { title: "Society Registration Certificate", subtitle: "Legal establishment under the Societies Registration Act.", fileUrl: "/resources/Society_Registration.pdf", size: "2.4 MB" },
  { title: "Permanent Account Number (PAN)", subtitle: "Official government tax identification document.", fileUrl: "/resources/Johar_Foundation_PAN.pdf", size: "450 KB" }
];

const financialDocs = [
  { year: "2025 - 2026", type: "Annual Work Report", desc: "Comprehensive framework delivery documentation across all 5 operational states.", fileUrl: "/resources/Annual_Report_2025_26.pdf" },
  { year: "2025 - 2026", type: "Audited Balance Sheet", desc: "Formal financial position statement verified by independent institutional auditors.", fileUrl: "/resources/Balance_Sheet_2025_26.pdf" },
  { year: "2024 - 2025", type: "Annual Work Report", desc: "Historical tracking of initial cluster setups and Self-Help Group (SHG) deployments.", fileUrl: "/resources/Annual_Report_2024_25.pdf" },
  { year: "2024 - 2025", type: "Audited Balance Sheet", desc: "Verified statement of allocation of resources and public donation tracking files.", fileUrl: "/resources/Balance_Sheet_2024_25.pdf" }
];

const Resources: React.FC = () => {
  return (
    <div style={{ backgroundColor: BG, overflowX: 'hidden' }}>
      <SEO title="Institutional Resources" description="Access official statutory registrations, tax exemption certificates, audited balance sheets, and annual work reports." />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
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
          animation: 'rs-blobMorph 12s ease-in-out infinite',
          filter: 'blur(52px)',
          zIndex: 0,
          borderRadius: '62% 38% 55% 45% / 48% 52% 48% 52%',
        }} />
        {/* Floating ornaments */}
        <div aria-hidden style={{
          position: 'absolute', bottom: 80, left: '8%',
          width: 64, height: 64,
          borderRadius: '50%', background: SAND, opacity: 0.7,
          animation: 'rs-floatY 5s ease-in-out infinite',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 120, right: '10%',
          width: 42, height: 42,
          borderRadius: '10% 50% 10% 50%', background: SAND, opacity: 0.6,
          animation: 'rs-floatY 7s ease-in-out infinite 1s',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="rs-fade-in rs-d1" style={{
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: EARTH,
            lineHeight: 1.25,
            margin: '8px 0 24px',
          }}>
            Resources & <span style={{ color: CRIMSON }}>Governance</span>
          </h1>
          <p className="rs-fade-in rs-d2" style={{
            fontSize: '1.15rem',
            color: EARTH_MUTED,
            maxWidth: 540,
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}>
            Every certificate, every audit — out in the open. Nothing to hide.
          </p>
          <div className="rs-fade-in rs-d3" style={{
            width: 1, height: 56,
            background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`,
            margin: '0 auto', borderRadius: 1,
          }} />
        </div>
      </section>

      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* ── Statutory Certifications ─────────────────────────────────────────── */}
      <div style={{ background: SECTION_ALT, padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: EARTH, margin: '0 0 12px' }}>
              Statutory <span style={{ color: CRIMSON }}>Certifications</span>
            </h2>
            <p style={{ color: EARTH_MUTED, fontSize: '0.95rem', maxWidth: '580px', margin: '0 auto', lineHeight: '1.6' }}>
              Official validation documents confirming our status as a registered, tax-exempt entity eligible for public support.
            </p>
          </div>

          <div className="rs-compliance-grid">
            {complianceDocs.map((doc, idx) => (
              <div key={idx} className="rs-resource-card" style={{
                backgroundColor: WHITE, border: '1px solid #e8e0d8', borderRadius: '16px',
                padding: '25px', display: 'flex', gap: '20px', alignItems: 'start',
                boxShadow: '0 4px 15px rgba(0,0,0,0.01)', boxSizing: 'border-box'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  backgroundColor: `${CRIMSON}10`, color: CRIMSON,
                  display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem', flexShrink: 0
                }}>
                  <FaShieldAlt />
                </div>
                <div style={{ flexGrow: 1, textAlign: 'left' }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', fontWeight: '700', color: EARTH }}>
                    {doc.title}
                  </h4>
                  <p style={{ margin: '0 0 16px 0', color: EARTH_MUTED, fontSize: '0.82rem', lineHeight: '1.5' }}>
                    {doc.subtitle}
                  </p>
                  <a href={doc.fileUrl} download style={{ textDecoration: 'none' }}>
                    <button className="rs-download-btn" style={{
                      backgroundColor: 'transparent', border: '1px solid #e8e0d8', borderRadius: '6px',
                      padding: '8px 14px', fontSize: '0.78rem', fontWeight: '700', color: EARTH_MUTED,
                      display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s'
                    }}>
                      <FaDownload style={{ fontSize: '0.7rem', color: CRIMSON }} /> Download PDF <span style={{ color: EARTH_MUTED, fontWeight: 'normal' }}>({doc.size})</span>
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveDivider topColor={SECTION_ALT} bottomColor={BG} />

      {/* ── Governance & Work Reports ────────────────────────────────────────── */}
      <div style={{ background: BG, padding: '80px 5%' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold', color: EARTH, margin: '0 0 12px' }}>
              Governance & <span style={{ color: CRIMSON }}>Work Reports</span>
            </h2>
            <p style={{ color: EARTH_MUTED, fontSize: '0.95rem', maxWidth: '580px', margin: '0 auto', lineHeight: '1.6' }}>
              Detailed operational breakthroughs matched against audited balanced accounts for each fiscal tracking term.
            </p>
          </div>

          <div className="rs-financial-grid">
            {financialDocs.map((report, idx) => (
              <div key={idx} className="rs-financial-row-card" style={{
                backgroundColor: WHITE, border: '1px solid #e8e0d8', borderRadius: '16px',
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
                    <span style={{ fontSize: '0.7rem', fontWeight: '800', color: CRIMSON, letterSpacing: '0.5px' }}>
                      FY {report.year}
                    </span>
                    <h4 style={{ margin: '2px 0 6px 0', fontSize: '1.15rem', fontWeight: '700', color: EARTH }}>
                      {report.type}
                    </h4>
                    <p style={{ margin: 0, color: EARTH_MUTED, fontSize: '0.85rem', maxWidth: '650px', lineHeight: '1.5' }}>
                      {report.desc}
                    </p>
                  </div>
                </div>
                <a href={report.fileUrl} download style={{ textDecoration: 'none' }}>
                  <button className="rs-download-btn-action" style={{
                    backgroundColor: EARTH, color: WHITE, border: 'none',
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

      <WaveDivider topColor={BG} bottomColor={SECTION_ALT} />

      {/* ── Trust Footer ─────────────────────────────────────────────────────── */}
      <div style={{ background: SECTION_ALT, padding: '80px 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{
            width: '64px', height: '64px', borderRadius: '50%', backgroundColor: `${CRIMSON}12`,
            color: CRIMSON, display: 'flex', justifyContent: 'center', alignItems: 'center',
            fontSize: '1.8rem', margin: '0 auto 20px auto'
          }}>
            <FaUniversity />
          </div>
          <h3 style={{ color: EARTH, fontWeight: '700', fontSize: '1.5rem', marginBottom: '12px' }}>
            Commitment to Financial Governance
          </h3>
          <p style={{ color: EARTH_MUTED, fontSize: '0.92rem', lineHeight: '1.6', margin: 0 }}>
            Johar Foundation operates under rigid regulatory monitoring structures. All contributions are processed transparently, channeled directly to ground resource clusters, and completely optimized to benefit targeted indigenous communities.
          </p>
        </div>
      </div>

      {/* ── CSS ──────────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes rs-blobMorph {
          0%,100% { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
          25%      { border-radius: 45% 55% 38% 62% / 55% 45% 60% 40%; }
          50%      { border-radius: 55% 45% 62% 38% / 42% 58% 45% 55%; }
          75%      { border-radius: 38% 62% 48% 52% / 60% 40% 52% 48%; }
        }
        @keyframes rs-floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes rs-fadeIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rs-fade-in { animation: rs-fadeIn 0.75s ease both; }
        .rs-d1 { animation-delay: 0.10s; }
        .rs-d2 { animation-delay: 0.22s; }
        .rs-d3 { animation-delay: 0.34s; }

        .rs-compliance-grid {
          display: grid;
          gap: 25px;
          grid-template-columns: repeat(2, 1fr);
          width: 100%;
        }
        .rs-financial-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }
        .rs-resource-card:hover {
          border-color: ${WARM_TAN} !important;
          box-shadow: 0 8px 25px rgba(0,0,0,0.03) !important;
        }
        .rs-download-btn:hover {
          background-color: ${BG} !important;
          border-color: ${WARM_TAN} !important;
          color: ${EARTH} !important;
        }
        .rs-financial-row-card:hover {
          transform: translateX(4px);
          border-color: ${WARM_TAN} !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.02) !important;
        }
        .rs-download-btn-action:hover {
          background-color: ${CRIMSON} !important;
          box-shadow: 0 4px 15px ${CRIMSON}35;
        }

        @media (max-width: 1024px) {
          .rs-financial-row-card { flex-direction: column; gap: 24px; align-items: flex-start !important; }
          .rs-financial-row-card > a { width: 100%; }
          .rs-download-btn-action { width: 100%; justify-content: center; }
        }
        @media (max-width: 768px) {
          .rs-compliance-grid { grid-template-columns: 1fr !important; gap: 20px; }
        }
        @media (max-width: 600px) {
          .rs-financial-row-card { padding: 20px !important; }
        }
      `}</style>
    </div>
  );
};

export default Resources;
