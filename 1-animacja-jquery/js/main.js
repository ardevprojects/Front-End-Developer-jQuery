$(document).ready(function () {

    $('.btn').on('mouseenter',function () {
        console.log('mouse enter');
        $('.btn').addClass('mouseenter');
    });
    $('.btn').on('mouseleave',function () {
        console.log('mouse leave');
        $('.btn').removeClass('mouseenter');
    });

    var square = $('.rectangle');
    $('.btn').click(function () { 
        console.log('button click');

        square.animate({
            left: '100px',
            height: '100px',
            width: '100px'
        }, 3000, function () {
            square.animate({'background-color': 'blue'}, 5000,
            // square.addClass('blue',

            function () {
                console.log("animacja zakonczona");
                square.append('<h3>Animacja zakonczona</h3>').css('color', 'white');
            });
        });
        });
});