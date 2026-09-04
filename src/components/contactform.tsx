import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaSpinner } from 'react-icons/fa';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'countryCode') {
      const cleaned = value.startsWith('+') ? '+' + value.slice(1).replace(/\D/g, '').slice(0, 4) : '+' + value.replace(/\D/g, '').slice(0, 4);
      setFormData({ ...formData, countryCode: cleaned });
      return;
    }
    if (name === 'phone') {
      const maxDigits = formData.countryCode === '+91' ? 10 : 13;
      const digits = value.replace(/\D/g, '').slice(0, maxDigits);
      setFormData({ ...formData, phone: digits });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@example.com).');
      return;
    }
    if (formData.phone.length < 7 || formData.phone.length > 13) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number (7-13 digits).');
      return;
    }
    setStatus('submitting');
    setErrorMessage('');

    // FIX: Extract raw subject field to prevent Web3Forms auto-override logic
    const { subject, countryCode, phone, ...otherFields } = formData;

    const submissionPayload = {
      ...otherFields,
      phone: `${countryCode} ${phone}`,
      "Message Subject": subject,
      subject: "New Submission: Contact Form"
    };

    const response = await submitToWeb3Forms('CONTACT', submissionPayload);

    if (response.success) {
      setStatus('success');
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', subject: '', message: '' });
    } else {
      setStatus('error');
      setErrorMessage(response.message || 'Failed to submit form data.');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '8px',
    border: '1.5px solid #e9ecef',
    fontSize: '0.92rem',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    outline: 'none',
    backgroundColor: '#f5f5f5',
    color: '#333',
    transition: 'border-color 0.2s',
  };


  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✉️</div>
        <h3 style={{ color: theme.colors.secondary }}>Thank You!</h3>
        <p style={{ color: theme.colors.text }}>Your message has been sent successfully.</p>
        <button 
          onClick={() => setStatus('idle')}
          style={{ 
            marginTop: '20px', 
            backgroundColor: theme.colors.primary, 
            color: 'white', 
            border: 'none', 
            padding: '10px 25px', 
            borderRadius: '4px',
            cursor: 'pointer' 
          }}
        >
          Send Another
        </button>
      </div>
    );
  }


  const row2: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 };

  return (
    <form onSubmit={handleSubmit}>
      {/* Row 1 — Name + Email */}
      <div style={row2}>
        <input type="text" name="name" placeholder="Your Name" required disabled={status === 'submitting'} value={formData.name} onChange={handleChange} style={inputStyle} />
        <input type="email" name="email" placeholder="Email Address" disabled={status === 'submitting'} value={formData.email} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Row 2 — Phone + Subject */}
      <div style={row2}>
        <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #e9ecef', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
          <input type="text" name="countryCode" value={formData.countryCode} onChange={handleChange} disabled={status === 'submitting'} style={{ width: 52, padding: '14px 6px', fontSize: '0.92rem', color: '#555', backgroundColor: '#eee', borderRight: '1.5px solid #e9ecef', border: 'none', outline: 'none', textAlign: 'center', fontFamily: 'inherit' }} />
          <input type="tel" name="phone" placeholder="Phone" required disabled={status === 'submitting'} value={formData.phone} onChange={handleChange} style={{ ...inputStyle, border: 'none', borderRadius: 0, flex: 1 }} maxLength={formData.countryCode === '+91' ? 10 : 13} />
        </div>
        <input type="text" name="subject" placeholder="Subject" required disabled={status === 'submitting'} value={formData.subject} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Message */}
      <textarea name="message" placeholder="Write Message" rows={5} required disabled={status === 'submitting'} value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical', marginBottom: 16, minHeight: 120 }} />

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          width: '100%', padding: '14px',
          backgroundColor: theme.colors.primary, color: 'white',
          border: 'none', borderRadius: '8px', fontWeight: 700,
          cursor: 'pointer', fontSize: '1rem',
          display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10,
          transition: 'background-color 0.2s',
        }}
        onMouseOver={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#8B1E2F'; }}
        onMouseOut={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = theme.colors.primary; }}
      >
        {status === 'submitting' ? <><FaSpinner className="form-spinner" /> Sending...</> : 'Send Message'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginTop: '15px', fontWeight: '500', textAlign: 'center' }}>
          {errorMessage}
        </p>
      )}

      <style>{`
        .form-spinner { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </form>
  );
};