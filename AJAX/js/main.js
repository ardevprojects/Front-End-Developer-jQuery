$(document).ready(function () {
  let salary = $("#salary").text();
  $("#count-sum").on("click", function () {
    console.log("button works");

    $("#salary").each(function (i) {
      // salary[i] = salary++;
      console.log(salary[i]);
    });

  });
});