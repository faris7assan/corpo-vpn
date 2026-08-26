# Security Policy

## Scope

CORPO VPN is a cybersecurity graduation project intended for educational, research, and authorized security-testing environments.

## Reporting a Vulnerability

Please do not publish credentials, private keys, exploit details, or other sensitive information in a public issue.

For a responsible disclosure, contact the project owner through the contact information listed on the GitHub profile and provide:

- affected component and version/commit
- reproduction steps
- security impact
- suggested remediation, if available

## Secret Handling

Never commit `.env` files, API keys, passwords, private keys, VPN private keys, or production configuration to this repository.

If a secret is ever exposed, revoke/rotate it immediately and remove it from the repository history as appropriate.
