import { config as loadEnv } from "dotenv";
import { defineConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-ignition-ethers";

loadEnv();

const opnPrivateKey = process.env.OPN_TESTNET_PRIVATE_KEY ?? "";

export default defineConfig({
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    opnTestnet: {
      type: "http",
      url: "https://testnet-rpc.iopn.tech",
      chainId: 984,
      accounts: opnPrivateKey ? [opnPrivateKey] : [],
    },
  },
});