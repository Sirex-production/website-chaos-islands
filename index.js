$(function () {
    var navbar = $("#navbar").load("./pages/common/navbar/navbar.html");
    var jumbotron = $("#jumbotron").load("./pages/common/jumbotron/jumbotron.html");
    var carausel = $("#carousel").load("./pages/common/carousel/carousel.html");
    var footer = $("#footer").load("./pages/common/footer/footer.html");
    var gallery = $("#gallery").load("./pages/common/gallery/gallery.html");
    var about = $("#about").load("./pages/common/about/about.html");
    var contact = $("#contact").load("./pages/common/contact/contact.html");

    about.addClass("hidden");
    contact.addClass("hidden");
});
