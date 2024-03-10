"use strict";
 
function initCarousel() {


    var fan = $('#windmill-fan');
    let minSpeedDuration = 12;
    let maxSpeedDuration = 15;
    //miliseconds
    let deltaTime = 10; 
    let step =  0.05;
    let animationInterval;
    let currentDuration;
    let delay;
    fan.on('click', function () {
      
        if(animationInterval !=null)
            return;

        if(delay !=null)
            return;

        currentDuration = maxSpeedDuration;

        animationInterval = setInterval(()=>{



            currentDuration -= step;

            fan.css('animation-duration', `${currentDuration}s`);
            
            if(currentDuration <= minSpeedDuration){
                clearInterval(animationInterval)
                animationInterval = null;

                delay = setTimeout(() => {
                    slowDownAnimation();
                    delay = null;
                  }, 3000);
            }

          },deltaTime)
    });

   
 
    function slowDownAnimation() {

        return;
        animationInterval = setInterval(()=>{

            currentDuration += step;
            fan.css('animation-duration', `${currentDuration}s`);

            if(currentDuration >= maxSpeedDuration){
                clearInterval(animationInterval)
                animationInterval = null;
            }

        },deltaTime);

 
    }


    function initSlider(){

        document.addEventListener('DOMContentLoaded', function() {
            let carousel = document.querySelector('#multiItemCarousel');
            let carouselItems = carousel.querySelectorAll('.carousel-item');
            let currentIndex = 0;
        
            carousel.addEventListener('click', function(event) {
              let target = event.target;
              let isPrevButton = target.classList.contains('carousel-control-prev');
              let isNextButton = target.classList.contains('carousel-control-next');
        
              if (isPrevButton || isNextButton) {
                currentIndex = isNextButton ? (currentIndex + 1) % carouselItems.length : (currentIndex - 1 + carouselItems.length) % carouselItems.length;
                updateCarousel();
              }
            });
        
            function updateCarousel() {
              carouselItems.forEach((item, index) => {
                let isActive = (index === currentIndex);
                item.classList.toggle('active', isActive);
              });
            }
          });
    }
    
    initSlider();
}
 
