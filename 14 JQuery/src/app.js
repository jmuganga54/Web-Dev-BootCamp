//assign css to selector
// $("h1").css("color", "green");

//getting the value of css
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));

//Adding Class to selector
$("h1").addClass("big-title");

//Adding Multiplier classes to selector
$("h1").addClass("big-title margin-50");

//removing Classes
// $("h1").removeClass("big-title");

//checking if has a class
$("h1").hasClass("margin-title");

$("h1").text("Joseph Muganga");

$("button").text("Joseph Muganga");

$("button").html("<strong>Joseph Muganga</strong>");

console.log($("img").attr("src"));

$("a").attr("href", "https://vcptu.ihi.or.tz");

console.log($("h1").attr("class"));

//AddEventListener
// $("h1").click(function () {
//   $("h1").css("color", "purple");
// });

// for (let i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $("input").keypress(function (event) {
//   $("h1").text(event.key);
// });

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
