import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaSpinner, FaRegCheckCircle } from 'react-icons/fa';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Community Work',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    fontSize: '0.85rem',
    fontWeight: 'bold',
    color: theme.colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const response = await submitToWeb3Forms('VOLUNTEER', formData);

    if (response.success) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', interest: 'Community Work', message: '' });
    } else {
      setStatus('error');
      setErrorMessage(response.message || 'Submission request rejected by proxy.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ backgroundColor: 'white', padding: '40px 30px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', border: '1px solid #eee' }}>
        <FaRegCheckCircle style={{ color: '#1abc9c', fontSize: '3rem', marginBottom: '15px' }} />
        <h3 style={{ color: theme.colors.secondary, fontWeight: '700', margin: '0 0 10px 0' }}>Application Received!</h3>
        <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
          Thank you for your willingness to join our mission. Our regional outreach operational monitors will review your application parameters and touch base soon.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          style={{ backgroundColor: theme.colors.secondary, color: 'white', border: 'none', padding: '10px 24px', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.82rem' }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '30px', borderRadius: '16px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            style={inputStyle} 
            required 
            disabled={status === 'submitting'}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label style={labelStyle}>Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            style={inputStyle} 
            required 
            disabled={status === 'submitting'}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input 
            type="tel" 
            placeholder="+91 XXXXX XXXXX" 
            style={inputStyle} 
            required 
            disabled={status === 'submitting'}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label style={labelStyle}>Area of Interest</label>
          <select 
            style={inputStyle} 
            disabled={status === 'submitting'}
            value={formData.interest}
            onChange={(e) => setFormData({...formData, interest: e.target.value})}
          >
            <option>Community Work</option>
            <option>Education & Teaching</option>
            <option>Healthcare Support</option>
            <option>Digital Advocacy</option>
          </select>
        </div>
      </div>

      <label style={labelStyle}>Why do you want to join us?</label>
      <textarea 
        rows={4} 
        placeholder="Tell us a bit about your motivation..." 
        style={{ ...inputStyle, resize: 'none' }} 
        required
        disabled={status === 'submitting'}
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
      />

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: theme.colors.primary,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          transition: 'opacity 0.2s'
        }}
        onMouseOver={(e) => { if (status !== 'submitting') e.currentTarget.style.opacity = '0.9'; }}
        onMouseOut={(e) => { if (status !== 'submitting') e.currentTarget.style.opacity = '1'; }}
      >
        {status === 'submitting' ? (
          <FaSpinner className="vol-spinner" />
        ) : 'SUBMIT APPLICATION'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '15px', fontWeight: '500', textAlign: 'center' }}>
          {errorMessage}
        </p>
      )}

      <style>{`
        .vol-spinner { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
};