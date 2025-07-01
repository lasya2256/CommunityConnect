// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InteractiveCourse {
    
    mapping(address => uint) public scores;

    // Define the course with a unique ID
    struct Course {
        uint id;
        string name;
        uint reward;
    }

    // A list of all courses
    Course[] public courses;

    // Event that is emitted when a user completes a course
    event CourseCompleted(address user, uint courseID, uint score);

    // Function to add a new course
    function addCourse(string memory _name, uint _reward) external {
        courses.push(Course({
            id: courses.length,
            name: _name,
            reward: _reward
        }));
    }

    // Function to mark course as completed
    function completeCourse(uint _courseID, uint _score) external {
        require(_courseID < courses.length, "Course does not exist");
        scores[msg.sender] += _score;
        emit CourseCompleted(msg.sender, _courseID, _score);
        // Logic to award tokens or other rewards
    }
}
