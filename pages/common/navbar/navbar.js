
function initNavbar(){

    const navHome = $('#nav-home');
    const navPress = $('#nav-press');
    const navGames = $('#nav-games');
    const navAbout = $('#nav-about');
    const navContact = $('#nav-contact');


    const jumbotron = $('#jumbotron');
    const media = $('#media');
    const carousel = $('#carousel');
    const gallery = $('#gallery');
    const contact = $('#contact');
    const games = $('#games');
    const about = $('#about');

    navHome.on('click', function () {
        ShowMainPage()
    });

    navPress.on('click', function () {
        
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
    }

    function ShowMainPage(){
        jumbotron.removeClass('hidden')
        media.removeClass('hidden')
        carousel.removeClass('hidden')
        gallery.removeClass('hidden')
        
        about.addClass('hidden')
        games.addClass('hidden')
        contact.addClass('hidden')
    }

    function ShowGames(){
        HidePages();
        games.removeClass('hidden')
    }
    
    function ShowContact(){
        HidePages();
        contact.removeClass('hidden')
    }

    function ShowAbout(){
        HidePages();
        about.removeClass('hidden')
    }
}
 