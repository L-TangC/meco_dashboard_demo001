$(document).ready(function(){
    $(".add_page_btn").click(function(){
        $(".add_page,.blur_bg").show();
    });
    $(".done_btn,.close_btn").click(function(){
        $(".add_page,.blur_bg").hide();
    });
    $(".add_new_exercise_group").click(function(){
        $(".add_exercise_name_box_show").show();
    });
    $(".add_new_exercise_done").click(function(){
        $(".add_exercise_name_box_show").hide();
    });
});