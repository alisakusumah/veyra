import hre from "hardhat";

async function main() {
  // @ts-ignore
  const { ethers } = hre;
  console.log("Starting secure VeyraRegistry deployment...");

  // Public Identity References
  const projectName = "Veyra";
  const demoUrl = "https://veyra-six-phi.vercel.app";
  const repositoryUrl = "https://github.com/alisakusumah/veyra";
  const networkName = "OPN Testnet";

  const VeyraRegistry = await ethers.getContractFactory("VeyraRegistry");
  console.log("Deploying contract to OPN Testnet...");
  
  const registry = await VeyraRegistry.deploy(projectName, demoUrl, repositoryUrl, networkName);
  await registry.waitForDeployment();

  const address = await registry.getAddress();
  console.log(`\n======================================================`);
  console.log(`✅ SUCCESS: VeyraRegistry Deployed Securely!`);
  console.log(`======================================================`);
  console.log(`Contract Address : ${address}`);
  console.log(`Builder Identity : Alisa Kusumah`);
  console.log(`Project Name     : ${projectName}`);
  console.log(`======================================================\n`);
}

main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});
