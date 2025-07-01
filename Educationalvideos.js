// First, initialize the ethers.js contract object
const contract = new ethers.Contract(contractAddress, contractABI, signer);

// Function to call the rewardUser function of the smart contract
async function grantReward(userAddress, rewardAmount) {
    try {
        const tx = await contract.rewardUser(userAddress, rewardAmount);
        await tx.wait();
        console.log(`User rewarded: ${userAddress} with amount: ${rewardAmount}`);
    } catch (error) {
        console.error(error);
    }
}

// Listen for video end event using YouTube Iframe API or another method
document.getElementById('video-player').addEventListener('ended', function() {
    // Assuming you have validated the user watched the whole video
    // and have their blockchain address and defined reward amount
    grantReward(userBlockchainAddress, rewardAmount);
});

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for play buttons if necessary
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const video = this.nextElementSibling; // Assuming the video element is right after the button
            if (video.tagName === 'IFRAME') {
                // Here I coan control the video playback, depending on the video service's API
                // For YouTube, you would use the YouTube IFrame Player API
            }
        });
    });
});
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100',
        width: '100',
        videoId: 'YOUR_VIDEO_ID',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // Bind event to your custom play button
    document.getElementById('my-play-button').addEventListener('click', function() {
        event.target.playVideo();
    });
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        // The video is playing
    }
}
function scrollLeft() {
    var slider = document.getElementById('video-slider');
    slider.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll value as needed
  }
  
  function scrollRight() {
    var slider = document.getElementById('video-slider');
    slider.scrollBy({ left: 300, behavior: 'smooth' }); // Adjust the scroll value as needed
  }  
  