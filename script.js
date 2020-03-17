
var preloader = document.getElementById('loading');
function myFunction(){
  setTimeout(function(){preloader.style.display = "none"}, 2900);
}
//function myFunction(){
//  setTimeout(function(){preloader.style.display = "none"}, 1980);
//}


//dark mode button
document.getElementById("darkmode").onclick = function(){
  document.getElementById("7period").style.color = "orange";
  document.getElementById("one").style.color = "green";
  document.getElementById("two").style.color = "green";
  document.getElementById("three").style.color = "green";
  document.getElementById("x").style.color = "green";
  document.getElementById("4a").style.color = "green";
  document.getElementById("4b").style.color = "green";
  document.getElementById("4c").style.color = "green";
  document.getElementById("five").style.color = "green";
  document.getElementById("six").style.color = "green";



}

//light mode button
document.getElementById("lightmode").onclick = function(){
  document.getElementById("7period").style.color = "purple";
  document.getElementById("one").style.color = "black";
  document.getElementById("two").style.color = "black";
  document.getElementById("three").style.color = "black";
  document.getElementById("x").style.color = "black";
  document.getElementById("4a").style.color = "black";
  document.getElementById("4b").style.color = "black";
  document.getElementById("4c").style.color = "black";
  document.getElementById("five").style.color = "black";
  document.getElementById("six").style.color = "black";


  


} 



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
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("EndSchool").innerHTML =
        "<h4><b>School year ends in " + days + " days!</b></ul></h4>";
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("EndSchool").innerHTML =
          "<h4><ul><b>2019-2020 school year is over!</b></h4>";
      }
    }, 1000);






    // Marking period 2 countdown
    var countDownDatelong = new Date("Jan 20, 2020 5:37:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDatelong - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("long").innerHTML =
        "<h4><b>Long weekend starts in " + days + " days!</b></h4>";
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("long").innerHTML =
          "<h4><b>Long weekend starts today!</b></h4>";
      }
    }, 1000);






// Winter break count down
    var countDownDatewinter = new Date("Dec 19, 2019 5:37:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDatewinter - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      days = days - 1;


      // Output the result in an element with id="demo"
      document.getElementById("winter").innerHTML =
        "<h4><b>Winter break starts in " + days + " day!</b></h4>";
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("winter").innerHTML =
          "<h4><b>Winter break has started!</b></h4>";
      }
    }, 1000); 










    // Thanks giving break count down
    var countDownDatedismissal = new Date("Jan 24, 2020 5:37:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDatedismissal - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("dismissal").innerHTML =
        "<h4><b>Early dismissal in " + days + " days!</b><h4>";
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("dismissal").innerHTML =
          "<h4><b>Today is a early dismissal day!</b></h4>";
      }
    }, 1000);

  


   // Thanks giving break count down
    var countDownDateMP3 = new Date("Jan 24, 2020 5:37:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDateMP3 - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("MP3").innerHTML =
        "<h4><b>Marking period 3 ends in " + days + " days!</b><h4>";
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("MP3").innerHTML =
          "<h4><b>Marking period 3 ends today!</b></h4>";
      }
    }, 1000);






















//first period
    var countDownDatefirst = new Date("Mar 17, 2020 21:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDatefirst - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      
      function prependZero(hours) {
        if (hours < 2)
          return "0" + hours;
        else
          return;
      }
      document.getElementById("one").innerHTML = "<b>Period 1 ends in: " + hours + "h" + minutes + "m" + seconds + "s</b>";

      
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("one").innerHTML = "<b>Period 1 is over!</b>";
      }
    }, 1000);
  

  //second period
    // Set the date we're counting down to
    var countdowntwo = new Date("Mar 20, 2020 9:24:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countdowntwo - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("two").innerHTML =
        "<b>Period 2 ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("two").innerHTML = "<b>Period 2 is over!</b>";
      }
    }, 1000);

  //third period
    // Set the date we're counting down to
    var countDownTHREE = new Date("Mar 20, 2020 10:11:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownTHREE - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("three").innerHTML =
        "<b>Period 3 ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("three").innerHTML = "<b>Period 3 is over!</b>";
      }
    }, 1000);



 //x period
    // Set the date we're counting down to
    var countDownx = new Date("Mar 20, 2020 10:44:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownx - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("x").innerHTML =
        "<b>Period x ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("x").innerHTML = "<b>Period x is over!</b>";
      }
    }, 1000);






  //lunch four A
    // Set the date we're counting down to
    var countDownfourA = new Date("Mar 20, 2020 11:16:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownfourA - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("a").innerHTML =
        "<b>Lunch 4a ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("a").innerHTML = "<b>Lunch 4a is over!</b>";
      }
    }, 1000);


//lunch four B
// Set the date we're counting down to
    var countDownfourB = new Date("Mar 20, 2020 11:46:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownfourB - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("b").innerHTML =
        "<b>Lunch 4b ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("b").innerHTML = "<b>Lunch 4b is over!</b>";
      }
    }, 1000);


//lunch four C
    // Set the date we're counting down to
    var countDownfourC = new Date("Mar 20, 2020 12:16:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownfourC - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("c").innerHTML =
        "<b>Lunch 4c ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("c").innerHTML = "<b>Lunch 4c is over!</b>";
      }
    }, 1000);



  //period 5
    // Set the date we're counting down to
    var countDownFive = new Date("Mar 20, 2020 13:3:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownFive - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("five").innerHTML =
        "<b>Period 5 ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("five").innerHTML = "<b>Period 5 is over!</b>";
      }
    }, 1000);



    //period six
    // Set the date we're counting down to
    var countsix = new Date("Mar 20, 2020 13:50:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countsix - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("six").innerHTML =
        "<b>Period 6 ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("six").innerHTML = "<b>Period 6 is over!</b>";
      }
    }, 1000);



  //period 7
    // Set the date we're counting down to
    var countseven = new Date("Mar 20, 2020 14:37:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countseven - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("seven").innerHTML =
        "<b>Period 7 ends in: " +
        hours +
        "h" +
        minutes +
        "m" +
        seconds +
        "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("seven").innerHTML = "<b>Time to go home!</b>";
      }
    }, 1000);




//non working code for period 7    // Set the date we're counting down to
    var countend = new Date("Nov 1, 2019 1:53:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countend - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("nine").innerHTML =
        "<b>School ends in: " + hours + "h" + minutes + "m" + seconds + "s</b>";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("nine").innerHTML = "<b>Period 9 is over!</b>";
      }
    }, 1000);

