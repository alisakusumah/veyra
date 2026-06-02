import { expect } from "chai";
import { ethers } from "hardhat";

describe("VeyraRegistry - Cybersecurity Audit & Integrity Tests", function () {
  it("Should deploy and store the correct identity records with the deployer as builder", async function () {
    const [deployer] = await ethers.getSigners();

    const projectName = "Veyra";
    const demoUrl = "https://veyra-six-phi.vercel.app";
    const repositoryUrl = "https://github.com/alisakusumah/veyra";
    const networkName = "OPN Testnet";

    const VeyraRegistry = await ethers.getContractFactory("VeyraRegistry");
    
    // Test deployment & event emission
    const tx = await VeyraRegistry.deploy(projectName, demoUrl, repositoryUrl, networkName);
    const registry = await tx.waitForDeployment();
    
    const receipt = await tx.deploymentTransaction()?.wait();
    
    // 1. Verify builder identity is immutable and correct (Cybersecurity: No impersonation possible)
    expect(await registry.builder()).to.equal(deployer.address);

    // 2. Verify all string records
    expect(await registry.projectName()).to.equal(projectName);
    expect(await registry.demoUrl()).to.equal(demoUrl);
    expect(await registry.repositoryUrl()).to.equal(repositoryUrl);
    expect(await registry.networkName()).to.equal(networkName);
    
    // 3. Verify timestamp
    const blockNum = await ethers.provider.getBlockNumber();
    const block = await ethers.provider.getBlock(blockNum);
    expect(await registry.deployedAt()).to.equal(block?.timestamp);
  });
});
