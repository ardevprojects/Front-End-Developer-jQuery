$(document).ready(function () {
  let sum = 0;
  $("#count-sum").one('click', function () {
    $('.salary').each(function () {
      sum += parseInt($(this).text());
    });
    $('#sum').text(sum);
  });
});

