 
$(function () {

    var pagesToLoad = 10; 
    var pagesLoaded = 0; 


    
    var jumbotron = $("#jumbotron").load("./pages/common/jumbotron/jumbotron.html",function(response, status, xhr){
        checkAllPagesLoaded();

    });

    var footer = $("#footer").load("./pages/common/footer/footer.html", function(response, status, xhr){

        checkAllPagesLoaded();
    });

    var gallery = $("#gallery").load("./pages/common/gallery/gallery.html",function(response, status, xhr){
  

        if (status == "success") {
            initGallery();
        }else if (status == "error"){
            console.log(`Error loading content - gallery: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });

    var about = $("#about").load("./pages/common/about/about.html",function(response, status, xhr){
        checkAllPagesLoaded();
    });

    var contact = $("#contact").load("./pages/common/contact/contact.html",function(response, status, xhr){
        checkAllPagesLoaded();
    });


    var games = $("#games").load("./pages/common/games/games.html",function(response, status, xhr){

        if (status == "success") {
            initGames();
        }else if (status == "error"){
            console.log(`Error loading content - games: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });


    var presskit = $("#presskit").load("./pages/common/presskit/presskit.html",function(response, status, xhr){

        // if (status == "success") {
        //     initPresskit();
        // }else if (status == "error"){
        //     console.log(`Error loading content - press kit: ${xhr.status} ${xhr.statusText}`);
        // }

        checkAllPagesLoaded();
    });

    var media = $("#media").load("./pages/common/media/media.html", function(response, status, xhr){
        
        if (status == "success") {
            initMedia();
        }else if (status == "error"){
            console.log(`Error loading content - media: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });

    var carausel = $("#carousel").load("./pages/common/carousel/carousel.html",function(response, status, xhr){
        
        if (status == "success") {
            initCarousel();
        }else if (status == "error"){
            console.log(`Error loading content - carousel: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });

    var navbar = $("#navbar").load("./pages/common/navbar/navbar.html",function(response, status, xhr){
        
        if (status == "success") {
            initNavbar();
        }else if (status == "error"){
            console.log(`Error loading content - navbar: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });

    
    const observer = new IntersectionObserver((entities)=>{
        entities.forEach(e=>{
          
            if(e.isIntersecting){
                e.target.classList.add('section-show');
            }else{
                e.target.classList.remove('section-show');
            }
        })
    })


    function checkAllPagesLoaded() {
        pagesLoaded++;

        if (pagesLoaded >= pagesToLoad) {

            const observableElements = document.querySelectorAll('.section-hidden');
            observableElements.forEach((e)=> observer.observe(e));
      
        }
    }

    about.addClass("hidden");
    contact.addClass("hidden");
    games.addClass("hidden");
    presskit.addClass("hidden");
});

function openLink(url) {
    window.open(url, '_blank');
}