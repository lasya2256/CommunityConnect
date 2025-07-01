// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserAuth {
    // User structure
    struct User {
        string email;
        bytes32 passwordHash;
        // Add other relevant details
    }

    // Mapping from address to User
    mapping(address => User) private users;

    // Event to emit when a user is registered
    event UserRegistered(address userAddress, string email);

    // Event to emit when a user changes their password
    event PasswordChanged(address userAddress);

    // Function to register a user
    function registerUser(string calldata email, bytes32 passwordHash) external {
        require(users[msg.sender].passwordHash == 0, "User already exists!");

        users[msg.sender] = User({
            email: email,
            passwordHash: passwordHash
        });

        emit UserRegistered(msg.sender, email);
    }

    // Function to change a user's password
    function changePassword(bytes32 newPasswordHash) external {
        require(users[msg.sender].passwordHash != 0, "User does not exist!");

        users[msg.sender].passwordHash = newPasswordHash;
        emit PasswordChanged(msg.sender);
    }

    // This is a private function to check password strength
    // Solidity is not suited for string manipulation & this should be done off-chain
    function isPasswordStrong(string memory password) private pure returns (bool) {
        // Pseudo-code for password strength check
        // This should be done in your web application, not in Solidity
        return bytes(password).length >= 10; // Simplified check, just an example
    }

    // Add other necessary functions and modifiers as needed
}
