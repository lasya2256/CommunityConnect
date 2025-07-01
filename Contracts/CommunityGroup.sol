// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CommunityGroup {

    struct Group {
        string name;
        string description;
        address[] members;
    }

    Group[] public groups;

    // Create a new group
    function createGroup(string memory _name, string memory _description) public {
        Group memory newGroup = Group({
            name: _name,
            description: _description,
            members: new address[](0)
        });
        groups.push(newGroup);
    }

    // Join a group
    function joinGroup(uint _groupId) public {
        require(_groupId < groups.length, "Group does not exist.");
        Group storage group = groups[_groupId];
        
        // Check that the user isn't already a member
        for (uint i = 0; i < group.members.length; i++) {
            require(group.members[i] != msg.sender, "Already a member.");
        }

        // Add the user to the group's members
        group.members.push(msg.sender);
    }

    // Get group information
    function getGroup(uint _groupId) public view returns (string memory, string memory, address[] memory) {
        require(_groupId < groups.length, "Group does not exist.");
        Group memory group = groups[_groupId];
        return (group.name, group.description, group.members);
    }
    
    // Additional functions like leaveGroup, deleteGroup, etc. could also be added
}
