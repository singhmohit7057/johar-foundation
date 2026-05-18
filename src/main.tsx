import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // This MUST be present to clear default browser margins

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);