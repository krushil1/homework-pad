
// school year countdown
var countDownDateEndSchool = new Date("June 12, 2020 14:37:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDateEndSchool - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("EndSchool").innerHTML =
    "<h4><b>School year ends in " + days + " days!</b></h4>";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("EndSchool").innerHTML =
      "<h4><b>2019-2020 school year is over!</b></h4>";
  }
}, 1000);
