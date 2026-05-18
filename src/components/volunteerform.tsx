import React, { useState } from 'react';
import { theme } from '../theme/styles';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Community Work',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer Application:', formData);
    alert('Thank you for your interest! Our team will contact you soon.');
  };

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
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label style={labelStyle}>Area of Interest</label>
          <select 
            style={inputStyle} 
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
        onChange={(e) => setFormData({...formData, message: e.target.value})}
      />

      <button 
        type="submit" 
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
          transition: 'opacity 0.2s'
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        SUBMIT APPLICATION
      </button>
    </form>
  );
};