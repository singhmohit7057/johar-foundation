import React, { useState } from 'react';
import { theme } from '../theme/styles';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API logic
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px',
    marginBottom: '20px',
    borderRadius: '6px',
    border: `1px solid rgba(0,0,0,0.1)`,
    fontSize: '1rem',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: theme.colors.secondary,
    fontSize: '0.85rem'
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

  return (
    <form onSubmit={handleSubmit}>
      {/* Grid for Name, Email, and Phone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 20px' }}>
        <div style={{ gridColumn: 'span 2' }}>
           <label style={labelStyle}>Full Name</label>
           <input type="text" name="name" required value={formData.name} onChange={handleChange} style={inputStyle} placeholder="Mohit Singh" />
        </div>
        
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} style={inputStyle} placeholder="mohit@tmmt.in" />
        </div>

        <div>
          <label style={labelStyle}>Phone Number <span style={{ fontWeight: 'normal', color: '#888' }}>(Optional)</span></label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+91 XXXXX XXXXX" />
        </div>
      </div>

      <label style={labelStyle}>Subject</label>
      <input type="text" name="subject" required value={formData.subject} onChange={handleChange} style={inputStyle} />
      
      <label style={labelStyle}>Message</label>
      <textarea name="message" required value={formData.message} onChange={handleChange} style={{ ...inputStyle, height: '120px', resize: 'none' }} />
      
      <button 
        type="submit" 
        disabled={status === 'submitting'}
        style={{
          width: '100%',
          padding: '15px',
          backgroundColor: theme.colors.primary,
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: theme.utils.transition
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = theme.colors.secondary)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = theme.colors.primary)}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};