$(document).ready(function(){
    $('.fa-bars').hide();
    $('.fa-times').hide();
    function toggleNavigation(){
        $('.fa-bars, .fa-times').toggle();
        $(".nav_secWrap").toggle(200);
    }
    function updateUI(){
        if($(window).width() <=900){
            $('.nav_secWrap').hide();
            $('.fa-bars').show();
        } else{
            $('.nav_secWrap').show();
            $('.fa-bars').hide();
        }
    }
    updateUI();
    $(document).on("click", ".fa-bars", function(){
        toggleNavigation();
    });
    $(document).on("click", ".fa-times", function(){
        $('.fa-bars').show();
        $('.fa-times').hide();
        $('.nav_secWrap').hide(200);
    });
    $(window).on("resize orientationchange", function(){
        updateUI();
    })
})
