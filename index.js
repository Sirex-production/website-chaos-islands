$(function () {
    var navbar = $("#navbar").load("./pages/common/navbar/navbar.html");
    var jumbotron = $("#jumbotron").load("./pages/common/jumbotron/jumbotron.html");
    var carausel = $("#carousel").load("./pages/common/carousel/carousel.html");
    var footer = $("#footer").load("./pages/common/footer/footer.html");
    var gallery = $("#gallery").load("./pages/common/gallery/gallery.html");
    var about = $("#about").load("./pages/common/about/about.html");
    var contact = $("#contact").load("./pages/common/contact/contact.html");
    var games = $("#games").load("./pages/common/games/games.html");


    var media = $("#media").load("./pages/common/media/media.html", function(response, status, xhr){
        
        if (status == "success") {
            initMedia();
        }else if (status == "error"){
            console.log(`Error loading content - steam: ${xhr.status} ${xhr.statusText}`);
        }

    });

    //about.addClass("hidden");
    //contact.addClass("hidden");
});
