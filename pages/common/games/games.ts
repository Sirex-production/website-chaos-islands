import $ from 'jquery';

function initGames() {
    const videoContainers = $('#games-video');

    videoContainers.each(function() {
        const videoId = 'ZotSsxpzass';
        let videoElement: HTMLIFrameElement | null = null;

        $(this).on('mouseenter', function() {
            if (!videoElement) {
                videoElement = document.createElement('iframe');
                videoElement.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&controls=1&enablejsapi=1&modestbranding=1&rel=0&showinfo=0`);
                videoElement.setAttribute('frameborder', '0');
                videoElement.setAttribute('allowfullscreen', 'true');
                videoElement.setAttribute('allow', 'autoplay');
                videoElement.style.width = '100%';
                videoElement.style.height = '100%';
                $(this).append(videoElement);
            }
        });

        $(this).on('mouseleave', function() {
            if (videoElement) {
                videoElement.style.opacity = '1';
            }
        });
    });
}

 
