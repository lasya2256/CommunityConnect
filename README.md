# Community Connect

Community Connect is a blockchain-based platform designed to foster secure, transparent, and engaging community interactions. The project enables users to register and authenticate using smart contracts, join or create interest-based groups, participate in discussions, access educational resources (including interactive courses and videos), and earn token rewards for learning and engagement. By leveraging decentralized technology, Community Connect empowers communities to collaborate, share knowledge, and grow in a trusted digital environment.

---

## Features

- **Blockchain Authentication:** Secure user registration and login via Ethereum smart contracts.
- **Community Groups:** Create, search, and join groups across a wide range of categories.
- **Discussion Forums:** Participate in and create topic-driven discussions.
- **Resource Center:** Access interactive courses, educational videos, and downloadable study materials.
- **Token Rewards:** Earn tokens for completing courses, watching videos, or contributing to the community.
- **User Profiles:** Manage your profile, upload avatars (IPFS support), and update passwords securely.
- **Event Announcements:** Stay informed about community events and updates.

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Blockchain:** Ethereum, Solidity (Truffle framework), Metamask
- **Smart Contract Interaction:** web3.js, ethers.js
- **Decentralized Storage:** IPFS (for profile images)
- **UI Frameworks:** Materialize CSS, Bootstrap

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Truffle](https://trufflesuite.com/) (`npm install -g truffle`)
- [MetaMask](https://metamask.io/) (browser extension)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/lasya2256/Credit.git
   cd Credit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start a local blockchain (e.g., Ganache):**
   - Install Ganache: [https://trufflesuite.com/ganache/](https://trufflesuite.com/ganache/)
   - Start Ganache on port 7545.

4. **Deploy smart contracts:**
   ```bash
   truffle migrate --network development
   ```

5. **Serve the frontend:**
   - Open `index.html` in your browser **OR**
   - Use a local server:
     ```bash
     npx serve .
     ```
   - Make sure MetaMask is connected to your local blockchain.

---

## Usage

- Register or log in via the homepage.
- Join or create community groups.
- Participate in discussions and forums.
- Access resources and earn token rewards.
- Update your profile and upload avatars using IPFS.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## License

This project is licensed under the MIT License.
