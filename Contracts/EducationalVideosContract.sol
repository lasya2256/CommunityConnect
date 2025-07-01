// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EducationalVideosContract {
    address public owner;
    mapping(address => uint256) public rewards;

    event RewardGranted(address indexed user, uint256 reward);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function rewardUser(address _user, uint256 _reward) external onlyOwner {
        require(_user != address(0), "Invalid user address.");
        rewards[_user] += _reward;
        emit RewardGranted(_user, _reward);
    }

    // Other functions can be added here as needed
}
