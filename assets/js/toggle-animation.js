$("#dark-mode-switch").change(function(){
    $("body").toggleClass("dark-mode");
    $("img.sun, img.moon").toggleClass("sun moon");
});