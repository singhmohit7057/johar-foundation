import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaSpinner, FaRegCheckCircle } from 'react-icons/fa';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: 'Male',
    city: '',
    interest: 'Skill Training',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Squeezed margins slightly to match height of content columns
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    marginBottom: '14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '0.9rem',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    fontFamily: 'inherit'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '0.78rem',
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
      setFormData({ 
        name: '', email: '', phone: '', age: '', 
        gender: 'Male', city: '', interest: 'Skill Training', message: '' 
      });
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
          Thank you for your willingness to join our mission. Our team will review your details soon.
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
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'white', padding: '5px 0 0 0', borderRadius: '16px' }}>
      
      {/* Row 1: Balanced Side-by-Side Split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 15px' }}>
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

      {/* Row 2: Balanced Side-by-Side Split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 15px' }}>
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
          <label style={labelStyle}>City</label>
          <input 
            type="text" 
            placeholder="Jamshedpur" 
            style={inputStyle} 
            required 
            disabled={status === 'submitting'}
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>
      </div>

      {/* Row 3: Balanced Side-by-Side Split */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 15px' }}>
        <div>
          <label style={labelStyle}>Age</label>
          <input 
            type="number" 
            placeholder="24" 
            min="1"
            max="120"
            style={inputStyle} 
            required 
            disabled={status === 'submitting'}
            value={formData.age}
            onChange={(e) => setFormData({...formData, age: e.target.value})}
          />
        </div>
        <div>
          <label style={labelStyle}>Gender</label>
          <select 
            style={inputStyle} 
            disabled={status === 'submitting'}
            value={formData.gender}
            onChange={(e) => setFormData({...formData, gender: e.target.value})}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 4: Full Width Field */}
      <label style={labelStyle}>Area of Interest</label>
      <select 
        style={inputStyle} 
        disabled={status === 'submitting'}
        value={formData.interest}
        onChange={(e) => setFormData({...formData, interest: e.target.value})}
      >
        <option value="Skill Training">Skill Trainer</option>
        <option value="Women's Program">Women's Program Facilitator</option>
        <option value="Education Support">Education Volunteer</option>
        <option value="Health Camps">Health Camp Support</option>
        <option value="Media & Production">Media & Documentation</option>
        <option value="Digital Tech Modules">Digital & Tech Support</option>
        <option value="Community Outreach">Community Outreach</option>
        <option value="Institutional Support">Grant Writing & Research</option>
      </select>

      {/* Row 5: Motivation Field (Slightly shortened to compress workspace height) */}
      <label style={labelStyle}>Why do you want to join us?</label>
      <textarea 
        rows={3} 
        placeholder="Tell us a bit about your motivation..." 
        style={{ ...inputStyle, height: '85px', resize: 'none', marginBottom: '16px' }} 
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
          padding: '14px',
          backgroundColor: theme.colors.primary,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '0.95rem',
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
        <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '12px', fontWeight: '500', textAlign: 'center' }}>
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