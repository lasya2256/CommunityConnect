document.getElementById('submit-new-discussion').addEventListener('click', function() {
    const title = document.getElementById('new-discussion-title').value.trim();
    const content = document.getElementById('new-discussion-content').value.trim();
    
    if (title !== '' && content !== '') {
        // Now you call a function to handle the submission to the blockchain
        submitDiscussionToBlockchain(title, content);
    } else {
        alert('Please enter both a title and content for your discussion.');
    }
});

function submitDiscussionToBlockchain(title, content) {
    // Simulate adding the discussion to the list for now
    // You will need to replace this with actual blockchain interaction code
    console.log('Discussion submitted to blockchain:', title, content);
}
