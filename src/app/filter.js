$(document).ready(function(){
    $('.category_item').click(function(){
        var category = $(this).attr('id');
        alert(category);
    });
});