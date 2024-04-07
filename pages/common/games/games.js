function initGames(){
    const videoContainers = document.querySelectorAll('#games-video');

    videoContainers.forEach(videoContainer => {
        const videoId =  'ZotSsxpzass'
        let videoElementTemplate = null;
     

        videoContainer.addEventListener('mouseenter', function() {
            let videoElement = videoContainer.querySelector('iframe');

            videoElementTemplate = document.createElement('iframe');
            videoElementTemplate.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&controls=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0`);
            videoElementTemplate.setAttribute('frameborder', '0');
            videoElementTemplate.setAttribute('allowfullscreen', 'true');
            videoElementTemplate.setAttribute('allow', 'autoplay');
            videoElementTemplate.style.width = '100%';
            videoElementTemplate.style.height = '100%';


            if (videoElement == null) {

                videoContainer.appendChild(videoElementTemplate);
            }
        });

        videoContainer.addEventListener('mouseleave', function() {
            let videoElement = videoContainer.querySelector('iframe');
            
            if (videoElement) {


                videoElement.style.opacity = 1;
                // videoElement.parentNode.removeChild(videoElement);
                // videoElement = null;
            }
        });
    });
    
   
}