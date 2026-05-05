// ─── API Configuration ───────────────────────────────────────
// In development (Vite dev server), use local backend.
// In production (Electron .exe), use the deployed Render backend.

const isDev = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || window.location.port === '5173');

export const API_BASE = isDev
  ? 'http://127.0.0.1:3001'
  : 'https://corpo-vpn-backend.onrender.com';

export const AUTH_API   = `${API_BASE}/api/auth`;
export const VPN_API    = `${API_BASE}/api/vpn`;
export const POLICY_API = `${API_BASE}/api/policy`;
