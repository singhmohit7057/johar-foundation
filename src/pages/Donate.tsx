import React, { useState } from 'react';
import { SEO } from '../shared/seo';
import { DonateForm } from '../components/donateform';
import {
  FaUniversity, FaShieldAlt, FaFileInvoiceDollar, FaCopy, FaCheck,
  FaStethoscope, FaGraduationCap, FaBriefcase, FaVenus, FaChild, FaRunning
} from 'react-icons/fa';

const CRIMSON     = '#A62639';

const copyToClipboard = (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback for older browsers / iOS Safari
  const el = document.createElement('textarea');
  el.value = text;
  el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
  document.body.appendChild(el);
  el.focus(); el.select();
  try { document.execCommand('copy'); } catch {}
  document.body.removeChild(el);
  return Promise.resolve();
};

const BankCard: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = (key: string, value: string) => {
    copyToClipboard(value).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const rows = [
    { key: 'name',   label: 'A/C Name',   value: 'JOHAR WELFARE FOUNDATION' },
    { key: 'acc',    label: 'A/C Number', value: '20100079938168' },
    { key: 'bank',   label: 'Bank Name',  value: 'BANDHAN BANK' },
    { key: 'ifsc',   label: 'IFSC Code',  value: 'BDBL0002495' },
    { key: 'branch', label: 'Branch',     value: 'ADITYAPUR' },
  ];

  return (
    <div className="bank-box" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '16px', border: '1px dashed #c4b8ac', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
        <FaUniversity size={18} color="#3C3530" />
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 'bold', color: '#3C3530' }}>Direct Bank Transfer</h3>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: '16px' }}>
        {rows.map(({ key, label, value }) => (
          <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '8px 10px', borderRadius: 8, backgroundColor: '#f9f7f2' }}>
            <div style={{ fontSize: '0.85rem', color: '#5a514a' }}>
              <strong style={{ color: '#3C3530' }}>{label}:</strong> {value}
            </div>
            <button
              onClick={() => copy(key, value)}
              title={`Copy ${label}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 6px', borderRadius: 6, color: copied === key ? '#1abc9c' : CRIMSON, transition: 'color 0.2s', flexShrink: 0 }}
            >
              {copied === key ? <FaCheck size={13} /> : <FaCopy size={13} />}
            </button>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: `${CRIMSON}08`, padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#5a514a', lineHeight: '1.4', borderLeft: `3px solid ${CRIMSON}` }}>
        Please send your transaction screenshot at <strong style={{ color: CRIMSON }}>joharenafoundation@gmail.com</strong> for a formal donation receipt.
      </div>
    </div>
  );
};
const EARTH       = '#3C3530';
const BG          = '#F9F7F2';
const SAND        = '#E8DCC8';
const WARM_TAN    = '#C4A882';
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

              <BankCard />
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
          <h2 style={{ color: CRIMSON, fontSize: '2rem', marginBottom: '14px', fontWeight: 800 }}>Where Your Donation Goes</h2>
          <p style={{ color: EARTH_MUTED, marginBottom: '52px', fontSize: '1rem', maxWidth: 640, margin: '0 auto 52px' }}>
            Every rupee you give goes directly into one of these six impact areas in India and beyond.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '28px' }}>
            {[
              { Icon: FaGraduationCap, label: 'Education',           detail: 'Quality learning for underserved children' },
              { Icon: FaBriefcase,     label: 'Skill Development',   detail: 'Vocational training for sustainable livelihoods' },
              { Icon: FaVenus,         label: "Women's Empowerment", detail: 'SHGs, legal literacy, financial independence' },
              { Icon: FaChild,         label: 'Child Welfare',       detail: 'Nutrition, safety, and rights for every child' },
              { Icon: FaRunning,       label: 'Youth',               detail: 'Sports, mentorship, and opportunity' },
              { Icon: FaStethoscope,   label: 'Health & Family',     detail: 'Health camps, maternal care, nutrition' },
            ].map(({ Icon, label, detail }) => (
              <div key={label} style={{ ...impactItemStyle, width: 150 }}>
                <div style={{
                  width: 70, height: 70, borderRadius: '50%',
                  background: `${CRIMSON}10`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', marginBottom: 12,
                }}>
                  <Icon size={32} color={CRIMSON} />
                </div>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: EARTH, margin: '0 0 5px' }}>{label}</p>
                <p style={{ fontSize: '0.75rem', color: EARTH_MUTED, lineHeight: 1.5, margin: 0 }}>{detail}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '52px', maxWidth: '800px', margin: '52px auto 0', lineHeight: '1.8', color: EARTH_MUTED, fontSize: '0.95rem' }}>
            Your support directly funds grassroots programmes across India — from self-help groups and vocational training to health camps and school re-enrollment. Together, we build communities that don't just survive, but lead.
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
