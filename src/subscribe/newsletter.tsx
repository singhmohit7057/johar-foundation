import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';
import { FaRegEnvelope, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { submitToWeb3Forms } from '../forms/formservice';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Submitting via our central service using the 'NEWSLETTER' environment key mapping
    const result = await submitToWeb3Forms('NEWSLETTER', { email });

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
      setErrorMessage(result.message || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="newsletter-container" style={{
      backgroundColor: '#fafafa',
      borderTop: '1px solid #f0f0f0',
      borderBottom: '1px solid #f0f0f0',
      padding: '60px 5%',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{
          display: 'inline-block',
          padding: '4px 12px',
          backgroundColor: `${theme.colors.primary}15`,
          color: theme.colors.primary,
          borderRadius: '50px',
          fontSize: '0.7rem',
          fontWeight: 'bold',
          marginBottom: '12px',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          STAY UPDATED
        </div>
        
        <h3 style={{ color: theme.colors.secondary, fontWeight: '700', fontSize: '1.6rem', margin: '0 0 10px 0' }}>
          Subscribe to Our Newsletter
        </h3>
        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 30px 0' }}>
          Get monthly updates on ground program milestones, field photos, and institutional transparency accounts directly to your inbox.
        </p>

        {status === 'success' ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            backgroundColor: '#1abc9c15', color: '#1abc9c', padding: '16px 24px', borderRadius: '12px',
            fontWeight: '600', fontSize: '0.95rem', maxWidth: '450px', margin: '0 auto'
          }}>
            <FaCheckCircle style={{ fontSize: '1.2rem' }} /> Thank you! You've been subscribed successfully.
          </div>
        ) : (
          <div style={{ maxWidth: '480px', margin: '0 auto' }}>
            <form onSubmit={handleSubscribe} style={{
              display: 'flex', 
              gap: '12px', 
              flexWrap: 'wrap', 
              marginBottom: '15px',
              justifyContent: 'center', // Centers the wrapped layout items horizontally
              alignItems: 'center'      // Centers the layout items vertically
            }}>
              <div style={{ position: 'relative', flex: '1', minWidth: '260px', width: '100%' }}>
                <FaRegEnvelope style={{
                  position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                  color: '#aaa', fontSize: '1rem', zIndex: 2
                }} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  disabled={status === 'loading'}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%', padding: '14px 16px 14px 44px', borderRadius: '50px',
                    border: '1px solid #ddd', fontSize: '0.9rem', outline: 'none',
                    boxSizing: 'border-box', backgroundColor: '#fff',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className="subscribe-btn"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: '#fff', border: 'none', padding: '14px 28px', borderRadius: '50px',
                  fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'all 0.2s ease', minWidth: '130px', outline: 'none',
                  boxShadow: `0 4px 12px ${theme.colors.primary}25`
                }}
              >
                {status === 'loading' ? (
                  <FaSpinner className="spinner-icon" />
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>

            <p style={{ color: '#888', fontSize: '0.78rem', margin: '0', fontWeight: '500' }}>
              No spam, ever.{' '}
              <Link to="/unsubscribe" className="unsub-link" style={{ 
                color: '#666', 
                textDecoration: 'underline',
                fontWeight: '600',
                transition: 'color 0.2s ease'
              }}>
                Unsubscribe
              </Link> Anytime
            </p>
          </div>
        )}

        {status === 'error' && (
          <p style={{ color: '#e74c3c', fontSize: '0.82rem', margin: '12px 0 0 0', fontWeight: '500' }}>
            {errorMessage}
          </p>
        )}
      </div>

      <style>{`
        .subscribe-btn:hover {
          background-color: ${theme.colors.secondary} !important;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15) !important;
          transform: translateY(-1px);
        }
        .subscribe-btn:active { transform: translateY(0); }
        
        .unsub-link:hover {
          color: ${theme.colors.primary} !important;
        }

        .spinner-icon { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};