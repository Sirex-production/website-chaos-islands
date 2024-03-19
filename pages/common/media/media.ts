
import $ from 'jquery';
function initMedia() : void {
    function doAnimateHover(hoverElemId: string, hoverImgSrc: string, defaultImgSrc: string): void {

        const hoverElem = $("#" + hoverElemId).children().eq(0);
        let animationInterval: ReturnType<typeof setInterval> | undefined;;
        let animationInterval2: ReturnType<typeof setInterval> | undefined;;

        function onAnimationInit(stringPath : string): void {
            animationInterval = setInterval(()=>onAnimationStart(stringPath), 10);
        }

        function onAnimationStart(stringPath : string): void {
            let currentOpacity = parseFloat(hoverElem.css('opacity') || '1');

            if (currentOpacity < 0.2) {
                hoverElem.attr('src', hoverImgSrc);
                clearInterval(animationInterval);
                animationInterval2 = setInterval(onHoverAnimation2, 10);
                return;
            }

            currentOpacity -= 0.03;  
            hoverElem.css('opacity', currentOpacity.toString());
        }

        function onHoverAnimation2(): void {
            let currentOpacity = parseFloat(hoverElem.css('opacity') || '0');

            if (currentOpacity >= 1) {
                clearInterval(animationInterval2);
                return;
            }

            currentOpacity += 0.03;  
            hoverElem.css('opacity', currentOpacity.toString());
        }

        hoverElem.on('mouseleave', () => {
            clearInterval(animationInterval);
            clearInterval(animationInterval2);

            hoverElem.off('mouseleave', ()=>onAnimationInit(hoverImgSrc));
            animationInterval = setInterval(()=>onAnimationStart(hoverImgSrc), 10);
        });

        hoverElem.on('mouseenter', () => {
            clearInterval(animationInterval);
            clearInterval(animationInterval2);

            hoverElem.off('mouseleave', ()=>onAnimationInit(defaultImgSrc));
            animationInterval = setInterval(()=>onAnimationStart(defaultImgSrc), 10);
        });
    }

    doAnimateHover("steam", "resource/icons/steam_c.png", "resource/icons/steam.png");
    doAnimateHover("discord", "resource/icons/discord_color.png", "resource/icons/discord-logo-white.png");
    doAnimateHover("x", "resource/icons/x_c.png", "resource/icons/X_logo_2023_(white).png");
    doAnimateHover("tiktok", "resource/icons/tiktok_c.png", "resource/icons/tiktok.png");
    doAnimateHover("youtube", "resource/icons/yotube_color.png", "resource/icons/yotube_white.png");
}