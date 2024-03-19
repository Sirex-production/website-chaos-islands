
function initNavbar(){

    const navHome = $('#nav-home');
    const navPress = $('#nav-press');
    const navGames = $('#nav-games');
    const navAbout = $('#nav-about');
    const navContact = $('#nav-contact');
    const navLogo= $('#nav-logo');

    const jumbotron = $('#jumbotron');
    const media = $('#media');
    const carousel = $('#carousel');
    const gallery = $('#gallery');
    const contact = $('#contact');
    const games = $('#games');
    const about = $('#about');
    const presskit = $('#presskit');

    const videoContainers = document.querySelectorAll('#games-video');

    navLogo.on('click', function () {
        ShowMainPage()
    });

    navHome.on('click', function () {
        ShowMainPage()
    });

    navPress.on('click', function () {
        ShowPressKit();
    });

    navGames.on('click', function () {
        ShowGames();
    });

    navAbout.on('click', function () {
        ShowAbout();
    });

    navContact.on('click', function () {
        ShowContact();
    });

    
    function HidePages(){
        jumbotron.addClass('hidden')
        media.addClass('hidden')
        carousel.addClass('hidden')
        gallery.addClass('hidden')
        about.addClass('hidden')
        games.addClass('hidden')
        contact.addClass('hidden')
        presskit.addClass('hidden') 
        
        navHome.parent().removeClass('active') 
        navPress.parent().removeClass('active') 
        navGames.parent().removeClass('active') 
        navAbout.parent().removeClass('active') 
        navContact.parent().removeClass('active') 

        videoContainers.forEach(videoContainer => {
            let iframes = videoContainer.querySelectorAll('iframe');

            iframes.forEach(iframe => {
                iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                
            })
           
        })
    }

    function ShowMainPage(){
        jumbotron.removeClass('hidden')
        media.removeClass('hidden')
        carousel.removeClass('hidden')
        gallery.removeClass('hidden')
        
        about.addClass('hidden')
        games.addClass('hidden')
        contact.addClass('hidden')
        presskit.addClass('hidden')

        navHome.parent().addClass('active') 
        navPress.parent().removeClass('active') 
        navGames.parent().removeClass('active') 
        navAbout.parent().removeClass('active') 
        navContact.parent().removeClass('active') 

        
        videoContainers.forEach(videoContainer => {
            let iframes = videoContainer.querySelectorAll('iframe');

            iframes.forEach(iframe => {
                iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                console.log(iframe)
            })
           
        })
    }

    function ShowGames(){
        HidePages();
        games.removeClass('hidden')
        navGames.parent().addClass('active') 
    }
    
    function ShowContact(){
        HidePages();
        contact.removeClass('hidden')
        navContact.parent().addClass('active') 
    }

    function ShowAbout(){
        HidePages();
        about.removeClass('hidden')
        navAbout.parent().addClass('active') 
    }

    function ShowPressKit(){
        HidePages();
        presskit.removeClass('hidden')
        navPress.parent().addClass('active') 
    }
}
 