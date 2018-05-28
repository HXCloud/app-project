$(function(){
    $(".button_icon a").each(function(){
        if($($(this))[0].href==String(window.location))
            $(this)
                .addClass("is-actived")
                .siblings()
                .removeClass("is-actived");
    });

    $(".menu-button a").each(function(){
        if($($(this))[0].href==String(window.location))
            $(this)
            .addClass("is-actived")
            .siblings()
            .removeClass("is-actived");
    });

    var bswiper = new Swiper('.banner-swiper', {
        pagination: {
            el: '.banner-pagination',
            dynamicBullets: true,
        },
    });
    var cswiper = new Swiper('.column-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
    });
    var swiper = new Swiper('.page-swiper');

    /*搜索栏*/
    $("#search").click(function(e) {
        $("#form_search").show("slow");
    });

    $("[data-close]").click(function(e) {
        $(this).parents("#form_search").hide("slow");
    });
    /*var num=$(".swiper-wrapper").css("transform").replace(/[^0-9\-,]/g,'').split(',')[4];
    console.log(num);
    if (num==0){
        $(".menu-button a").each(function(){
                $(this)
                    .addClass("is-actived")
                    .siblings()
                    .removeClass("is-actived");
        });
    }else{
        $(this)
            .removeClass("is-actived");
    }*/

    /*if($('.swiper-slide').hasClass('swiper-slide-active')) {
        $(".menu-button a")
            .addClass("is-actived")
            .siblings()
            .removeClass("is-actived");
    }*/
});
