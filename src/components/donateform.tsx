import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaIndianRupeeSign } from 'react-icons/fa6';

export const DonateForm: React.FC = () => {
  const [amount, setAmount] = useState('5000');
  const [activePreset, setActivePreset] = useState<string | null>('5000');

  const presetAmounts = ['500', '1000', '2500', '5000'];

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
        <h3 style={{ 
          color: theme.colors.secondary, 
          fontSize: '1.8rem',
          fontWeight: '800',
          margin: '0 0 10px 0'
        }}>Make an Impact</h3>
        <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>Your contribution brings smiles to those in need.</p>
      </div>
      
      {/* SECTION 1: AMOUNT */}
      <div style={fieldGroupStyle}>
        <label style={labelStyle}>Select Donation Amount</label>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '12px' }}>
          {presetAmounts.map((amt) => (
            <button 
              key={amt} 
              style={amountBtnStyle(activePreset === amt)}
              onClick={() => { setAmount(amt); setActivePreset(amt); }}
            >
              ₹{amt}
            </button>
          ))}
        </div>
        <button 
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: `2px dashed ${activePreset === 'custom' ? theme.colors.primary : '#ccc'}`,
            backgroundColor: activePreset === 'custom' ? `${theme.colors.primary}08` : 'transparent',
            color: activePreset === 'custom' ? theme.colors.primary : '#777',
            fontWeight: '600',
            fontSize: '0.9rem',
            cursor: 'pointer',
            marginBottom: '15px'
          }}
          onClick={() => { setActivePreset('custom'); setAmount(''); }}
        >
          {activePreset === 'custom' ? 'Custom Amount Selected' : '+ Enter Custom Amount'}
        </button>

        <div style={{ ...inputContainerStyle, border: `1px solid ${activePreset === 'custom' ? theme.colors.primary : '#e9ecef'}` }}>
          <FaIndianRupeeSign style={{ position: 'absolute', left: '18px', color: theme.colors.primary }} />
          <input 
            type="number" 
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
              <input type="text" placeholder="Full Name" style={{ ...inputStyle, paddingLeft: '40px' }} />
            </div>
            <div style={inputContainerStyle}>
              <FaPhone style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
              <input type="tel" placeholder="Mobile" style={{ ...inputStyle, paddingLeft: '40px' }} />
            </div>
        </div>
        <div style={inputContainerStyle}>
          <FaEnvelope style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
          <input type="email" placeholder="Email Address" style={{ ...inputStyle, paddingLeft: '40px' }} />
        </div>
      </div>

      {/* SECTION 3: TAX BENEFITS */}
      <div style={fieldGroupStyle}>
        <label style={labelStyle}>Tax Benefit (Section 80G)</label>
        <div style={inputContainerStyle}>
          <FaIdCard style={{ position: 'absolute', left: '18px', color: '#adb5bd', fontSize: '0.9rem' }} />
          <input type="text" placeholder="PAN Card Number" style={{ ...inputStyle, paddingLeft: '40px' }} />
        </div>
        <p style={{ fontSize: '0.75rem', color: '#888', marginTop: '10px', lineHeight: '1.4' }}>
          * PAN is mandatory for donations above <b>₹10,000</b> to claim tax exemption.
        </p>
      </div>

      <button style={{
        width: '100%',
        padding: '20px',
        backgroundColor: theme.colors.primary,
        color: 'white',
        border: 'none',
        borderRadius: '15px',
        fontWeight: '800',
        fontSize: '1.1rem',
        cursor: 'pointer',
        marginTop: '10px',
        boxShadow: `0 12px 24px -6px ${theme.colors.primary}66`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
      }}>
        Donate {amount ? `₹${amount}` : ''} Now
      </button>

     
    </div>
  );
};