import $ from 'jquery';
 
 $(() => {
    const movingImage = $('#jumbotron-moving-image');
    const container = $('.jumbotron-container');

    // Mouse  
    container.on('mousemove', (e) => {
        let offset = container.offset();

        if (offset) {
            let x = e.clientX - offset.left;
            let y = e.clientY - offset.top;

            moveImage(x, y);
        }
    });

    container.on('mouseleave', () => {
        resetImage();
    });

    // Gyroscope  
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleOrientation);
    }

    function handleOrientation(event: DeviceOrientationEvent) {
        let x = event.beta ?? 0;  
        let y = event.gamma ?? 0;  

        let normX = (x / 45) * 10;
        let normY = (y / 45) * 10;

        moveImage(normX, normY);
    }

    function moveImage(x: number, y: number) {
        let offset = container.offset();

        if (offset) {
            let centerX = container.width()! / 2;
            let centerY = container.height()! / 2;

            let moveX = (x - centerX) / 10;
            let moveY = (y - centerY) / 10;

            movingImage.css('transform', `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`);
        }
    }

    function resetImage() {
        movingImage.css('transform', 'translate(-50%, -50%)');
    }
});