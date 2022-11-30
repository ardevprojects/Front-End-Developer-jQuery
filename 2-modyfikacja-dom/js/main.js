$(document).ready(function () {
    $('#up').on('click', function () {
        $('p:first').insertBefore($('p:last'));
    });

    $('#down').on('click', function () {
        $('p:last').insertAfter($('p:first'));
    });
});