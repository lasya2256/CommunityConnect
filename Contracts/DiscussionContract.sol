// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DiscussionContract {
    struct Discussion {
        address creator;
        string title;
        string content;
        uint256 createdAt;
    }

    struct Comment {
        address commentator;
        string content;
        uint256 createdAt;
    }

    Discussion[] public discussions;
    mapping(uint256 => Comment[]) public comments;

    function createDiscussion(string calldata title, string calldata content) external {
        discussions.push(Discussion({
            creator: msg.sender,
            title: title,
            content: content,
            createdAt: block.timestamp
        }));
    }

    function commentOnDiscussion(uint256 discussionId, string calldata content) external {
        comments[discussionId].push(Comment({
            commentator: msg.sender,
            content: content,
            createdAt: block.timestamp
        }));
    }

    function getDiscussions() external view returns (Discussion[] memory) {
        return discussions;
    }

    function getComments(uint256 discussionId) external view returns (Comment[] memory) {
        return comments[discussionId];
    }
}
