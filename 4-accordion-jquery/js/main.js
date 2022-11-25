$(document).ready(function(){
    $('.rower-item').click(function(){
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.rower-content').slideUp();
        } else {
            $(this).addClass('open');
            $(this).find('.rower-content').slideDown();
        }
    });
});