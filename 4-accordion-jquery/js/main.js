$(document).ready(function(){
    $('.squeezebox-item').click(function(){
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.squeezebox-content').slideUp();
        } else {
            $(this).addClass('open');
            $(this).find('.squeezebox-content').slideDown();
        }
    });
});