/**
 * 当前板块突出显示、导航链接、banner
 */
    // 找到导航里所有的链接
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


    $("#search").click(function(e) {
        $("#form_search").show("slow");
    });

    $("[data-close]").click(function(e) {
        $(this).parents("#form_search").hide("slow");
    });
});
