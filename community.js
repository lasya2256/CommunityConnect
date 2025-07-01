document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('group-search');
    const searchButton = document.querySelector('#search-container button[type="submit"]');
    const createGroupBtn = document.getElementById('createGroupBtn');
    const createGroupModal = document.getElementById('createGroupModal');
    const closeBtn = createGroupModal.querySelector('.close');

    // Function to show the modal
    function showModal() {
        createGroupModal.style.display = 'block';
    }

    // Function to hide the modal
    function hideModal() {
        createGroupModal.style.display = 'none';
    }

    // Show the modal when the 'Create Group' button is clicked
    createGroupBtn.addEventListener('click', showModal);

    // Hide the modal when the close button (x) is clicked
    closeBtn.addEventListener('click', hideModal);

    // Hide the modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === createGroupModal) {
            hideModal();
        }
    });

    // Prevent form from actually submitting and refreshing the page
    const createGroupForm = document.getElementById('createGroupForm');
    createGroupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Here you would normally handle the form submission, like sending data to a server
        // For now, we'll just hide the modal to simulate form submission
        hideModal();
        alert('Group created! (This is just a simulation)');
    });

    function clearHighlights() {
        document.querySelectorAll('.highlight').forEach((highlight) => {
            highlight.parentNode.innerHTML = highlight.parentNode.textContent; // Revert back to original text
        });
    }

    function highlightText(card, searchTerm) {
        const text = card.textContent;
        const regEx = new RegExp(`(${searchTerm})`, 'gi');
        const newText = text.replace(regEx, `<span class="highlight">$1</span>`);
        card.innerHTML = newText;
    }

    searchButton.addEventListener('click', () => {
        clearHighlights(); // Clear previous highlights

        const searchTerm = searchInput.value.trim();
        if (!searchTerm) {
            alert('Please enter a search term.');
            return;
        }

        const groupNames = document.querySelectorAll('.group-card .group-name');
        let found = false;
        groupNames.forEach((nameSpan) => {
            if (nameSpan.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
                highlightText(nameSpan, searchTerm);
                if (!found) {
                    nameSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    found = true;
                }
            }
        });

        if (!found) {
            alert('Group not found.');
        }
    });
});
