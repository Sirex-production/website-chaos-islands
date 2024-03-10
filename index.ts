 
$(() => {
    
    let pagesToLoad = 9; 
    let pagesLoaded = 0; 

    const navbar = $("#navbar").load("./pages/common/navbar/navbar.html",function(response, status, xhr){
        
        if (status == "success") {
            initNavbar();
        }else if (status == "error"){
            console.log(`Error loading content - navbar: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });
    
    const jumbotron = $("#jumbotron").load("./pages/common/jumbotron/jumbotron.html",function(response, status, xhr){
        checkAllPagesLoaded();

    });

    const footer = $("#footer").load("./pages/common/footer/footer.html", function(response, status, xhr){

        checkAllPagesLoaded();
    });

    const gallery = $("#gallery").load("./pages/common/gallery/gallery.html",function(response, status, xhr){

        if (status == "success") {
            initGallery();
        }else if (status == "error"){
            console.log(`Error loading content - gallery: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });

    const about = $("#about").load("./pages/common/about/about.html",function(response, status, xhr){
        checkAllPagesLoaded();
    });

    const contact = $("#contact").load("./pages/common/contact/contact.html",function(response, status, xhr){
        checkAllPagesLoaded();
    });


    const games = $("#games").load("./pages/common/games/games.html",function(response, status, xhr){
        
        if (status == "success") {
            initGames();
        }else if (status == "error"){
            console.log(`Error loading content - games: ${xhr.status} ${xhr.statusText}`);
        }
        
        checkAllPagesLoaded();
    });


    const media = $("#media").load("./pages/common/media/media.html", function(response, status, xhr){
        
        if (status == "success") {
            initMedia();
        }else if (status == "error"){
            console.log(`Error loading content - media: ${xhr.status} ${xhr.statusText}`);
        }

        checkAllPagesLoaded();
    });

    const carausel = $("#carousel").load("./pages/common/carousel/carousel.html",function(response, status, xhr){
        
        if (status == "success") {
            initCarousel();
        }else if (status == "error"){
            console.log(`Error loading content - carousel: ${xhr.status} ${xhr.statusText}`);
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
    //about.addClass("hidden");
    //contact.addClass("hidden");
});

function initMedia() {
    throw new Error("Function not implemented.");
}
