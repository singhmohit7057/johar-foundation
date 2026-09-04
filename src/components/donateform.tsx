import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaUser, FaEnvelope, FaIdCard, FaIndianRupeeSign, FaSpinner } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa'; // FIXED: Pulling from standard 'fa' pack to prevent bundle crash

export const DonateForm: React.FC = () => {
  const [amount, setAmount] = useState('5000');
  const [activePreset, setActivePreset] = useState<string | null>('5000');
  const [donorData, setDonorData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    panNumber: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const presetAmounts = ['500', '1000', '2500', '5000'];

  const handleDonorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'fullName' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'mobile') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      const formatted = digits.length > 5 ? `${digits.slice(0, 5)} ${digits.slice(5)}` : digits;
      setDonorData({ ...donorData, mobile: formatted });
      return;
    }
    if (name === 'panNumber') {
      const pan = value.toUpperCase().slice(0, 10);
      setDonorData({ ...donorData, panNumber: pan });
      return;
    }
    setDonorData({ ...donorData, [name]: value });
  };

  const handleDonateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      setStatus('error');
      setErrorMessage('Please specify a valid donation amount.');
      return;
    }
    if (donorData.mobile.replace(/\s/g, '').length !== 10) {
      setStatus('error');
      setErrorMessage('Mobile number must be exactly 10 digits.');
      return;
    }
    if (donorData.panNumber && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(donorData.panNumber)) {
      setStatus('error');
      setErrorMessage('Invalid PAN format. Expected: ABCDE1234F');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Bundling both selection inputs and text details cleanly for reporting dashboards
    const payload = {
      donation_amount: `₹${amount}`,
      preset_selected: activePreset?.toUpperCase(),
      ...donorData
    };

    const response = await submitToWeb3Forms('DONATE', payload);

    if (response.success) {
      setStatus('success');
      setAmount('5000');
      setActivePreset('5000');
      setDonorData({ fullName: '', mobile: '', email: '', panNumber: '' });
    } else {
      setStatus('error');
      setErrorMessage(response.message || 'Failed to submit form data.');
    }
  };

  const fieldGroupStyle: React.CSSProperties = {
    marginBottom: '12px',
    textAlign: 'left'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.72rem',
    fontWeight: '700',
    color: theme.colors.secondary,
    marginBottom: '6px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const inputContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    border: '1.5px solid #e9ecef',
    transition: 'all 0.2s ease',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px 14px 40px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '0.92rem',
    color: '#333',
    outline: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const amountBtnStyle = (selected: boolean): React.CSSProperties => ({
    flex: '1 1 0',
    padding: '12px 5px',
    borderRadius: '8px',
    border: `1.5px solid ${selected ? theme.colors.primary : '#e9ecef'}`,
    backgroundColor: selected ? theme.colors.primary : '#f5f5f5',
    color: selected ? 'white' : '#555',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '0.92rem',
    boxShadow: 'none',
  });

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '28px 32px',
      borderRadius: '10px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
      width: '100%',
      maxWidth: '550px',
      margin: '0 auto',
      boxSizing: 'border-box',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h3 style={{ color: theme.colors.secondary, fontSize: '1.4rem', fontWeight: '800', margin: '0 0 4px 0' }}>
          Make an Impact
        </h3>
        <p style={{ color: '#777', fontSize: '0.82rem', margin: 0 }}>Your contribution brings smiles to those in need.</p>
      </div>

      {status === 'success' ? (
        <div style={{ textAlign: 'center', padding: '30px 10px' }}>
          <FaCheckCircle style={{ color: '#1abc9c', fontSize: '3.5rem', marginBottom: '20px' }} />
          <h4 style={{ color: theme.colors.secondary, fontSize: '1.4rem', fontWeight: '700', margin: '0 0 10px 0' }}>
            Intent Logging Received!
          </h4>
          <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 25px 0' }}>
            Thank you for step-allocating your pledge tracking parameters. Our financial verification coordinators will email your tax benefit settlement vouchers shortly.
          </p>
          <button 
            type="button"
            onClick={() => setStatus('idle')}
            style={{ backgroundColor: theme.colors.secondary, color: 'white', border: 'none', padding: '12px 28px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer' }}
          >
            Reset Form View
          </button>
        </div>
      ) : (
        <form onSubmit={handleDonateSubmit}>
          {/* SECTION 1: AMOUNT */}
          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Select Donation Amount</label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              {presetAmounts.map((amt) => (
                <button 
                  type="button"
                  key={amt} 
                  disabled={status === 'submitting'}
                  style={amountBtnStyle(activePreset === amt)}
                  onClick={() => { setAmount(amt); setActivePreset(amt); }}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
            <button 
              type="button"
              disabled={status === 'submitting'}
              style={{
                width: '100%', padding: '8px', borderRadius: '8px',
                border: `2px dashed ${activePreset === 'custom' ? theme.colors.primary : '#ccc'}`,
                backgroundColor: activePreset === 'custom' ? `${theme.colors.primary}08` : 'transparent',
                color: activePreset === 'custom' ? theme.colors.primary : '#777',
                fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', marginBottom: '8px'
              }}
              onClick={() => { setActivePreset('custom'); setAmount(''); }}
            >
              {activePreset === 'custom' ? 'Custom Amount Selected' : '+ Enter Custom Amount'}
            </button>

            <div style={{ ...inputContainerStyle, border: `1px solid ${activePreset === 'custom' ? theme.colors.primary : '#e9ecef'}` }}>
              <FaIndianRupeeSign style={{ position: 'absolute', left: '18px', color: theme.colors.primary }} />
              <input
                type="number"
                required
                disabled={status === 'submitting'}
                value={amount}
                placeholder="0.00"
                className="donate-amount-input"
                style={{ ...inputStyle, fontWeight: '800', fontSize: '1.3rem', color: theme.colors.primary, MozAppearance: 'textfield' } as React.CSSProperties}
                onChange={(e) => { setAmount(e.target.value); setActivePreset('custom'); }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', right: '10px', gap: '2px' }}>
                {[1, -1].map((dir) => (
                  <button
                    key={dir}
                    type="button"
                    disabled={status === 'submitting'}
                    onClick={() => {
                      const cur = parseFloat(amount) || 0;
                      const step = cur >= 10000 ? 1000 : 100;
                      const next = Math.max(0, cur + dir * step);
                      setAmount(String(next));
                      setActivePreset('custom');
                    }}
                    style={{
                      width: '22px', height: '18px', border: '1px solid #e0d8d0',
                      borderRadius: '4px', background: '#f5f2ee',
                      color: theme.colors.primary, cursor: 'pointer',
                      fontSize: '0.65rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: 0, lineHeight: 1,
                    }}
                  >{dir === 1 ? '▲' : '▼'}</button>
                ))}
              </div>
            </div>
            <style>{`.donate-amount-input::-webkit-inner-spin-button,.donate-amount-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}`}</style>
          </div>

          {/* SECTION 2: DONOR DETAILS */}
          <div style={{ ...fieldGroupStyle, padding: '16px', backgroundColor: '#fafafa', borderRadius: '8px', border: '1.5px solid #e9ecef' }}>
            <label style={labelStyle}>Donor Information</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
              <div style={inputContainerStyle}>
                <FaUser style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
                <input type="text" name="fullName" required placeholder="Full Name *" disabled={status === 'submitting'} value={donorData.fullName} onChange={handleDonorChange} style={{ ...inputStyle, paddingLeft: '40px' }} />
              </div>
              <div style={{ ...inputContainerStyle, overflow: 'hidden' }}>
                <span style={{ paddingLeft: '12px', paddingRight: '6px', fontSize: '0.85rem', color: '#555', whiteSpace: 'nowrap', flexShrink: 0 }}>+91</span>
                <input type="tel" name="mobile" required placeholder="XXXXX XXXXX *" disabled={status === 'submitting'} value={donorData.mobile} onChange={handleDonorChange} maxLength={11} style={{ ...inputStyle, paddingLeft: '4px' }} />
              </div>
            </div>
            <div style={inputContainerStyle}>
              <FaEnvelope style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
              <input type="email" name="email" required placeholder="Email Address *" disabled={status === 'submitting'} value={donorData.email} onChange={handleDonorChange} style={{ ...inputStyle, paddingLeft: '40px' }} />
            </div>
          </div>

          {/* SECTION 3: TAX BENEFITS */}
          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Tax Benefit (Section 80G)</label>
            <div style={inputContainerStyle}>
              <FaIdCard style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
              <input type="text" name="panNumber" placeholder="PAN Card Number (optional)" disabled={status === 'submitting'} value={donorData.panNumber} onChange={handleDonorChange} style={{ ...inputStyle, paddingLeft: '40px' }} />
            </div>
            <p style={{ fontSize: '0.72rem', color: '#888', marginTop: '6px', lineHeight: '1.4' }}>
              * PAN is mandatory for donations to claim tax exemption features under registered acts.
            </p>
          </div>

          <button 
            type="submit"
            disabled={status === 'submitting'}
            style={{
              width: '100%', padding: '14px', backgroundColor: theme.colors.primary, color: 'white',
              border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '1rem',
              cursor: 'pointer', marginTop: '6px',
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#8B1E2F'; }}
            onMouseOut={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = theme.colors.primary; }}
          >
            {status === 'submitting' ? (
              <FaSpinner className="donate-spin" />
            ) : `Donate ${amount ? `₹${amount}` : ''} Now`}
          </button>

          {status === 'error' && (
            <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '15px', fontWeight: '500', textAlign: 'center' }}>
              {errorMessage}
            </p>
          )}
        </form>
      )}

      <style>{`
        .donate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};