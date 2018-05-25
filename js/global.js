/*搜索栏*/
$(function(){
    $("#search").click(function(e) {
        $("#form_search").show("slow");
    });

    $("[data-close]").click(function(e) {
        $(this).parents("#form_search").hide("slow");
    });
});
