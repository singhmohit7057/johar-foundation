import React from 'react';
import { SEO } from '../shared/seo';
import { DonateForm } from '../components/donateform';
import {
  FaUniversity, FaShieldAlt, FaFileInvoiceDollar, FaQrcode,
  FaBook, FaPlusSquare, FaStar, FaStethoscope, FaGraduationCap
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

const DonatePage: React.FC = () => {
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
    <div style={{ overflowX: 'hidden' }}>
      <SEO title="Donate Now" description="Support Johar Foundation's mission. All donations are 80G tax exempt." />

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
          animation: 'dn-blobMorph 12s ease-in-out infinite',
          filter: 'blur(52px)',
          zIndex: 0,
          borderRadius: '62% 38% 55% 45% / 48% 52% 48% 52%',
        }} />
        {/* Floating ornaments */}
        <div aria-hidden style={{
          position: 'absolute', bottom: 80, left: '8%',
          width: 64, height: 64,
          borderRadius: '50%', background: SAND, opacity: 0.7,
          animation: 'dn-floatY 5s ease-in-out infinite',
        }} />
        <div aria-hidden style={{
          position: 'absolute', top: 120, right: '10%',
          width: 42, height: 42,
          borderRadius: '10% 50% 10% 50%', background: SAND, opacity: 0.6,
          animation: 'dn-floatY 7s ease-in-out infinite 1s',
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="dn-fade-in dn-d1" style={{
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontWeight: 600,
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            color: EARTH,
            lineHeight: 1.25,
            margin: '8px 0 24px',
          }}>
            Your <span style={{ color: CRIMSON }}>Support</span> Matters
          </h1>
          <p className="dn-fade-in dn-d2" style={{
            fontSize: '1.15rem',
            color: EARTH_MUTED,
            maxWidth: 540,
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}>
            Every rupee you give reaches someone who needs it. We work across health, education, livelihoods, and child welfare. Your support keeps that work going.
          </p>
          <p className="dn-fade-in dn-d2" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', lineHeight: 1.6,
            maxWidth: 580, margin: '0 auto 40px',
            fontFamily: "'Lora', serif", fontStyle: 'italic', fontWeight: 400,
            color: EARTH_MUTED,
          }}>
            दातव्यमिति यद्दानम्<br />
            <span style={{ fontSize: '0.92rem', letterSpacing: '0.03em', color: CRIMSON, fontWeight: 400 }}>"Give because it must be given."</span>
          </p>
          <div className="dn-fade-in dn-d3" style={{
            width: 1, height: 56,
            background: `linear-gradient(to bottom, ${WARM_TAN}, transparent)`,
            margin: '0 auto', borderRadius: 1,
          }} />
        </div>
      </section>

      {/* ── Full-width photo banner ───────────────────────────────────────────── */}
      <div style={{ position: 'relative', lineHeight: 0 }}>
        <img
          src="/youth.jpg"
          alt="Young lives we serve — Johar Foundation"
          style={{ width: '100%', height: 400, objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(60,53,48,0.72) 0%, rgba(60,53,48,0.20) 100%)',
          display: 'flex', alignItems: 'center', padding: '0 6%',
        }}>
          <div>
            <p style={{
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              color: WHITE,
              maxWidth: 560,
              lineHeight: 1.65,
              margin: '0 0 12px',
            }}>
              "Every rupee you give stays in the field. No marble lobbies, no retreats — just work."
            </p>
            <div style={{ width: 52, height: 3, background: CRIMSON, borderRadius: 2 }} />
          </div>
        </div>
      </div>
      <div style={{ marginTop: -72, position: 'relative', zIndex: 2 }}>
        <WaveDivider topColor="transparent" bottomColor={SECTION_ALT} />
      </div>

      {/* ── Main Grid ────────────────────────────────────────────────────────── */}
      <section style={{ background: SECTION_ALT, padding: '40px 5%' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="donate-grid" style={{ display: 'flex', gap: 'clamp(32px,5vw,80px)', alignItems: 'stretch', justifyContent: 'center' }}>

            {/* Left Column */}
            <div style={{ flex: '1.2', maxWidth: '500px', display: 'flex', flexDirection: 'column' }}>
              <h2 style={{ color: EARTH, fontSize: '1.8rem', marginBottom: '16px', fontWeight: 'bold' }}>Why Donate to Us?</h2>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
                <FaFileInvoiceDollar size={28} color={CRIMSON} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', color: EARTH }}>80G Tax Benefit</h4>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: EARTH_MUTED, lineHeight: '1.5' }}>All donations are 50% tax exempt under Section 80G of the Income Tax Act.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '18px' }}>
                <FaShieldAlt size={28} color={CRIMSON} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', color: EARTH }}>100% Transparency</h4>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: EARTH_MUTED, lineHeight: '1.5' }}>We provide full financial accountability and regular impact reports to our donors.</p>
                </div>
              </div>

              <div className="bank-box" style={{ backgroundColor: WHITE, padding: '20px', borderRadius: '16px', border: '1px dashed #c4b8ac', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <FaUniversity size={18} color={EARTH} />
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold', color: EARTH }}>Direct Bank Transfer</h3>
                </div>
                <div style={{ fontSize: '0.88rem', color: EARTH_MUTED, lineHeight: '1.8', marginBottom: '12px' }}>
                  <strong>A/C Name:</strong> JOHAR FOUNDATION<br />
                  <strong>A/C Number:</strong> [Account Number]<br />
                  <strong>Bank Name:</strong> [Bank Name]<br />
                  <strong>IFSC Code:</strong> [IFSC Code]<br />
                  <strong>Branch:</strong> Bistupur, Jamshedpur
                </div>
                <div style={{ borderTop: `1px solid #e8e0d8`, paddingTop: '12px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <FaQrcode size={18} color={EARTH} />
                  <div style={{ fontSize: '0.88rem', color: EARTH_MUTED }}><strong>UPI ID:</strong> joharfoundation@bank</div>
                </div>
                <div style={{ backgroundColor: `${CRIMSON}08`, padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: EARTH_MUTED, lineHeight: '1.4', borderLeft: `3px solid ${CRIMSON}` }}>
                  Please send your transaction screenshot at <strong style={{ color: CRIMSON }}>payment@joharfoundation.com</strong> for a formal donation receipt.
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div style={{ flex: '1.5', width: '100%', maxWidth: '600px' }}>
              <DonateForm />
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor={SECTION_ALT} bottomColor={BG} />

      {/* ── How your donations help ───────────────────────────────────────────── */}
      <section style={{ background: BG, padding: '80px 5%' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: CRIMSON, fontSize: '2rem', marginBottom: '15px', fontWeight: 'bold' }}>HOW WILL YOUR DONATIONS FOR NGO HELP?</h2>
          <p style={{ color: EARTH_MUTED, marginBottom: '50px', fontSize: '1rem' }}>Your generous online donation will provide under-served children with essential resources. YOUR donations will:</p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={impactItemStyle}>
              <FaBook size={45} color="#1abc9c" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500', color: EARTH }}>Send me back to school</p>
            </div>
            <div style={impactItemStyle}>
              <FaPlusSquare size={45} color="#e84393" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500', color: EARTH }}>Give me access to healthcare</p>
            </div>
            <div style={impactItemStyle}>
              <FaStar size={45} color="#f39c12" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500', color: EARTH }}>Help me dream big</p>
            </div>
            <div style={impactItemStyle}>
              <FaStethoscope size={45} color="#9b59b6" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500', color: EARTH }}>Make me a doctor</p>
            </div>
            <div style={impactItemStyle}>
              <FaGraduationCap size={45} color="#f1c40f" />
              <p style={{ fontSize: '0.85rem', fontWeight: '500', color: EARTH }}>Give me access to education</p>
            </div>
          </div>

          <div style={{ marginTop: '60px', maxWidth: '900px', margin: '60px auto 0', lineHeight: '1.8', color: EARTH_MUTED, fontSize: '0.95rem' }}>
            Through your contributions, we can reach more children and support their various needs. Together, let's build a "Bharat" where every child has equal opportunities for growth and development in a safe and protective environment.
          </div>
        </div>
      </section>

      {/* ── CSS ──────────────────────────────────────────────────────────────── */}
      <style>{`
        @keyframes dn-blobMorph {
          0%,100% { border-radius: 62% 38% 55% 45% / 48% 52% 48% 52%; }
          25%      { border-radius: 45% 55% 38% 62% / 55% 45% 60% 40%; }
          50%      { border-radius: 55% 45% 62% 38% / 42% 58% 45% 55%; }
          75%      { border-radius: 38% 62% 48% 52% / 60% 40% 52% 48%; }
        }
        @keyframes dn-floatY {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes dn-fadeIn {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dn-fade-in { animation: dn-fadeIn 0.75s ease both; }
        .dn-d1 { animation-delay: 0.10s; }
        .dn-d2 { animation-delay: 0.22s; }
        .dn-d3 { animation-delay: 0.34s; }

        .responsive-h1 { font-size: 2.8rem; }
        @media (max-width: 992px) {
          .donate-grid { flex-direction: column !important; gap: 40px !important; align-items: center !important; }
          .donate-grid > div { max-width: 100% !important; width: 100% !important; }
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
