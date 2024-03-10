import * as $ from 'jquery';
 

function initCarousel(){

    let animationSpeed = '15s';
    const fan = $('#windmill-fan');

    

    fan.on('click', () => {
        speedUpAnimation();
    });
        
    function speedUpAnimation() {
        animationSpeed = '1s'; // Faster animation speed
        fan.css('transform', `rotate(${animationSpeed}deg)`);

    }

    function slowDownAnimation() {
        animationSpeed = '4s'; // Original animation speed
        fan.css('transform', `rotate(${animationSpeed}deg)`);
    }
        

}