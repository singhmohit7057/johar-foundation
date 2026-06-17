import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaIndianRupeeSign, FaSpinner } from 'react-icons/fa6';
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
    setDonorData({ ...donorData, [e.target.name]: e.target.value });
  };

  const handleDonateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      setStatus('error');
      setErrorMessage('Please specify a valid donation amount.');
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
    marginBottom: '24px',
    textAlign: 'left'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: theme.colors.secondary,
    marginBottom: '10px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const inputContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: '12px',
    border: '1px solid #e9ecef',
    transition: 'all 0.2s ease',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px 14px 45px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '1rem',
    color: '#333',
    outline: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
  };

  const amountBtnStyle = (selected: boolean): React.CSSProperties => ({
    flex: '1 1 0',
    padding: '14px 5px',
    borderRadius: '10px',
    border: `2px solid ${selected ? theme.colors.primary : '#eee'}`,
    backgroundColor: selected ? theme.colors.primary : 'white',
    color: selected ? 'white' : '#555',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: '0.95rem',
    boxShadow: selected ? `0 4px 12px ${theme.colors.primary}44` : 'none'
  });

  return (
    <div style={{ 
      backgroundColor: 'white', 
      padding: '40px', 
      borderRadius: '28px', 
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '550px',
      margin: '0 auto',
      boxSizing: 'border-box',
      border: '1px solid #f1f1f1'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h3 style={{ color: theme.colors.secondary, fontSize: '1.8rem', fontWeight: '800', margin: '0 0 10px 0' }}>
          Make an Impact
        </h3>
        <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>Your contribution brings smiles to those in need.</p>
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
            <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
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
                width: '100%', padding: '12px', borderRadius: '10px',
                border: `2px dashed ${activePreset === 'custom' ? theme.colors.primary : '#ccc'}`,
                backgroundColor: activePreset === 'custom' ? `${theme.colors.primary}08` : 'transparent',
                color: activePreset === 'custom' ? theme.colors.primary : '#777',
                fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer', marginBottom: '15px'
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
                style={{ ...inputStyle, fontWeight: '800', fontSize: '1.3rem', color: theme.colors.primary }}
                onChange={(e) => {
                  setAmount(e.target.value);
                  setActivePreset('custom');
                }}
              />
            </div>
          </div>

          {/* SECTION 2: DONOR DETAILS */}
          <div style={{ ...fieldGroupStyle, padding: '20px', backgroundColor: '#fcfcfc', borderRadius: '15px', border: '1px solid #f1f1f1' }}>
            <label style={labelStyle}>Donor Information</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                <div style={inputContainerStyle}>
                  <FaUser style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
                  <input type="text" name="fullName" required placeholder="Full Name" disabled={status === 'submitting'} value={donorData.fullName} onChange={handleDonorChange} style={{ ...inputStyle, paddingLeft: '40px' }} />
                </div>
                <div style={inputContainerStyle}>
                  <FaPhone style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
                  <input type="tel" name="mobile" required placeholder="Mobile" disabled={status === 'submitting'} value={donorData.mobile} onChange={handleDonorChange} style={{ ...inputStyle, paddingLeft: '40px' }} />
                </div>
            </div>
            <div style={inputContainerStyle}>
              <FaEnvelope style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
              <input type="email" name="email" required placeholder="Email Address" disabled={status === 'submitting'} value={donorData.email} onChange={handleDonorChange} style={{ ...inputStyle, paddingLeft: '40px' }} />
            </div>
          </div>

          {/* SECTION 3: TAX BENEFITS */}
          <div style={fieldGroupStyle}>
            <label style={labelStyle}>Tax Benefit (Section 80G)</label>
            <div style={inputContainerStyle}>
              <FaIdCard style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
              <input type="text" name="panNumber" required placeholder="PAN Card Number" disabled={status === 'submitting'} value={donorData.panNumber} onChange={handleDonorChange} style={{ ...inputStyle, paddingLeft: '40px' }} />
            </div>
            <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '10px', lineHeight: '1.4' }}>
              * PAN is mandatory for donations to claim tax exemption features under registered acts.
            </p>
          </div>

          <button 
            type="submit"
            disabled={status === 'submitting'}
            style={{
              width: '100%', padding: '20px', backgroundColor: theme.colors.primary, color: 'white',
              border: 'none', borderRadius: '15px', fontWeight: '800', fontSize: '1.1rem',
              cursor: 'pointer', marginTop: '10px', boxShadow: `0 12px 24px -6px ${theme.colors.primary}66`,
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px',
              transition: 'opacity 0.2s'
            }}
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