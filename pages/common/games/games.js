function initGames(){
    const videoContainers = document.querySelectorAll('#games-video');

    videoContainers.forEach(videoContainer => {
        const videoId =  'ZotSsxpzass'
        let videoElement = null;

        videoContainer.addEventListener('mouseenter', function() {
            
            if (!videoElement) {
                videoElement = document.createElement('iframe');
                videoElement.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&controls=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0`);
                videoElement.setAttribute('frameborder', '0');
                videoElement.setAttribute('allowfullscreen', 'true');
                videoElement.setAttribute('allow', 'autoplay');
                videoElement.style.width = '100%';
                videoElement.style.height = '100%';
                videoContainer.appendChild(videoElement);
            }
        });

        videoContainer.addEventListener('mouseleave', function() {
            if (videoElement) {


                videoElement.style.opacity = 1;
                // videoElement.parentNode.removeChild(videoElement);
                // videoElement = null;
            }
        });
    });
    
   
}