document.addEventListener('DOMContentLoaded', function () {
    const youtubePlayer = document.getElementById('youtube-player');
    const playlist = document.getElementById('playlist');

    // Replace 'YOUR_PLAYLIST_ID' with the actual playlist ID from the YouTube URL
    const playlistId = 'PLbs2o4wLYkCop-PpuT4JVwDFfyfml76vO';
    const apiKey = 'AIzaSyC_W90vNuhVHaMOdtlUfGolVNXdhr0s26Y';

    fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Reverse the order of the videos
            const reversedItems = data.items.reverse();

            reversedItems.forEach(item => {
                const videoId = item.snippet.resourceId.videoId;
                const videoTitle = item.snippet.title;

                const listItem = document.createElement('li');
                listItem.setAttribute('data-video-id', videoId);
                listItem.textContent = videoTitle;

                playlist.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching playlist:', error));

    playlist.addEventListener('click', function (event) {
        if (event.target.tagName === 'LI') {
            // Remove the 'active' class from all list items
            playlist.querySelectorAll('li').forEach(item => {
                item.classList.remove('active');
            });

            const videoId = event.target.getAttribute('data-video-id');
            const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
            youtubePlayer.src = youtubeEmbedUrl;

            // Add the 'active' class to the clicked list item
            event.target.classList.add('active');
        }
    });
});
