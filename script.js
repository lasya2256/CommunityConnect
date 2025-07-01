const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-btn");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");
const passwordInput = document.getElementById("password"); // Ensure your password input has an id="password"
const strengthText = document.getElementById("password-strength"); // Add an element with id="password-strength" to show the password strength

// Show mobile menu
hamburgerBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
});

// Hide mobile menu
hideMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Show login popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide login popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

// Show or hide signup form
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});

// Password strength logic
passwordInput.addEventListener('input', function(e) {
    const password = e.target.value;
    const strength = getPasswordStrength(password);
    
    if (strengthText) {
        strengthText.textContent = strength;
        strengthText.style.color = {
            'Weak': 'red',
            'Moderate': 'orange',
            'Strong': 'green'
        }[strength] || 'black';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const navbarMenu = document.querySelector(".navbar .links");
    console.log(navbarMenu);
});
// Path: script.js
        document.addEventListener('DOMContentLoaded', async () => {
            const UserAuthContractAddress = "0x86030dd432EE01c7Cf5bFEDbCeE8ad2E12f9E453";
            const UserAuthABI = [
                {
                    "inputs": [
                        {
                            "internalType": "bytes32",
                            "name": "newPasswordHash",
                            "type": "bytes32"
                        }
                    ],
                    "name": "changePassword",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "userAddress",
                            "type": "address"
                        }
                    ],
                    "name": "PasswordChanged",
                    "type": "event"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "email",
                            "type": "string"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "passwordHash",
                            "type": "bytes32"
                        }
                    ],
                    "name": "registerUser",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "internalType": "address",
                            "name": "userAddress",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "internalType": "string",
                            "name": "email",
                            "type": "string"
                        }
                    ],
                    "name": "UserRegistered",
                    "type": "event"
                }
            ];

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const UserAuth = new ethers.Contract(UserAuthContractAddress, UserAuthABI, signer);

            async function registerUser(email, password) {
                const passwordHash = ethers.utils.id(password);
                const tx = await UserAuth.registerUser(email, passwordHash);
                await tx.wait();
                console.log('Registration successful');
            }

            async function changePassword(newPassword) {
                const newPasswordHash = ethers.utils.id(newPassword);
                const tx = await UserAuth.changePassword(newPasswordHash);
                await tx.wait();
                console.log('Password change successful');
            }
            await init();
        });