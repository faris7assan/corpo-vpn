# CORPO VPN

### Zero-Trust VPN Security Solution

CORPO VPN is a full-stack cybersecurity graduation project designed to secure remote access to private infrastructure using a **Zero-Trust access model** and **WireGuard**.

Instead of trusting a device simply because it has valid credentials, the desktop client performs endpoint security checks before allowing the VPN tunnel to be established.

## Security Model

```text
User Authentication
        ↓
OTP Verification
        ↓
Endpoint Compliance Check
        ↓
Policy Decision
   ┌────┴────┐
 Compliant  Non-Compliant
   ↓            ↓
WireGuard     Access Denied
Tunnel
   ↓
Private Network Access
```

## Key Security Features

- **Zero-Trust access control** — access is evaluated before establishing the tunnel.
- **WireGuard VPN** — modern, lightweight VPN protocol for encrypted network connectivity.
- **Endpoint compliance checks** — the Windows client checks security posture before connection.
- **Antivirus status validation** — verifies active Windows Defender or third-party antivirus protection.
- **Firewall validation** — checks whether the host firewall is enabled.
- **BitLocker validation** — checks drive-encryption status.
- **Suspicious-process checks** — identifies potentially suspicious background processes.
- **OTP authentication** — passwordless authentication using one-time passwords.
- **Automated peer provisioning** — backend services generate and provision WireGuard peers without manual configuration files.
- **Role-based administration** — administrators can manage users, peers, and connection state.
- **Connection monitoring** — tracks WireGuard handshake and traffic statistics.

## Architecture

```text
┌──────────────────────┐
│   Windows Desktop    │
│  Electron + React    │
│                      │
│ • Authentication     │
│ • Compliance checks  │
│ • WireGuard control  │
└──────────┬───────────┘
           │ HTTPS / API
           ▼
┌──────────────────────┐
│   Backend API        │
│      NestJS          │
│                      │
│ • Authentication     │
│ • Session management │
│ • Peer provisioning  │
│ • Policy logic       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Ubuntu VPS        │
│      WireGuard       │
│                      │
│ • wg0 tunnel         │
│ • NAT / iptables     │
│ • Peer management    │
└──────────────────────┘
```

## Technology Stack

### Desktop Client
- Electron.js
- React 18
- Vite
- Tailwind CSS
- Node.js
- Windows PowerShell integration

### Backend
- NestJS
- TypeScript
- Supabase / PostgreSQL
- JWT session management
- Brevo HTTP API for OTP delivery

### VPN Infrastructure
- Ubuntu Linux VPS
- WireGuard
- iptables / NAT
- Node.js / Express service for peer provisioning

## Connection Workflow

1. User signs in with corporate email.
2. OTP authentication verifies the user's identity.
3. The client retrieves the user's VPN configuration.
4. The desktop client evaluates the device security posture.
5. The policy decision determines whether access is allowed.
6. A WireGuard tunnel is established only when the endpoint satisfies the required checks.
7. Connection statistics and handshake information are monitored by the application.

## Development

### Requirements

- Node.js 18+
- Windows 10/11 for the desktop compliance features
- WireGuard
- Access to a Linux VPS for the VPN infrastructure

### Build the Desktop Client

```bash
cd "grad project draft front"
npm install
npm run electron:build
```

The build produces the Windows installer in the Electron build output directory.

## Project Scope

This project was developed as a **2026 Computer Science / Cybersecurity graduation project** and demonstrates practical application of:

- Zero-Trust security principles
- VPN and network security
- Endpoint security posture assessment
- Authentication and authorization
- Linux networking
- Backend API development
- Security monitoring

## Disclaimer

This project is intended for educational, research, and authorized security-testing environments. Deploy it only on infrastructure you own or are explicitly authorized to administer.

## Author

**Hassan Faris**  
Cybersecurity Graduate | Network Security | SOC | Penetration Testing

- GitHub: https://github.com/faris7assan
- Portfolio: https://hassanhamedfaris69.base44.app/
