import React, { useState, useRef, useEffect } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaSpinner, FaRegCheckCircle, FaChevronDown } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaPhone, FaLocationDot, FaBriefcase } from 'react-icons/fa6';

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    occupation: '',
    interest: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [interestOpen, setInterestOpen] = useState(false);
  const interestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (interestRef.current && !interestRef.current.contains(e.target as Node)) {
        setInterestOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const interestOptions = ['Teaching', 'Skill Training', 'Fundraising & Events', 'Community Outreach', 'Health Support', 'Others'];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '6px',
    border: '1px solid #e4e4e4',
    fontSize: '0.92rem',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    color: '#333',
    transition: 'border-color 0.2s, background 0.2s',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
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
subject: 'New Submission: Volunteer Application',
    });

    if (response.success) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', city: '', occupation: '', interest: '', message: '' });
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
  const iconWrap: React.CSSProperties = { position: 'relative', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '6px', border: '1px solid #e4e4e4' };
  const iconStyle: React.CSSProperties = { position: 'absolute', left: 16, color: '#adb5bd', fontSize: '0.88rem', pointerEvents: 'none', flexShrink: 0 };
  const iconInput: React.CSSProperties = { ...inputStyle, border: 'none', backgroundColor: 'transparent', paddingLeft: '40px' };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 0 }}>

      {/* Row 1 */}
      <div style={row2}>
        <div style={iconWrap}>
          <FaUser style={iconStyle} />
          <input type="text" name="name" placeholder="Full Name *" required disabled={status === 'submitting'}
            value={formData.name} onChange={handleChange} style={iconInput} />
        </div>
        <div style={iconWrap}>
          <FaEnvelope style={iconStyle} />
          <input type="email" name="email" placeholder="Email Address *" required disabled={status === 'submitting'}
            value={formData.email} onChange={handleChange} style={iconInput} />
        </div>
      </div>

      {/* Row 2 */}
      <div style={row2}>
        <div style={iconWrap}>
          <FaPhone style={iconStyle} />
          <input type="tel" name="phone" placeholder="Mobile Number *" required disabled={status === 'submitting'}
            value={formData.phone} onChange={handleChange} maxLength={10} style={iconInput} />
        </div>
        <div style={iconWrap}>
          <FaLocationDot style={iconStyle} />
          <input type="text" name="city" placeholder="City *" required disabled={status === 'submitting'}
            value={formData.city} onChange={handleChange} style={iconInput} />
        </div>
      </div>

      {/* Row 3 */}
      <div style={row2}>
        <div style={iconWrap}>
          <FaBriefcase style={iconStyle} />
          <input type="text" name="occupation" placeholder="Occupation" disabled={status === 'submitting'}
            value={formData.occupation} onChange={handleChange} style={iconInput} />
        </div>
        <div ref={interestRef} style={{ position: 'relative' }}>
          <button type="button" disabled={status === 'submitting'}
            onClick={() => setInterestOpen(o => !o)}
            style={{
              ...inputStyle,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              cursor: 'pointer', textAlign: 'left',
              color: formData.interest ? '#333' : '#888',
              borderColor: interestOpen ? theme.colors.primary : '#e4e4e4',
              marginBottom: 0,
            }}>
            <span>{formData.interest || 'Area Of Interest *'}</span>
            <FaChevronDown size={12} style={{ transition: 'transform 0.2s', transform: interestOpen ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, color: '#888' }} />
          </button>
          {interestOpen && (
            <div style={{
              position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 50,
              background: '#fff', borderRadius: 8,
              border: `1.5px solid ${theme.colors.primary}33`,
              boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              overflow: 'hidden',
            }}>
              {interestOptions.map(opt => (
                <div key={opt}
                  onMouseDown={() => { setFormData(f => ({ ...f, interest: opt })); setInterestOpen(false); }}
                  style={{
                    padding: '11px 16px', fontSize: '0.92rem', cursor: 'pointer',
                    color: formData.interest === opt ? theme.colors.primary : '#333',
                    background: formData.interest === opt ? `${theme.colors.primary}10` : 'transparent',
                    fontWeight: formData.interest === opt ? 600 : 400,
                    borderLeft: formData.interest === opt ? `3px solid ${theme.colors.primary}` : '3px solid transparent',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => { if (formData.interest !== opt) { (e.currentTarget as HTMLElement).style.background = 'rgba(166,38,57,0.82)'; (e.currentTarget as HTMLElement).style.color = '#fff'; } }}
                  onMouseLeave={e => { if (formData.interest !== opt) { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#333'; } }}
                >
                  {opt}
                </div>
              ))}
            </div>
          )}
          {/* hidden input to satisfy form required validation */}
          <input type="text" name="interest" required value={formData.interest}
            onChange={() => {}} tabIndex={-1}
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0, pointerEvents: 'none' }} />
        </div>
      </div>

      {/* Message */}
      <textarea name="message" placeholder="Write a Message (Optional)" rows={5} disabled={status === 'submitting'}
        value={formData.message} onChange={handleChange}
        style={{ ...inputStyle, resize: 'vertical', marginBottom: 16, minHeight: 120 }} />

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
