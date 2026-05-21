import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme/styles';
import { SEO } from '../shared/seo';
import { FaRegEnvelope, FaHeart, FaSpinner, FaHome } from 'react-icons/fa';
import { submitToWeb3Forms } from '../forms/formservice';

const Unsubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Submitting via our central service using the 'UNSUBSCRIBE' environment key mapping
    const result = await submitToWeb3Forms('UNSUBSCRIBE', { email });

    if (result.success) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div style={{ backgroundColor: theme.colors.background, minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 5%' }}>
      <SEO title="Unsubscribe" description="Opt out of the Johar Foundation monthly newsletter archive communications." />

      <div style={{
        backgroundColor: '#fff', border: '1px solid #ececec', borderRadius: '24px',
        padding: '50px 40px', maxWidth: '500px', width: '100%', textAlign: 'center',
        boxShadow: '0 10px 30px rgba(0,0,0,0.02)', boxSizing: 'border-box'
      }}>
        {status === 'success' ? (
          <div>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#fdf0f1',
              color: theme.colors.primary, display: 'flex', justifyContent: 'center', alignItems: 'center',
              fontSize: '1.4rem', margin: '0 auto 20px auto'
            }}>
              <FaHeart style={{ opacity: 0.8 }} />
            </div>
            <h2 style={{ color: theme.colors.secondary, fontWeight: '700', fontSize: '1.6rem', margin: '0 0 12px 0' }}>
              You have opted out
            </h2>
            <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 30px 0' }}>
              Your email address has been safely removed from our database. We are sorry to see you go, but you are welcome back anytime.
            </p>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button className="back-home-btn" style={{
                backgroundColor: theme.colors.secondary, color: 'white', border: 'none',
                padding: '12px 24px', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.85rem',
                display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'all 0.2s'
              }}>
                <FaHome /> Return Home
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleUnsubscribe}>
            <h2 style={{ color: theme.colors.secondary, fontWeight: '700', fontSize: '1.6rem', margin: '0 0 10px 0' }}>
              Cancel Subscription
            </h2>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 25px 0' }}>
              Please confirm your email address below to stop receiving communications from our community clusters.
            </p>

            <div style={{ position: 'relative', width: '100%', marginBottom: '20px', boxSizing: 'border-box' }}>
              <FaRegEnvelope style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                color: '#aaa', fontSize: '1rem'
              }} />
              <input
                type="email"
                placeholder="Confirm your email profile"
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
              className="unsub-submit-btn"
              style={{
                width: '100%', backgroundColor: '#A62639', color: 'white', border: 'none',
                padding: '14px 20px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '8px', transition: 'all 0.2s ease', outline: 'none'
              }}
            >
              {status === 'loading' ? (
                <FaSpinner className="spinner-icon" />
              ) : (
                'Unsubscribe From Newsletter'
              )}
            </button>

            {status === 'error' && (
              <p style={{ color: '#e74c3c', fontSize: '0.82rem', marginTop: '12px', fontWeight: '500' }}>
                Failed to process request. Please check your network connection or try again later.
              </p>
            )}
          </form>
        )}
      </div>

      <style>{`
        .unsub-submit-btn:hover {
          background-color: #8c1e2f !important;
          box-shadow: 0 4px 15px rgba(166, 38, 57, 0.25) !important;
        }
        .back-home-btn:hover {
          background-color: ${theme.colors.primary} !important;
        }
        .spinner-icon { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Unsubscribe;