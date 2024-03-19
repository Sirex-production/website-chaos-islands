"use strict";
 
function initCarousel() {


    var fan = $('#windmill-fan');
    let minSpeedDuration = 12;
    let maxSpeedDuration = 15;
 
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
      const carouselBody = document.querySelector(".slider-body");
      const arrowLeft = document.querySelector("#slider-prev");
      const arrowRight = document.querySelector("#slider-next");
      const images = document.querySelectorAll('.slider-soft-image');
      const carouselText = document.querySelector('#carousel-text');
      const messages = [
        "",
        "Userfriendly gameplay welcome to newcomers and deep enough for lovers of genre",
        "Single player based gameplay allowes to pay attantion to actual game progression and story",
        "Build your settlement! Defend it from demons! Uncover secrets of new world and collect artifacts!",
        "Innovative system of level where number of levels depends on your intuition and engagement",
        "Immerse yourself in a world of adventure and mystery, where every decision shapes the destiny of your village",
        "Embark on a journey filled with perilous challenges and epic battles, as you uncover the secrets...",
        "Grasp the beauty of Chaos Islands with different scenery styles",
        ""
    ]
      let isDragging = false, prevPageX, prevScrollLeft;
      let rightDirection = true;
      //touch
      carousel.addEventListener("touchstart", function(e) {
        //return;
        isDragging = true;
        prevScrollLeft = carousel.scrollLeft;
        prevPageX = e.touches[0].pageX;  
      });
      
      carousel.addEventListener("touchmove", function(e) {
        //return;
        if (!isDragging)
            return;
    
        let deltaPos = e.touches[0].pageX - prevPageX;
        e.preventDefault();
        carousel.classList.add('dragging');
        carousel.scrollLeft = prevScrollLeft - deltaPos;
    
      });

      carousel.addEventListener("touchend", function(e) {
        //return;
        isDragging = false;
        carousel.classList.remove('dragging');
        setTimeout(() => {
          centerImage()
      }, 400);
      });

      //mouse
      carousel.addEventListener("mouseup", function(e){
        return;
        isDragging = false;
        carousel.classList.remove('dragging')

        setTimeout(()=>{
          if(isDragging)
            return;

            centerImage();
        }, 350)
      });

      carousel.addEventListener("mousedown", function(e){
        return;
        isDragging = true;
        prevScrollLeft = carousel.scrollLeft
        prevPageX = e.pageX
      });

      carousel.addEventListener("mousemove", function(e){
        return;
        if(!isDragging)
          return;

        let deltaPos = e.pageX - prevPageX;
        e.preventDefault();
        carousel.classList.add('dragging')
        carousel.scrollLeft = prevScrollLeft - deltaPos

      
      });

      carouselBody.addEventListener("mouseover", function(e) {
          images.forEach((image, index) => {

          
              let leftChild = image.querySelector('.left');
              let rightChild = image.querySelector('.right');
              let middleImageIndex = getMiddleImageIndex();

              //left
              
              if(index + 1 == middleImageIndex){
  
                if(leftChild != null)
                  leftChild.style.opacity = 1;
    
                if(rightChild != null)
                  rightChild.style.opacity = 0;
                  
              }
             
              //right
              else if(index - 1 == middleImageIndex){
                if(leftChild != null)
                  leftChild.style.opacity = 0;
    
                if(rightChild != null)
                  rightChild.style.opacity = 1;
              }
              //none
              else{
                if(leftChild != null)
                  leftChild.style.opacity = 0;
    
                if(rightChild != null)
                  rightChild.style.opacity = 0;
              }

          });
      });

      function hideArrows(){
        images.forEach((image)=>{

 
          let leftChild = image.querySelector('.left');
          let rightChild = image.querySelector('.right');
     
          if(leftChild != null)
            leftChild.style.opacity = 0;

          if(rightChild != null)
            rightChild.style.opacity = 0;
        })
      }

      carouselBody.addEventListener("mouseout", function(e) {
        images.forEach((image)=>{

 
          let leftChild = image.querySelector('.left');
          let rightChild = image.querySelector('.right');
     
          if(leftChild != null)
            leftChild.style.opacity = 0;

          if(rightChild != null)
            rightChild.style.opacity = 0;
        })
      });

      //universal


      arrowLeft.addEventListener("click", function(){
        const middleImageIndex = getMiddleImageIndex();
        const middleImage = images[middleImageIndex];
        const middleImageRect = middleImage.getBoundingClientRect();
        const targetScrollLeft = carousel.scrollLeft - (window.innerWidth / 2 - middleImageRect.width / 2);

      window.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'  
    });
        if(middleImageIndex == 1){
          return;
        }
     
        setTimeout(() => {
            carousel.scrollLeft = targetScrollLeft;
        }, 200);

        setTimeout(() => {
          centerImage()
      }, 800);
      
      })  

      arrowRight.addEventListener("click", function(){
        const middleImageIndex = getMiddleImageIndex();
        const middleImage = images[middleImageIndex];
        const middleImageRect = middleImage.getBoundingClientRect();
        const targetScrollLeft = carousel.scrollLeft + (window.innerWidth / 2 - middleImageRect.width / 2);

     
      window.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'  
    });
        if(middleImageIndex == images.length - 2){
          return;
        }
        setTimeout(() => {
            carousel.scrollLeft = targetScrollLeft;
        }, 200);

        setTimeout(() => {
          centerImage()
      }, 800);
      })


      function getMiddleImageIndex() {
        const slider = document.querySelector('.slider-wrapper');
       
        let sliderRect = slider.getBoundingClientRect();
        let sliderScrollLeft = slider.scrollLeft;
        let sliderMiddleX = sliderScrollLeft + (sliderRect.width / 2);
    
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
      function moveSliderRight() {

        const middleImageIndex = getMiddleImageIndex();
        const middleImage = images[middleImageIndex];
        const middleImageRect = middleImage.getBoundingClientRect();
        let targetScrollLeft = carousel.scrollLeft + (rightDirection? 1: -1)*(window.innerWidth / 2 - middleImageRect.width / 2);

     
      window.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'  
    });
    
        if(middleImageIndex >= images.length - 1){
          rightDirection = false;
          return;
        
       
        }else if(middleImageIndex < 1){
          rightDirection = true;
          return;
        }

        setTimeout(() => {
            carousel.scrollLeft = targetScrollLeft;
        }, 200);

        setTimeout(() => {
          centerImage()
      }, 900);
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
            
            let leftChild = image.querySelector('.left');
            let rightChild = image.querySelector('.right');
            //todo
            //left
    
            if(index + 1 == middleImageIndex){

              if(leftChild != null)
                leftChild.style.opacity = 1;
  
              if(rightChild != null)
                rightChild.style.opacity = 0;
                
            }
           
            //right
            else if(index - 1 == middleImageIndex){
              if(leftChild != null)
                leftChild.style.opacity = 0;
  
              if(rightChild != null)
                rightChild.style.opacity = 1;
            }
            //none
            else{
              if(leftChild != null)
                leftChild.style.opacity = 0;
  
              if(rightChild != null)
                rightChild.style.opacity = 0;
            }

        });
      }

      function animateTextTransition(message){

        if(message == carouselText.textContent )
          return;

        setTimeout(()=>{
          carouselText.style.opacity = 0.1
        }, 50)

        setTimeout(()=>{
          carouselText.textContent = message;
          carouselText.style.opacity = 1
        }, 300)

        
      }
      function centerImage(){

        let middleImageIndex = getMiddleImageIndex();
        let middleImage = images[middleImageIndex];
        let middleImageRect = middleImage.getBoundingClientRect();
        let targetScrollLeft = carousel.scrollLeft + middleImageRect.left - (window.innerWidth / 2) + (middleImageRect.width / 2);
        carousel.scrollLeft = targetScrollLeft;

        window.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'  
      });

       let message = messages[middleImageIndex];
       animateTextTransition(message)
       
      }

      function startInMiddle(){
        let middleImageIndex = 4;
        let middleImage = images[middleImageIndex];
        let middleImageRect = middleImage.getBoundingClientRect();
        let targetScrollLeft = carousel.scrollLeft + middleImageRect.left - (window.innerWidth / 2) + (middleImageRect.width / 2);
        carousel.scrollLeft = targetScrollLeft;

        window.scrollTo({
          left: targetScrollLeft,
          behavior: 'smooth'  
      });
      }

      setInterval(()=>scaleMiddleImage(),10)
      hideArrows()
      setInterval(moveSliderRight, 10000);
      window.addEventListener('resize', function(event) {
        
        centerImage()
    });
    startInMiddle()
    }
    



    initSlider();
}
 
