$(document).ready(function() {
   
    $(".Azienda").mouseenter(function(){
        $(this).children(".dropdown-menu").addClass("visible");
    });
    $(".Azienda").mouseleave(function(){
        $(this).children(".dropdown-menu").removeClass("visible");
    });

});