
 function initMedia(){

    function doAnimateHover(r0,r1,r2 ){
        const hoverElem = document.getElementById(r0).children[0];
        let animationInterval;
        let animationInterval2;
    
        function onAnimationInit(stringPath) {
            animationInterval = setInterval(()=>onAnimationStart(stringPath), 10);
        }
 
        function onAnimationStart(stringPath) {
            let currentOpacity = parseFloat(hoverElem.style.opacity || 1);
    
            if (currentOpacity < 0.2) {
                hoverElem.src = stringPath;
                clearInterval(animationInterval);
                animationInterval2 = setInterval(()=>onAnimationEnd(stringPath), 10);
                return;
            }
    
            currentOpacity -= 0.03; 
            hoverElem.style.opacity = currentOpacity;
        }
    
        function onAnimationEnd(stringPath) {
            let currentOpacity = parseFloat(hoverElem.style.opacity || 0);
    
            if (currentOpacity >= 1) {
                clearInterval(animationInterval2);
                return;
            }
    
            currentOpacity += 0.03;
            hoverElem.style.opacity = currentOpacity;
        }

        hoverElem.addEventListener('mouseleave', () => {
                
            clearInterval(animationInterval);
            clearInterval(animationInterval2);
    
            hoverElem.removeEventListener('mouseleave', ()=>onAnimationInit(r2));
    
            animationInterval = setInterval(()=>onAnimationStart(r2), 10);

        });

        hoverElem.addEventListener('mouseenter', () => {
        
            clearInterval(animationInterval);
            clearInterval(animationInterval2);
    
            hoverElem.removeEventListener('mouseenter', ()=>onAnimationInit(r1));
    
            animationInterval = setInterval(()=>onAnimationStart(r1), 10);
        });
    }

    doAnimateHover("steam", "./../../../resource/icons/steam_c.png", "./../../../resource/icons/steam.png");
    doAnimateHover("discord", "./../../../resource/icons/discord_color.png", "./../../../resource/icons/discord-logo-white.png");
    doAnimateHover("x", "./../../../resource/icons/x_c.png", "./../../../resource/icons/X_logo_2023_(white).png");
    doAnimateHover("tiktok", "./../../../resource/icons/tiktok_color.png", "./../../../resource/icons/tiktok.png");
    doAnimateHover("youtube", "./../../../resource/icons/yotube_color.png", "./../../../resource/icons/yotube_white.png");
 
 }

