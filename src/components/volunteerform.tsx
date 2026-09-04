import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaSpinner, FaRegCheckCircle } from 'react-icons/fa';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    occupation: '',
    interest: '',
    message: '',
    updates: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '6px',
    border: '1px solid #e4e4e4',
    fontSize: '0.92rem',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5',
    fontFamily: 'inherit',
    color: '#333',
    transition: 'border-color 0.2s, background 0.2s',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
      return;
    }
    if (name === 'name' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'city' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, phone: digits });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. name@example.com).');
      return;
    }
    setStatus('submitting');
    setErrorMessage('');

    const response = await submitToWeb3Forms('VOLUNTEER', {
      name: formData.name,
      email: formData.email,
      phone: `+91 ${formData.phone}`,
      city: formData.city,
      occupation: formData.occupation,
      'Area of Interest': formData.interest,
      message: formData.message,
      'Receive Updates': formData.updates ? 'Yes' : 'No',
      subject: 'New Submission: Volunteer Application',
    });

    if (response.success) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', city: '', occupation: '', interest: '', message: '', updates: false });
    } else {
      setStatus('error');
      setErrorMessage(response.message || 'Submission failed. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 10px' }}>
        <FaRegCheckCircle style={{ color: '#1abc9c', fontSize: '3rem', marginBottom: '16px' }} />
        <h3 style={{ color: '#333', fontWeight: 700, margin: '0 0 10px' }}>Thank You!</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 24px' }}>
          We've received your application. Our team will be in touch soon.
        </p>
        <button onClick={() => setStatus('idle')} style={{
          backgroundColor: theme.colors.primary, color: 'white',
          border: 'none', padding: '10px 28px', borderRadius: '6px',
          fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem',
        }}>
          Submit Another
        </button>
      </div>
    );
  }

  const row2: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 0 }}>

      {/* Row 1 */}
      <div style={row2}>
        <input type="text" name="name" placeholder="Your Name" required disabled={status === 'submitting'}
          value={formData.name} onChange={handleChange} style={inputStyle} />
        <input type="email" name="email" placeholder="Email Address" required disabled={status === 'submitting'}
          value={formData.email} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Row 2 */}
      <div style={row2}>
        <input type="tel" name="phone" placeholder="Phone" required disabled={status === 'submitting'}
          value={formData.phone} onChange={handleChange} maxLength={10} style={inputStyle} />
        <input type="text" name="city" placeholder="City" required disabled={status === 'submitting'}
          value={formData.city} onChange={handleChange} style={inputStyle} />
      </div>

      {/* Row 3 */}
      <div style={row2}>
        <input type="text" name="occupation" placeholder="Occupation" disabled={status === 'submitting'}
          value={formData.occupation} onChange={handleChange} style={inputStyle} />
        <select name="interest" required disabled={status === 'submitting'}
          value={formData.interest} onChange={handleChange}
          style={{ ...inputStyle, color: formData.interest ? '#333' : '#888' }}>
          <option value="" disabled>Area Of Interest</option>
          <option value="Teaching">Teaching</option>
          <option value="Skill Training">Skill Training</option>
          <option value="Fundraising & Events">Fundraising &amp; Events</option>
          <option value="Community Outreach">Community Outreach</option>
          <option value="Health Support">Health Support</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Message */}
      <textarea name="message" placeholder="Write Message" rows={5} disabled={status === 'submitting'}
        value={formData.message} onChange={handleChange}
        style={{ ...inputStyle, resize: 'vertical', marginBottom: 16, minHeight: 120 }} />

      {/* Checkbox */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 20 }}>
        <input type="checkbox" name="updates" id="vol-updates"
          checked={formData.updates} onChange={handleChange}
          disabled={status === 'submitting'}
          style={{ marginTop: 3, width: 16, height: 16, flexShrink: 0, cursor: 'pointer', accentColor: theme.colors.primary }} />
        <label htmlFor="vol-updates" style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.5, cursor: 'pointer' }}>
          "I would like to receive updates from Johar Welfare Foundation."
        </label>
      </div>

      <button type="submit" disabled={status === 'submitting'} style={{
        width: '100%', padding: '14px',
        backgroundColor: theme.colors.primary, color: 'white',
        border: 'none', borderRadius: '6px', fontWeight: 700,
        cursor: 'pointer', fontSize: '1rem',
        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10,
        transition: 'background-color 0.2s',
      }}
        onMouseOver={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#8B1E2F'; }}
        onMouseOut={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = theme.colors.primary; }}
      >
        {status === 'submitting' ? <FaSpinner className="vol-spinner" /> : 'Submit'}
      </button>

      {status === 'error' && (
        <p style={{ color: '#e74c3c', fontSize: '0.82rem', marginTop: 10, textAlign: 'center' }}>
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
