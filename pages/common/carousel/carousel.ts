"use strict";

 
import $ from 'jquery';
function initCarousel(): void {
    const fan: JQuery<HTMLElement> = $('#windmill-fan');
    let minSpeedDuration: number = 12;
    let maxSpeedDuration: number = 15;
    // milliseconds
    let deltaTime: number = 10;
    let step: number = 0.05;
    let animationInterval: ReturnType<typeof setInterval> | null;
    let currentDuration: number;
    let delay: ReturnType<typeof setTimeout>  | null;

    fan.on('click', function (): void {
        if (animationInterval !== null)
            return;

        if (delay !== null)
            return;

        currentDuration = maxSpeedDuration;

        animationInterval = setInterval(() => {
            currentDuration -= step;
            fan.css('animation-duration', `${currentDuration}s`);

            if (currentDuration <= minSpeedDuration) {
                if(animationInterval!=null)
                    clearInterval(animationInterval);
                animationInterval = null;

                delay = setTimeout(() => {
                    slowDownAnimation();
                    delay = null;
                }, 3000);
            }

        }, deltaTime)
    });

    function slowDownAnimation(): void {
        return;
        animationInterval = setInterval(() => {
            currentDuration += step;
            fan.css('animation-duration', `${currentDuration}s`);

            if (currentDuration >= maxSpeedDuration) {
                if(animationInterval!=null)
                    clearInterval(animationInterval);
                animationInterval = null;
            }

        }, deltaTime);
    }

    function initSlider(): void {
        const carousel: HTMLElement | null = document.querySelector(".slider-wrapper");
        const arrowLeft: HTMLElement | null = document.querySelector("#slider-prev");
        const arrowRight: HTMLElement | null = document.querySelector("#slider-next");
        const images: NodeListOf<HTMLElement> = document.querySelectorAll('.slider-soft-image');

        let isDragging: boolean = false, prevPageX: number, prevScrollLeft: number;

        // touch
        if (carousel) {
            carousel.addEventListener("touchstart", function (e: TouchEvent): void {
                isDragging = true;
                prevScrollLeft = carousel.scrollLeft;
                prevPageX = e.touches[0].pageX;
            });

            carousel.addEventListener("touchmove", function (e: TouchEvent): void {
                if (!isDragging)
                    return;

                let deltaPos: number = e.touches[0].pageX - prevPageX;
                e.preventDefault();
                if (carousel.classList)
                    carousel.classList.add('dragging');
                if (carousel.scrollLeft)
                    carousel.scrollLeft = prevScrollLeft - deltaPos;
            });

            carousel.addEventListener("touchend", function (): void {
                isDragging = false;
                if (carousel.classList)
                    carousel.classList.remove('dragging');
            });
        }

        // mouse
        if (carousel) {
            carousel.addEventListener("mouseup", function (e: MouseEvent): void {
                isDragging = false;
                if (carousel.classList)
                    carousel.classList.remove('dragging')

                setTimeout(() => {
                    if (isDragging)
                        return;

                    centerImage(e);
                }, 350);
            });

            carousel.addEventListener("mousedown", function (e: MouseEvent): void {
                isDragging = true;
                prevScrollLeft = carousel.scrollLeft;
                prevPageX = e.pageX;
            });

            carousel.addEventListener("mousemove", function (e: MouseEvent): void {
                if (!isDragging)
                    return;

                let deltaPos: number = e.pageX - prevPageX;
                e.preventDefault();
                if (carousel.classList)
                    carousel.classList.add('dragging')
                if (carousel.scrollLeft)
                    carousel.scrollLeft = prevScrollLeft - deltaPos;
            });
        }

        // universal
        if (arrowLeft) {
            arrowLeft.addEventListener("click", function (): void {
                const middleImageIndex: number = getMiddleImageIndex();
                const middleImage: HTMLElement | undefined = images[middleImageIndex];
                if (!middleImage) return;
                const middleImageRect: DOMRect = middleImage.getBoundingClientRect();
                const targetScrollLeft: number = (carousel?.scrollLeft || 0) - middleImageRect.width;

                if (middleImageIndex === 1) {
                    return;
                }

                setTimeout(() => {
                    if (carousel)
                        carousel.scrollLeft = targetScrollLeft;
                }, 200);
            });
        }

        if (arrowRight) {
            arrowRight.addEventListener("click", function (): void {
                const middleImageIndex: number = getMiddleImageIndex();
                const middleImage: HTMLElement | undefined = images[middleImageIndex];
                if (!middleImage) return;
                const middleImageRect: DOMRect = middleImage.getBoundingClientRect();
                const targetScrollLeft: number = (carousel?.scrollLeft || 0) + middleImageRect.width;

                if (middleImageIndex === images.length - 2) {
                    return;
                }
                setTimeout(() => {
                    if (carousel)
                        carousel.scrollLeft = targetScrollLeft;
                }, 200);
            });
        }

        function getMiddleImageIndex(): number {
            const slider: HTMLElement | null = document.querySelector('.slider-wrapper');
            if (!slider) return -1;

            const sliderRect: DOMRect = slider.getBoundingClientRect();
            const sliderScrollLeft: number = slider.scrollLeft;
            const sliderMiddleX: number = sliderScrollLeft + (sliderRect.width / 2);

            let middleImageIndex: number = -1;
            let minDistance: number = Infinity;

            images.forEach((image: HTMLElement, index: number) => {
                const imageRect: DOMRect = image.getBoundingClientRect();
                const imageMiddleX: number = imageRect.left + (imageRect.width / 2);

                const distance: number = Math.abs(imageMiddleX - sliderRect.left - (sliderRect.width / 2));
                if (distance < minDistance) {
                    minDistance = distance;
                    middleImageIndex = index;
                }
            });

            return middleImageIndex;
        }

        function scaleMiddleImage(): void {
            const middleImageIndex: number = getMiddleImageIndex();

            images.forEach((image: HTMLElement, index: number) => {
                if (index === middleImageIndex) {
                    image.style.transform = 'scale(1)';
                    image.style.opacity = '1';
                } else {
                    image.style.transform = 'scale(0.6)';
                    image.style.opacity = '0.7';
                }

                if (index === 0 || index === images.length - 1) {
                    image.style.opacity = '0.0';
                }
            });
        }

        function centerImage(e: MouseEvent): void {
            const middleImageIndex: number = getMiddleImageIndex();
            const middleImage: HTMLElement | undefined = images[middleImageIndex];
            if (!middleImage) return;
            const middleImageRect: DOMRect = middleImage.getBoundingClientRect();
            const targetScrollLeft: number = (carousel?.scrollLeft || 0) + middleImageRect.left - (carousel?.offsetWidth || 0) / 2 + (middleImageRect.width / 2);

            if (carousel)
                carousel.scrollLeft = targetScrollLeft;

            prevPageX = e.pageX;
        }

        setInterval(() => scaleMiddleImage(), 10);
    }

    initSlider();
}
