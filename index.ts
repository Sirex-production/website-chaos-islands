$(() => {
    
    const navbar = $("#navbar").load("./pages/common/navbar/navbar.html");
    const jumbotron = $("#jumbotron").load("./pages/common/jumbotron/jumbotron.html");
    const carausel = $("#carousel").load("./pages/common/carousel/carousel.html");
    const footer = $("#footer").load("./pages/common/footer/footer.html");
    const about = $("#about").load("./pages/common/about/about.html");
    const contact = $("#contact").load("./pages/common/contact/contact.html");
    const games = $("#games").load("./pages/common/games/games.html");

    const media = $("#media").load("./pages/common/media/media.html", function(response, status, xhr){

        if (status == "success") {
            initMedia();
        }else if (status == "error"){
            console.log(`Error loading content - steam: ${xhr.status} ${xhr.statusText}`);
        }

    });

    
    about.addClass("hidden");
    contact.addClass("hidden");
});