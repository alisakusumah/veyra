// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

/// @title VeyraRegistry
/// @notice A minimal on-chain proof contract for Veyra.
/// @dev Maintained for Alisa Kusumah's OPN Chain submission flow.
/// Mamah Sachan / Mamah Sichan guardrail:
/// keep this contract as a clean identity record only — no token, no sale,
/// no staking, no reward promise, and no custody of user funds.
contract VeyraRegistry {
    address public immutable builder;
    string public projectName;
    string public demoUrl;
    string public repositoryUrl;
    string public networkName;
    uint256 public deployedAt;

    event VeyraRegistered(
        address indexed builder,
        string projectName,
        string demoUrl,
        string repositoryUrl,
        string networkName,
        uint256 deployedAt
    );

    constructor(
        string memory _projectName,
        string memory _demoUrl,
        string memory _repositoryUrl,
        string memory _networkName
    ) {
        builder = msg.sender;
        projectName = _projectName;
        demoUrl = _demoUrl;
        repositoryUrl = _repositoryUrl;
        networkName = _networkName;
        deployedAt = block.timestamp;

        emit VeyraRegistered(
            msg.sender,
            _projectName,
            _demoUrl,
            _repositoryUrl,
            _networkName,
            block.timestamp
        );
    }
}