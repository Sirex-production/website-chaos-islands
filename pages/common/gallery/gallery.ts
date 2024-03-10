import $ from 'jquery';
function initGallery() : void{

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            const videoElement = entry.target as HTMLVideoElement;

            if (entry.isIntersecting) {
                videoElement.play();
            } 
            else {
                videoElement.pause();
            }
        });
    });

    const galleryVideoElements = document.querySelectorAll('.gallery-video');

    galleryVideoElements.forEach(videoElement => {
        observer.observe(videoElement);

        $(videoElement)
        .on('mouseenter', function() {
            (this as HTMLVideoElement).pause();
        })
        .on('mouseleave', function() {
            (this as HTMLVideoElement).play();
        });
    });
}