$(document).ready(function(){
    $(".add_page_btn").click(function(){
        $(".add_page,.blur_bg").show();
    });
    $(".done_btn,.close_btn").click(function(){
        $(".add_page,.blur_bg").hide();
    });
});