document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.media-share-button');

    // Function to create and insert modal into DOM
    function createVideoModal(videoUrl) {
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-content">
                <span class="video-modal-close">&times;</span>
                <iframe src="${videoUrl}" width="560" height="315" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Event to close the modal
        modal.querySelector('.video-modal-close').addEventListener('click', function() {
            modal.remove();
        });

        // Stop video on close
        modal.addEventListener('click', function(e) {
            if (e.target.className === 'video-modal') {
                const iframe = modal.querySelector('iframe');
                iframe.src = iframe.src;
                modal.remove();
            }
        });
    }

    // Event listener for button click to open modal
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const videoUrl = this.getAttribute('data-video-url');
            if (videoUrl) {
                createVideoModal(videoUrl);
            }
        });
    });
});
