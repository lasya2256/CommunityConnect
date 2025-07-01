const Web3 = require('web3');
const UserAuthABI = ('./UserAuth.json');
const CommunityGroupABI = ('./CommunityGroup.json');
const DiscussionContractABI = ('./DiscussionContract.json');
const EducationalVideosContractABI = ('./EducationalVideosContract.json');
const InteractiveCourseABI = ('./InteractiveCourse.json');

class DApp {
  constructor() {
    this.web3 = null;
    this.account = null;
    this.UserAuth = null;
    this.CommunityGroup = null;
    this.DiscussionContract = null;
    this.EducationalVideosContract = null;
    this.InteractiveCourse = null;
  }

  async initializeWeb3() {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable(); // Request access to account
        const accounts = await this.web3.eth.getAccounts();
        if (accounts.length === 0) {
          alert('No access to accounts.');
          return;
        }
        this.account = accounts[0];
        this.initializeContracts();
      } catch (error) {
        console.error("Web3 initialization error:", error);
      }
    } else {
      alert('Ethereum wallet is not detected. Please install MetaMask.');
    }
  }

  initializeContracts() {
    const UserAuthAddress = '0xE748672C627823a04609D6c3F325c3685dd4F2fA';
    const CommunityGroupAddress = '0xb2AeE96C423A37f45c4a6Dd60B38CC78448C134A';
    const DiscussionContractAddress = '0x5087187c0eCe02C761dA2217f925270c63850872';
    const EducationalVideosContractAddress = '0x7521B343FadABF9d2eC14fff909Dcae42d427226';
    const InteractiveCourseAddress = '0xDdE81F5A34a7902340a92A48c84CED6D2535ce9B';

    this.UserAuth = new this.web3.eth.Contract(UserAuthABI, UserAuthAddress);
    this.CommunityGroup = new this.web3.eth.Contract(CommunityGroupABI, CommunityGroupAddress);
    this.DiscussionContract = new this.web3.eth.Contract(DiscussionContractABI, DiscussionContractAddress);
    this.EducationalVideosContract = new this.web3.eth.Contract(EducationalVideosContractABI, EducationalVideosContractAddress);
    this.InteractiveCourse = new this.web3.eth.Contract(InteractiveCourseABI, InteractiveCourseAddress);
  }
}

const dApp = new DApp();
dApp.initializeWeb3().then(() => {
  console.log('DApp is initialized and ready.');
}).catch(error => {
  console.error('Failed to initialize the DApp:', error);
});
module.exports = dApp;
