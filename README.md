# VEYRA

> **A sovereign builder dossier for open finance on OPN Chain.**

Veyra is a premium, static-first builder profile architected by Alisa Kusumah for OPN Chain Season 1. It presents a clean project identity layer with a live demo, public repository, network details, chain ID, and an immutable on-chain contract reference.

Built with an uncompromising **Audit-First, Zero-Bug** philosophy, Veyra strips away inflated metrics, token promises, and UI bloat in favor of undeniable public reference integrity.

---

## 🛡️ Cybersecurity & Architecture

Veyra is engineered using the **Alisa Kusumah Sovereign Architecture Blueprint**, ensuring top-tier security and performance:
- **Zero-JS by Default**: Built on Astro.js. No unnecessary client-side JavaScript execution, eliminating major XSS attack vectors.
- **Pure CSS Mastery**: 100% custom CSS architecture with zero framework bloat (No Tailwind, No Bootstrap). Ensures lightning-fast rendering and bespoke cinematic animations.
- **Immutable Smart Contract**: `VeyraRegistry.sol` is mathematically constrained to identity logging. No custody of user funds, no upgradeability proxies, no rug-pull vectors.
- **On-Chain Build Validation**: Vercel automatically verifies the contract on the OPN Testnet during build time before awarding the "On-Chain Verified" badge.

---

## 🔗 Live Demo & Deployment

- **Demo**: [https://veyra-six-phi.vercel.app](https://veyra-six-phi.vercel.app)
- **On-Chain Contract (OPN Testnet)**: [0x6e5f399f2c0f9ae22ac4847e531132f8cb9bb787](https://testnet.iopn.tech/address/0x6e5f399f2c0f9ae22ac4847e531132f8cb9bb787)

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+)
- An isolated Web3 Wallet (Hardware wallet recommended)

### Quick Start

```bash
# 1. Install precise dependencies (Strict Lockfile)
npm install

# 2. Setup environment variables (Do NOT use real funds/mainnet keys)
cp .env.example .env

# 3. Start the Elite UI server
npm run dev

# 4. Verify Smart Contract Integrity (100% Test Coverage)
npx hardhat test
```

---

## 📜 Principle of Integrity

> *"Keep this contract as a clean identity record only — no token, no sale, no staking, no reward promise, and no custody of user funds."*  
> — Alisa Kusumah Guardrails

Keep generated backups outside this project folder. Do not add temporary patch folders, old copies, or unused draft files inside the repository.
