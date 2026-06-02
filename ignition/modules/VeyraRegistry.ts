import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

/**
 * VEYRA REGISTRY - SECURE DEPLOYMENT MODULE
 * 
 * Cybersecurity Notice:
 * This module is designed to be 100% free of sensitive data.
 * It NEVER logs or accesses private keys directly.
 * Hardhat injects the deployment account securely via `hardhat.config.ts`.
 */
const VeyraRegistryModule = buildModule("VeyraRegistryModule", (m) => {
  // Public Identity References (Safe to commit, NO private data here)
  const projectName = m.getParameter("projectName", "Veyra");
  const demoUrl = m.getParameter("demoUrl", "https://veyra-six-phi.vercel.app");
  const repositoryUrl = m.getParameter("repositoryUrl", "https://github.com/alisakusumah/veyra");
  const networkName = m.getParameter("networkName", "OPN Testnet");

  // Deploy the contract with the required public metadata
  const registry = m.contract("VeyraRegistry", [
    projectName,
    demoUrl,
    repositoryUrl,
    networkName
  ]);

  return { registry };
});

export default VeyraRegistryModule;
