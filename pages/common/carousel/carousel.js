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
      const carousel = document.querySelector(".slider-wrapper");
      const arrowLeft = document.querySelector("#slider-prev");
      const arrowRight = document.querySelector("#slider-next");
      const images = document.querySelectorAll('.slider-soft-image');

      let isDragging = false, prevPageX, prevScrollLeft;

      //touch
      carousel.addEventListener("touchstart", function(e) {
        isDragging = true;
        prevScrollLeft = carousel.scrollLeft;
        prevPageX = e.touches[0].pageX;  
      });
      
      carousel.addEventListener("touchmove", function(e) {
        if (!isDragging)
            return;
    
        let deltaPos = e.touches[0].pageX - prevPageX;
        e.preventDefault();
        carousel.classList.add('dragging');
        carousel.scrollLeft = prevScrollLeft - deltaPos;
    
      });

      carousel.addEventListener("touchend", function(e) {
        isDragging = false;
        carousel.classList.remove('dragging');
      });

      //mouse
      carousel.addEventListener("mouseup", function(e){
        isDragging = false;
        carousel.classList.remove('dragging')

        setTimeout(()=>{
          if(isDragging)
            return;

            centerImage();
        }, 350)
      });

      carousel.addEventListener("mousedown", function(e){
        isDragging = true;
        prevScrollLeft = carousel.scrollLeft
        prevPageX = e.pageX
      });

      carousel.addEventListener("mousemove", function(e){
        if(!isDragging)
          return;

        let deltaPos = e.pageX - prevPageX;
        e.preventDefault();
        carousel.classList.add('dragging')
        carousel.scrollLeft = prevScrollLeft - deltaPos

       
        
      });

      //universal
      arrowLeft.addEventListener("click", function(){
        const middleImageIndex = getMiddleImageIndex();
        const middleImage = images[middleImageIndex];
        const middleImageRect = middleImage.getBoundingClientRect();
        const targetScrollLeft = carousel.scrollLeft - middleImageRect.width;
        

        if(middleImageIndex == 1){
          return;
        }
     
        setTimeout(() => {
            carousel.scrollLeft = targetScrollLeft;
        }, 200);
      })  

      arrowRight.addEventListener("click", function(){
        const middleImageIndex = getMiddleImageIndex();
        const middleImage = images[middleImageIndex];
        const middleImageRect = middleImage.getBoundingClientRect();
        const targetScrollLeft = carousel.scrollLeft + middleImageRect.width;
    
        if(middleImageIndex == images.length - 2){
          return;
        }
        setTimeout(() => {
            carousel.scrollLeft = targetScrollLeft;
        }, 200);
      })


      function getMiddleImageIndex() {
        const slider = document.querySelector('.slider-wrapper');
       
        const sliderRect = slider.getBoundingClientRect();
        const sliderScrollLeft = slider.scrollLeft;
        const sliderMiddleX = sliderScrollLeft + (sliderRect.width / 2);
    
        let middleImageIndex = -1;
        let minDistance = Infinity;
    
        images.forEach((image, index) => {
            const imageRect = image.getBoundingClientRect();
            const imageMiddleX = imageRect.left + (imageRect.width / 2);
             
            const distance = Math.abs(imageMiddleX - sliderRect.left - (sliderRect.width / 2));
            if (distance < minDistance) {
                minDistance = distance;
                middleImageIndex = index;
            }
        });
    
        return middleImageIndex;
      } 
  
      function scaleMiddleImage() {
        const middleImageIndex = getMiddleImageIndex();
        
        images.forEach((image, index) => {
            if (index === middleImageIndex) {
                
                image.style.transform = 'scale(1)'; 
                image.style.opacity = '1';
            } else {
                image.style.transform = 'scale(0.6)';  
                image.style.opacity = '0.7';
            }

            
            if(index == 0 || index == images.length-1 ){
              image.style.opacity = '0.0';
            }
        });
      }

      function centerImage(){
        const middleImageIndex = getMiddleImageIndex();
        const middleImage = images[middleImageIndex];
        const middleImageRect = middleImage.getBoundingClientRect();
        const targetScrollLeft = carousel.scrollLeft + middleImageRect.left - (carousel.offsetWidth / 2) + (middleImageRect.width / 2);

        carousel.scrollLeft = targetScrollLeft;

        prevPageX = e.pageX;
      }


      setInterval(()=>scaleMiddleImage(),10)
    }
    



    initSlider();
}
 
