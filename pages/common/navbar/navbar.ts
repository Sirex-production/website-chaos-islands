import $ from 'jquery';

function initNavbar() {
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

    navLogo.on('click', function () {
        showMainPage()
    });

    navPress.on('click', function () {
        //showMainPage();
    });

    navHome.on('click', function () {
        showMainPage();
    });

    navGames.on('click', function () {
        showGames();
    });

    navAbout.on('click', function () {
        showAbout();
    });

    navContact.on('click', function () {
        showContact();
    });

    function hidePages() {
        
        [jumbotron, media, carousel, gallery, about, games, contact].forEach(page => {
            page.addClass('hidden');
        });
    }

    function showMainPage() {
        hidePages();
       
        [jumbotron, media, carousel, gallery].forEach(page => {
            page.removeClass('hidden');
        });
    }

    function showGames() {
        hidePages();
        games.removeClass('hidden');
    }

    function showContact() {
        hidePages();
        contact.removeClass('hidden');
    }

    function showAbout() {
        hidePages();
        about.removeClass('hidden');
    }
}
 
