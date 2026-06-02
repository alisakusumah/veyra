import "dotenv/config";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { createWalletClient, createPublicClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { defineChain } from "viem";

const privateKey = process.env.OPN_TESTNET_PRIVATE_KEY;

if (!privateKey) {
  throw new Error("Missing OPN_TESTNET_PRIVATE_KEY in .env");
}

const normalizedPrivateKey = privateKey.startsWith("0x")
  ? privateKey
  : `0x${privateKey}`;

const opnTestnet = defineChain({
  id: 984,
  name: "OPN Testnet",
  nativeCurrency: {
    name: "OPN",
    symbol: "OPN",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.iopn.tech"],
    },
  },
  blockExplorers: {
    default: {
      name: "OPN Testnet Explorer",
      url: "https://testnet.iopn.tech",
    },
  },
});

const artifactPath =
  "./artifacts/contracts/VeyraRegistry.sol/VeyraRegistry.json";

const artifact = JSON.parse(readFileSync(artifactPath, "utf8"));

const account = privateKeyToAccount(normalizedPrivateKey);

const publicClient = createPublicClient({
  chain: opnTestnet,
  transport: http(),
});

const walletClient = createWalletClient({
  account,
  chain: opnTestnet,
  transport: http(),
});

console.log("Deploying VeyraRegistry...");
console.log("Deployer:", account.address);

const hash = await walletClient.deployContract({
  abi: artifact.abi,
  bytecode: artifact.bytecode,
  args: [
    "Veyra",
    "https://veyra-six-phi.vercel.app",
    "https://github.com/alisakusumah/veyra",
    "OPN Testnet",
  ],
});

console.log("Transaction hash:", hash);

const receipt = await publicClient.waitForTransactionReceipt({ hash });

console.log("Contract address:", receipt.contractAddress);
console.log("Explorer:", `https://testnet.iopn.tech/address/${receipt.contractAddress}`);

const deploymentPath = "./deployments/opn-testnet/VeyraRegistry.json";

mkdirSync(dirname(deploymentPath), { recursive: true });

writeFileSync(
  deploymentPath,
  JSON.stringify(
    {
      contractName: "VeyraRegistry",
      network: "OPN Testnet",
      chainId: 984,
      deployer: account.address,
      transactionHash: hash,
      contractAddress: receipt.contractAddress,
      explorer: `https://testnet.iopn.tech/address/${receipt.contractAddress}`,
      demoUrl: "https://veyra-six-phi.vercel.app",
      repositoryUrl: "https://github.com/alisakusumah/veyra",
      deployedAt: new Date().toISOString(),
    },
    null,
    2
  )
);

console.log("Saved deployment:", deploymentPath);