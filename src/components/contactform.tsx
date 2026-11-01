import React, { useState } from 'react';
import { theme } from '../theme/styles';
import { submitToWeb3Forms } from '../forms/formservice';
import { FaSpinner } from 'react-icons/fa';
import { FaUser, FaEnvelope, FaPhone, FaTag, FaPenToSquare } from 'react-icons/fa6';

const ERR = '#e74c3c';
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', countryCode: '+91', phone: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (data = formData) => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = 'This field is required.';
    if (!data.email.trim()) e.email = 'This field is required.';
    else if (!emailRegex.test(data.email)) e.email = 'Please enter a valid email (e.g. name@example.com).';
    if (!data.phone) e.phone = 'This field is required.';
    else if (data.phone.length !== 10 || !/^[6-9]/.test(data.phone)) e.phone = 'Please enter a valid phone number.';
    if (!data.message.trim()) e.message = 'This field is required.';
    return e;
  };

  const handleBlur = (name: string) => {
    const e = validate();
    if (e[name]) setErrors(prev => ({ ...prev, [name]: e[name] }));
    else setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'name' && /[^a-zA-Z ]/.test(value)) return;
    if (name === 'countryCode') {
      const cleaned = value.startsWith('+') ? '+' + value.slice(1).replace(/\D/g, '').slice(0, 4) : '+' + value.replace(/\D/g, '').slice(0, 4);
      setFormData(prev => ({ ...prev, countryCode: cleaned }));
      return;
    }
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
    const { subject, countryCode, phone, ...otherFields } = formData;
    const response = await submitToWeb3Forms('CONTACT', { ...otherFields, phone: `${countryCode} ${phone}`, "Message Subject": subject, subject: "New Submission: Contact Form" });
    if (response.success) {
      setStatus('success');
      setFormData({ name: '', email: '', countryCode: '+91', phone: '', subject: '', message: '' });
      setErrors({});
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') return (
    <div style={{ textAlign: 'center', padding: '40px 0' }}>
      <div style={{ fontSize: '3rem', marginBottom: '10px' }}>✉️</div>
      <h3 style={{ color: theme.colors.secondary }}>Thank You!</h3>
      <p style={{ color: theme.colors.text }}>Your message has been sent successfully.</p>
      <button onClick={() => setStatus('idle')} style={{ marginTop: '20px', backgroundColor: theme.colors.primary, color: 'white', border: 'none', padding: '10px 25px', borderRadius: '4px', cursor: 'pointer' }}>Send Another</button>
    </div>
  );

  const base: React.CSSProperties = { width: '100%', padding: '14px 16px', borderRadius: '8px', fontSize: '0.92rem', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', outline: 'none', backgroundColor: '#f5f5f5', fontWeight: 500, color: '#333', transition: 'border-color 0.2s' };
const iconWrap = (name: string): React.CSSProperties => ({ position: 'relative', display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '8px', border: `1.5px solid ${errors[name] ? ERR : '#e9ecef'}` });
  const iconSt: React.CSSProperties = { position: 'absolute', left: 16, color: '#adb5bd', fontSize: '0.88rem', pointerEvents: 'none', flexShrink: 0 };
  const iconInp: React.CSSProperties = { ...base, border: 'none', backgroundColor: 'transparent', paddingLeft: '40px' };
  const errText = (name: string) => errors[name] ? <p style={{ color: ERR, fontSize: '0.72rem', margin: '3px 0 8px', paddingLeft: 2 }}>{errors[name]}</p> : <div style={{ marginBottom: 16 }} />;
  const row2: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={row2}>
        <div>
          <div style={iconWrap('name')}>
            <FaUser style={iconSt} />
            <input type="text" name="name" placeholder="Full Name *" disabled={status === 'submitting'} value={formData.name} onChange={handleChange} onBlur={() => handleBlur('name')} style={iconInp} />
          </div>
          {errText('name')}
        </div>
        <div>
          <div style={iconWrap('email')}>
            <FaEnvelope style={iconSt} />
            <input type="email" name="email" placeholder="Email Address *" disabled={status === 'submitting'} value={formData.email} onChange={handleChange} onBlur={() => handleBlur('email')} style={iconInp} />
          </div>
          {errText('email')}
        </div>
      </div>

      <div style={row2}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', border: `1.5px solid ${errors.phone ? ERR : '#e9ecef'}`, borderRadius: '8px', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
            <input type="text" name="countryCode" value={formData.countryCode} onChange={handleChange} disabled={status === 'submitting'} style={{ width: 52, padding: '14px 6px', fontSize: '0.92rem', color: '#555', backgroundColor: '#eee', borderRight: '1.5px solid #e9ecef', border: 'none', outline: 'none', textAlign: 'center', fontFamily: 'inherit' }} />
            <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center' }}>
              <FaPhone style={{ ...iconSt, left: 12 }} />
              <input type="tel" name="phone" placeholder="Mobile Number *" disabled={status === 'submitting'} value={formData.phone} onChange={handleChange} onBlur={() => handleBlur('phone')} style={{ ...iconInp, border: 'none', borderRadius: 0, flex: 1 }} maxLength={10} />
            </div>
          </div>
          {errText('phone')}
        </div>
        <div>
          <div style={iconWrap('subject')}>
            <FaTag style={iconSt} />
            <input type="text" name="subject" placeholder="Subject" disabled={status === 'submitting'} value={formData.subject} onChange={handleChange} style={iconInp} />
          </div>
          <div style={{ marginBottom: 16 }} />
        </div>
      </div>

      <div>
        <div style={{ ...iconWrap('message'), alignItems: 'flex-start' }}>
          <FaPenToSquare style={{ ...iconSt, top: 16, position: 'absolute' }} />
          <textarea name="message" placeholder="Write Message *" rows={5} disabled={status === 'submitting'} value={formData.message} onChange={handleChange} onBlur={() => handleBlur('message')} style={{ ...iconInp, resize: 'vertical', minHeight: 120, paddingTop: 14 }} />
        </div>
        {errText('message')}
      </div>

      <button type="submit" disabled={status === 'submitting'} style={{ width: '100%', padding: '14px', backgroundColor: theme.colors.primary, color: 'white', border: 'none', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, transition: 'background-color 0.2s' }}
        onMouseOver={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = '#8B1E2F'; }}
        onMouseOut={e => { if (status !== 'submitting') e.currentTarget.style.backgroundColor = theme.colors.primary; }}>
        {status === 'submitting' ? <><FaSpinner className="form-spinner" /> Sending...</> : 'Send Message'}
      </button>

      {status === 'error' && <p style={{ color: ERR, fontSize: '0.85rem', marginTop: 12, textAlign: 'center' }}>Something went wrong. Please try again.</p>}
      <style>{`.form-spinner{animation:spin 1s linear infinite}@keyframes spin{100%{transform:rotate(360deg)}}`}</style>
    </form>
  );
};
