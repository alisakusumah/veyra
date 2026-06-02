import fs from "fs";
import { ethers } from "ethers";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  console.log("Starting secure VeyraRegistry deployment (Native Mode)...");

  const rpcUrl = process.env.OPN_TESTNET_RPC;
  const privateKey = process.env.OPN_TESTNET_PRIVATE_KEY;

  if (!rpcUrl || !privateKey) {
    throw new Error("Missing OPN_TESTNET_RPC or OPN_TESTNET_PRIVATE_KEY in .env");
  }

  const provider = new ethers.JsonRpcProvider(rpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  console.log(`Deploying from account: ${wallet.address}`);

  const artifactPath = "./artifacts/contracts/VeyraRegistry.sol/VeyraRegistry.json";
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf-8"));

  // Public Identity References
  const projectName = "Veyra";
  const demoUrl = "https://veyra-six-phi.vercel.app";
  const repositoryUrl = "https://github.com/alisakusumah/veyra";
  const networkName = "OPN Testnet";

  const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, wallet);
  
  console.log("Broadcasting deployment transaction to OPN Testnet...");
  const registry = await factory.deploy(projectName, demoUrl, repositoryUrl, networkName);
  
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
