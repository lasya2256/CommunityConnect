import dApp from './dApp.js';

async function loadCourses() {
    try {
        const courseCount = await dApp.InteractiveCourse.methods.courses.length().call();
        for (let i = 0; i < courseCount; i++) {
            const course = await dApp.InteractiveCourse.methods.courses(i).call();
            displayCourse(course, i);
        }
    } catch (error) {
        console.error('Could not load courses:', error);
    }
}

function startCourse(courseID) {
    alert(`Course ${courseID} started!`);
}

// Event listener for starting a course
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('start-course')) {
        const courseId = event.target.getAttribute('data-course-id');
        startCourse(courseId);
    }
});

function displayCourse(course, index) {
    const courseList = document.getElementById('course-list');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course';
    courseDiv.innerHTML = `
        <h2>${course.name}</h2>
        <button id="completeButton-${index}">Complete Course</button>
    `;
    courseList.appendChild(courseDiv);
    
    // Attach an event listener to the button
    const completeButton = document.getElementById(`completeButton-${index}`);
    completeButton.addEventListener('click', () => completeCourse(index, course.reward));
}

async function completeCourse(courseID, score) {
    try {
        const tx = await dApp.InteractiveCourse.methods.completeCourse(courseID, score).send({ from: dApp.account });
        alert(`Course ${courseID} completed with score: ${score}`);
        // Update the UI to reflect the completion
    } catch (error) {
        console.error('Error completing course:', error);
        // Handle errors in a user-friendly way
    }
}

// Initialize dApp and load courses
(async function initializeAndLoad() {
    try {
        await dApp.initializeWeb3();
        await loadCourses();
    } catch (error) {
        console.error('DApp initialization failed:', error);
        // Handle initialization errors in a user-friendly way
    }
})();

const courses = [
    { id: 1, name: "Course 1", reward: 10 },
    { id: 2, name: "Course 2", reward: 20 },
    { id: 3, name: "Course 3", reward: 15 }
];

// Function to display courses
function displayCourses() {
    const courseList = document.getElementById('course-list');
    courseList.innerHTML = ''; // Clear previous content

    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course card mb-3';
        courseDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${course.name}</h5>
                <button class="btn btn-primary complete-course" data-course-id="${course.id}" data-reward="${course.reward}">Complete Course</button>
            </div>
        `;
        courseList.appendChild(courseDiv);
    });
}

// Function to handle completing a course
function completeCourse(courseID, reward) {
    // Assume functionality to reward tokens here
    // For now, let's just alert the reward
    alert(`Course ${courseID} completed! You've been rewarded ${reward} tokens.`);
}

// Event listener for completing a course
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-course')) {
        const courseId = event.target.getAttribute('data-course-id');
        const reward = event.target.getAttribute('data-reward');
        completeCourse(courseId, reward);
    }
});

// Function to display token balance
function displayTokenBalance(balance) {
    const tokenBalance = document.getElementById('token-balance');
    tokenBalance.textContent = `Token Balance: ${balance}`;
}

// Function to spend tokens
function spendTokens() {
    // Assume functionality to spend tokens here
    // For now, let's just alert a message
    alert('Tokens spent successfully!');
}

// Event listener for spending tokens
const spendTokenBtn = document.getElementById('spend-token-btn');
spendTokenBtn.addEventListener('click', spendTokens);

// Initial function call to display courses
displayCourses();
// Sample token balance
displayTokenBalance(100); // Update with actual balance from backend

document.addEventListener("DOMContentLoaded", function() {
    const startCourseButton = document.querySelector('.start-course');
    const courseDetails = document.getElementById('course-details');

    startCourseButton.addEventListener('click', function() {
        const courseId = this.getAttribute('data-course-id');
        loadCourse(courseId);
    });

    function loadCourse(courseId) {
        // Placeholder: Simulated fetching of course data
        const courseData = {
            1: {
                title: "Welcome to the Blockchain Revolution",
                lessons: [
                    { id: 1, title: "Welcome to the Blockchain Revolution", description: "In this lesson you are introduced to the Blockchain Revolution and get an overview of the Blockchain Developer..." },
                    { id: 2, title: "Get Help with Your Account", description: "What to do if you have questions about your account or general questions about the program." },
                    { id: 3, title: "Getting Help", description: "You are starting a challenging but rewarding journey! Take 5 minutes to read how to get help with projects an..." }
                ]
            }
        };

        if (courseData[courseId]) {
            updateUIWithCourseDetails(courseData[courseId]);
        }
    }

    function updateUIWithCourseDetails(course) {
        courseDetails.innerHTML = ''; // Clear existing details
        const courseTitle = document.createElement('h1');
        courseTitle.textContent = course.title;
        courseDetails.appendChild(courseTitle);

        course.lessons.forEach(lesson => {
            const lessonDiv = document.createElement('div');
            lessonDiv.classList.add('lesson', 'card', 'mb-3');

            const lessonTitle = document.createElement('h3');
            lessonTitle.textContent = lesson.title;
            lessonDiv.appendChild(lessonTitle);

            const lessonDescription = document.createElement('p');
            lessonDescription.textContent = lesson.description;
            lessonDiv.appendChild(lessonDescription);

            courseDetails.appendChild(lessonDiv);
        });
    }
});
