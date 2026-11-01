import React, { useState, useRef, useEffect } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaSpinner, FaRegCheckCircle, FaChevronDown } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaPhone, FaLocationDot, FaBriefcase } from 'react-icons/fa6';

const ERR = '#e74c3c';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const interestOptions = ['Teaching', 'Skill Training', 'Fundraising & Events', 'Community Outreach', 'Health Support', 'Others'];

export const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', city: '', occupation: '', interest: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [interestOpen, setInterestOpen] = useState(false);
  const interestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => { if (interestRef.current && !interestRef.current.contains(e.target as Node)) setInterestOpen(false); };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const validate = (data = formData) => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = 'This field is required.';
    if (!data.email.trim()) e.email = 'This field is required.';
    else if (!emailRegex.test(data.email)) e.email = 'Please enter a valid email (e.g. name@example.com).';
    if (!data.phone) e.phone = 'This field is required.';
    else if (data.phone.length !== 10 || !/^[6-9]/.test(data.phone)) e.phone = 'Please enter a valid phone number.';
    if (!data.city.trim()) e.city = 'This field is required.';
    if (!data.interest) e.interest = 'Please select an area of interest.';
    return e;
  };

  const handleBlur = (name: string) => {
    const e = validate();
    if (e[name]) setErrors(prev => ({ ...prev, [name]: e[name] }));
    else setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'city' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, phone: digits }));
      if (errors.phone) setErrors(prev => { const n = { ...prev }; delete n.phone; return n; });
      return;
    }
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus('submitting');
    setErrorMessage('');
    const response = await submitToWeb3Forms('VOLUNTEER', { name: formData.name, email: formData.email, phone: `+91 ${formData.phone}`, city: formData.city, occupation: formData.occupation, 'Area of Interest': formData.interest, message: formData.message, subject: 'New Submission: Volunteer Application' });
    if (response.success) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', city: '', occupation: '', interest: '', message: '' });
      setErrors({});
    } else {
      setStatus('error');
      setErrorMessage(response.message || 'Submission failed. Please try again.');
    }
  };

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '40px 10px' }}>
      <FaRegCheckCircle style={{ color: '#1abc9c', fontSize: '3rem', marginBottom: '16px' }} />
      <h3 style={{ color: '#333', fontWeight: 700, margin: '0 0 10px' }}>Thank You!</h3>
      <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 24px' }}>We've received your application. Our team will be in touch soon.</p>
      <button onClick={() => setStatus('idle')} style={{ backgroundColor: theme.colors.primary, color: 'white', border: 'none', padding: '10px 28px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem' }}>Submit Another</button>
    </div>
  );

  const base: React.CSSProperties = { width: '100%', padding: '14px 16px', borderRadius: '6px', fontSize: '0.92rem', outline: 'none', boxSizing: 'border-box', backgroundColor: '#f5f5f5', fontFamily: 'inherit', fontWeight: 500, color: '#333', transition: 'border-color 0.2s' };
  const bord = (name: string) => `1px solid ${errors[name] ? ERR : '#e4e4e4'}`;
  const iconWrap = (name: string): React.CSSProperties => ({ position: 'relative', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '6px', border: bord(name) });
  const iconSt: React.CSSProperties = { position: 'absolute', left: 16, color: '#adb5bd', fontSize: '0.88rem', pointerEvents: 'none', flexShrink: 0 };
  const iconInp: React.CSSProperties = { ...base, border: 'none', backgroundColor: 'transparent', paddingLeft: '40px' };
  const errText = (name: string) => errors[name] ? <p style={{ color: ERR, fontSize: '0.72rem', margin: '3px 0 10px', paddingLeft: 2 }}>{errors[name]}</p> : <div style={{ marginBottom: 16 }} />;
  const row2: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ padding: 0 }}>
      <div style={row2}>
        <div>
          <div style={iconWrap('name')}><FaUser style={iconSt} /><input type="text" name="name" placeholder="Full Name *" disabled={status === 'submitting'} value={formData.name} onChange={handleChange} onBlur={() => handleBlur('name')} style={iconInp} /></div>
          {errText('name')}
        </div>
        <div>
          <div style={iconWrap('email')}><FaEnvelope style={iconSt} /><input type="email" name="email" placeholder="Email Address *" disabled={status === 'submitting'} value={formData.email} onChange={handleChange} onBlur={() => handleBlur('email')} style={iconInp} /></div>
          {errText('email')}
        </div>
      </div>

      <div style={row2}>
        <div>
          <div style={iconWrap('phone')}><FaPhone style={iconSt} /><input type="tel" name="phone" placeholder="Mobile Number *" disabled={status === 'submitting'} value={formData.phone} onChange={handleChange} onBlur={() => handleBlur('phone')} maxLength={10} style={iconInp} /></div>
          {errText('phone')}
        </div>
        <div>
          <div style={iconWrap('city')}><FaLocationDot style={iconSt} /><input type="text" name="city" placeholder="City *" disabled={status === 'submitting'} value={formData.city} onChange={handleChange} onBlur={() => handleBlur('city')} style={iconInp} /></div>
          {errText('city')}
        </div>
      </div>

      <div style={row2}>
        <div>
          <div style={iconWrap('occupation')}><FaBriefcase style={iconSt} /><input type="text" name="occupation" placeholder="Occupation" disabled={status === 'submitting'} value={formData.occupation} onChange={handleChange} style={iconInp} /></div>
          <div style={{ marginBottom: 16 }} />
        </div>
        <div>
          <div ref={interestRef} style={{ position: 'relative' }}>
            <button type="button" disabled={status === 'submitting'} onClick={() => setInterestOpen(o => !o)}
              style={{ ...base, border: bord('interest'), display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', textAlign: 'left', color: formData.interest ? '#333' : '#888', borderColor: errors.interest ? ERR : interestOpen ? theme.colors.primary : '#e4e4e4', marginBottom: 0 }}>
              <span>{formData.interest || 'Area Of Interest *'}</span>
              <FaChevronDown size={12} style={{ transition: 'transform 0.2s', transform: interestOpen ? 'rotate(180deg)' : 'none', flexShrink: 0, color: '#888' }} />
            </button>
            {interestOpen && (
              <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, zIndex: 50, background: '#fff', borderRadius: 8, border: `1.5px solid ${theme.colors.primary}33`, boxShadow: '0 8px 24px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
                {interestOptions.map(opt => (
                  <div key={opt} onClick={() => { setFormData(prev => ({ ...prev, interest: opt })); setInterestOpen(false); setErrors(prev => { const n = { ...prev }; delete n.interest; return n; }); }}
                    style={{ padding: '11px 16px', fontSize: '0.9rem', cursor: 'pointer', color: formData.interest === opt ? theme.colors.primary : '#333', backgroundColor: formData.interest === opt ? `${theme.colors.primary}08` : 'transparent', fontWeight: formData.interest === opt ? 600 : 400 }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = `${theme.colors.primary}10`)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = formData.interest === opt ? `${theme.colors.primary}08` : 'transparent')}>
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
          {errText('interest')}
        </div>
      </div>

      <div>
        <textarea name="message" placeholder="Write a Message (Optional)" rows={5} disabled={status === 'submitting'} value={formData.message} onChange={handleChange}
          style={{ ...base, border: '1px solid #e4e4e4', resize: 'vertical', minHeight: 120, marginBottom: 16 }} />
      </div>

      <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', padding: '14px', backgroundColor: theme.colors.primary, color: 'white', border: 'none', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, transition: 'background-color 0.2s' }}
        onMouseOver={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#8B1E2F'; }}
        onMouseOut={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = theme.colors.primary; }}>
        {status === 'submitting' ? <FaSpinner className="vol-spinner" /> : 'Submit'}
      </button>

      {status === 'error' && <p style={{ color: ERR, fontSize: '0.82rem', marginTop: 10, textAlign: 'center' }}>{errorMessage}</p>}
      <style>{`.vol-spinner{animation:spin 1s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}`}</style>
    </form>
  );
};
