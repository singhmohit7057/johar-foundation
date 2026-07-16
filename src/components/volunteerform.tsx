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

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '9px 12px',
    marginBottom: '10px',
    borderRadius: '10px',
    border: '1px solid #e9ecef',
    fontSize: '0.88rem',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f8f9fa',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '4px',
    fontSize: '0.6rem',
    fontWeight: '700',
    color: '#3C3530',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const req = <span style={{ color: '#e74c3c', marginLeft: 2 }}>*</span>;

  const ageNum = parseInt(formData.age, 10);
  const ageTooYoung = formData.age !== '' && !isNaN(ageNum) && ageNum < 18;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'city' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      const formatted = digits.length > 5 ? `${digits.slice(0, 5)} ${digits.slice(5)}` : digits;
      setFormData({ ...formData, phone: formatted });
      return;
    }
    if (name === 'age') {
      if (value !== '' && !/^\d{0,3}$/.test(value)) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.replace(/\s/g, '').length !== 10) {
      setStatus('error');
      setErrorMessage('Phone number must be exactly 10 digits after +91.');
      return;
    }
    if (ageTooYoung || formData.age === '' || isNaN(ageNum)) {
      setStatus('error');
      setErrorMessage('You must be at least 18 years old to volunteer.');
      return;
    }
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
      <div style={{ textAlign: 'center', padding: '30px 10px' }}>
        <FaRegCheckCircle style={{ color: '#1abc9c', fontSize: '3rem', marginBottom: '15px' }} />
        <h3 style={{ color: theme.colors.secondary, fontWeight: '700', margin: '0 0 10px 0' }}>Application Received!</h3>
        <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
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
    <form onSubmit={handleSubmit} style={{ backgroundColor: 'transparent', padding: '0' }}>

      {/* Row 1 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
        <div>
          <label style={labelStyle}>Full Name {req}</label>
          <input type="text" name="name" placeholder="Mohit Singh"
            style={inputStyle} required disabled={status === 'submitting'}
            value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label style={labelStyle}>Email Address {req}</label>
          <input type="email" name="email" placeholder="mohitsingh@gmail.com"
            style={inputStyle} required disabled={status === 'submitting'}
            value={formData.email} onChange={handleChange} />
        </div>
      </div>

      {/* Row 2 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
        <div>
          <label style={labelStyle}>Phone Number {req}</label>
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e9ecef', borderRadius: '10px', marginBottom: '10px', overflow: 'hidden', backgroundColor: '#f8f9fa' }}>
            <span style={{ padding: '9px 8px 9px 12px', fontSize: '0.88rem', color: '#555', borderRight: '1px solid #e9ecef', whiteSpace: 'nowrap' }}>+91</span>
            <input type="tel" name="phone" placeholder="XXXXX XXXXX"
              style={{ ...inputStyle, marginBottom: 0, border: 'none', borderRadius: 0, flex: 1, backgroundColor: 'transparent' }}
              required disabled={status === 'submitting'}
              value={formData.phone} onChange={handleChange} maxLength={11} />
          </div>
        </div>
        <div>
          <label style={labelStyle}>City {req}</label>
          <input type="text" name="city" placeholder="Kolkata"
            style={inputStyle} required disabled={status === 'submitting'}
            value={formData.city} onChange={handleChange} />
        </div>
      </div>

      {/* Row 3 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 16px' }}>
        <div>
          <label style={labelStyle}>Age {req}</label>
          <input type="text" name="age" placeholder="24"
            style={{ ...inputStyle, borderColor: ageTooYoung ? '#e74c3c' : '#e9ecef', marginBottom: ageTooYoung ? '2px' : '10px' }}
            required disabled={status === 'submitting'}
            value={formData.age} onChange={handleChange} />
          {ageTooYoung && (
            <p style={{ color: '#e74c3c', fontSize: '0.72rem', margin: '0 0 8px 0', lineHeight: '1.3' }}>Min. age is 18 years.</p>
          )}
        </div>
        <div>
          <label style={labelStyle}>Gender {req}</label>
          <select name="gender" style={inputStyle} required disabled={status === 'submitting'}
            value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Row 4 */}
      <label style={labelStyle}>Area of Interest {req}</label>
      <select name="interest" style={inputStyle} required disabled={status === 'submitting'}
        value={formData.interest} onChange={handleChange}>
        <option value="Skill Training">Skill Trainer</option>
        <option value="Women's Program">Women's Program Facilitator</option>
        <option value="Education Support">Education Volunteer</option>
        <option value="Health Camps">Health Camp Support</option>
        <option value="Media & Production">Media & Documentation</option>
        <option value="Digital Tech Modules">Digital & Tech Support</option>
        <option value="Community Outreach">Community Outreach</option>
        <option value="Institutional Support">Grant Writing & Research</option>
      </select>

      {/* Row 5 */}
      <label style={labelStyle}>Why do you want to join us? {req}</label>
      <textarea name="message" rows={3}
        placeholder="Tell us a bit about your motivation..."
        style={{ ...inputStyle, height: '72px', resize: 'none', marginBottom: '14px' }}
        required disabled={status === 'submitting'}
        value={formData.message} onChange={handleChange} />

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          width: '100%', padding: '14px 24px',
          backgroundColor: theme.colors.primary, color: 'white',
          border: 'none', borderRadius: '0', fontWeight: '700',
          cursor: 'pointer', fontSize: '0.65rem',
          letterSpacing: '4px', textTransform: 'uppercase',
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px',
          transition: 'background-color 0.2s',
        }}
        onMouseOver={(e) => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#8B1E2F'; }}
        onMouseOut={(e) => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = theme.colors.primary; }}
      >
        {status === 'submitting' ? (
          <FaSpinner className="vol-spinner" />
        ) : (<>Submit Application <span style={{ fontSize: '1rem', fontWeight: 300, letterSpacing: 0 }}>→</span></>)}
      </button>

      {status === 'error' && (
        <p style={{ color: '#e74c3c', fontSize: '0.82rem', marginTop: '10px', fontWeight: '500', textAlign: 'center' }}>
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
