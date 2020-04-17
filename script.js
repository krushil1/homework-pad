
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



  var schedule = 'A';
  
  function Apressed() {
    schedule = 'A';
    document.getElementById("Abutton").style.backgroundColor = "db3d3d";
    document.getElementById("Bbutton").style.backgroundColor = "white";
    document.getElementById("Cbutton").style.backgroundColor = "white";
    document.getElementById("Dbutton").style.backgroundColor = "white";
    defineTiming();
  }
   function Bpressed() {
    schedule = 'B';
     document.getElementById("Abutton").style.backgroundColor = "white";
     document.getElementById("Bbutton").style.backgroundColor = "db3d3d";
     document.getElementById("Cbutton").style.backgroundColor = "white";
     document.getElementById("Dbutton").style.backgroundColor = "white";
    defineTiming();
  }
   function Cpressed() {
    schedule = 'C';
      document.getElementById("Abutton").style.backgroundColor = "white";
     document.getElementById("Bbutton").style.backgroundColor = "white";
     document.getElementById("Cbutton").style.backgroundColor = "db3d3d";
     document.getElementById("Dbutton").style.backgroundColor = "white";
    defineTiming();
  }
   function Dpressed() {
    schedule = 'D';
    document.getElementById("Abutton").style.backgroundColor = "white";
     document.getElementById("Bbutton").style.backgroundColor = "white";
     document.getElementById("Cbutton").style.backgroundColor = "white";
     document.getElementById("Dbutton").style.backgroundColor = "db3d3d";
    defineTiming();
  }

var h1; var m1;
var h2; var m2;
var h3; var m3;
var h4; var m4;
var h5; var m5;
var h6; var m6;
var h7; var m7;
var h8; var m8;
var h9; var m9;

var displayPeriod1;
var displayPeriod2;
var displayPeriod3;
var displayPeriod4;
var displayPeriod5;
var displayPeriod6;
var displayPeriod7;
var displayPeriod8;
var displayPeriod9;

function defineTiming() {   //sets the variables of each period end time based on the schedule
  
  if (schedule == 'A') {
    h1 = 1;  m1 = 29;
    h2 = 1;  m2 = 17;
    h3 = 1; m3 = 5;
    h4 = 1; m4 = 53;
    h5 = 1; m5 = 41;
    h6 = 1; m6 = 29;
    h7 = 1; m7 = 17;
    h8 = 1; m8 = 5;
    h9 = 1;m9 = 53;
  } else {
    if (schedule == 'B') {
      h1 = 8;  m1 = 37;
      h2 = 9;  m2 = 24;
      h3 = 10; m3 = 11;
      h4 = 10; m4 = 58;
      h5 = 11; m5 = 45;
      h6 = 12; m6 = 32;
      h7 = 13; m7 = 19;
      h8 = 14; m8 = 6;
      h9 = 14; m9 = 53;
      
        
    } else {
      if (schedule == 'C') {
        h1 = 8;  m1 = 22;
        h2 = 9;  m2 = 4;
        h3 = 9;  m3 = 46;
        h4 = 10; m4 = 20;
        h5 = 10; m5 = 54;
        h6 = 11; m6 = 28;
        h7 = 12; m7 = 2;
        h8 = 12; m8 = 31;
        h9 = 13; m9 = 0;
      } else {
        if (schedule == 'D') {
          h1 = 10; m1 = 9;
          h2 = 10; m2 = 39;
          h3 = 11; m3 = 9;
          h4 = 11; m4 = 43;
          h5 = 12; m5 = 17;
          h6 = 12; m6 = 51;
          h7 = 13; m7 = 25;
          h8 = 14; m8 = 9;
          h9 = 14; m9 = 53;
        }
      }
    }
  }
}

function displayPeriods() {
  setTimeout(function () {
    
    document.getElementById("time1").innerHTML = displayPeriod1;
    document.getElementById("time2").innerHTML = displayPeriod2;
    document.getElementById("time3").innerHTML = displayPeriod3;
    document.getElementById("time4").innerHTML = displayPeriod4;
    document.getElementById("time5").innerHTML = displayPeriod5;
    document.getElementById("time6").innerHTML = displayPeriod6;
    document.getElementById("time7").innerHTML = displayPeriod7;
    document.getElementById("time8").innerHTML = displayPeriod8;
    document.getElementById("time9").innerHTML = displayPeriod9;
    
    displayPeriods();
  }, 0)
}

var realSeconds;

(function() {

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }
  
  function getRealSeconds() {
    var start = new Date;
    start.setHours(21, 0, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var ss = pad(remain % 60);
    realSeconds = ss;
    setTimeout(getRealSeconds, 1000);
  }
  
  function period1() {
    var start = new Date;
    start.setHours(h1, m1, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod1 = "is Over!"; 
    } else {
    displayPeriod1 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period1, 100);
  }
 function period2() {
    var start = new Date;
    start.setHours(h2, m2, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
     displayPeriod2 = "is Over!";
    } else {
    displayPeriod2 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period2, 100);
  }
 function period3() {
    var start = new Date;
    start.setHours(h3, m3, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod3 = "is Over!";
    } else {
    displayPeriod3 = "<color="#00000">Ends In:&nbsp</color>" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period3, 100);
  }
 function period4() {
    var start = new Date;
    start.setHours(h4, m4, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod4 = "is Over!";
    } else {
    displayPeriod4 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period4, 100);
  }
 function period5() {
    var start = new Date;
    start.setHours(h5, m5, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod5 = "is Over!";
    } else {
    displayPeriod5 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period5, 100);
  }
 function period6() {
    var start = new Date;
    start.setHours(h6, m6, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod6 = "is Over!";
    } else {
    displayPeriod6 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period6, 100);
  }
 function period7() {
    var start = new Date;
    start.setHours(h7, m7, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod7 = "is Over!";
    } else {
    displayPeriod7 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period7, 100);
  }
 function period8() {
    var start = new Date;
    start.setHours(h8, m8, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod8 = "is Over!";
    } else {
    displayPeriod8 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period8, 100);
  }
function period9() {
    var start = new Date;
    start.setHours(h9, m9, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8) {
      displayPeriod9 = "is Over!";
    } else {
    displayPeriod9 = "Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period9, 100);
  }
  
  displayPeriods();
  document.addEventListener('DOMContentLoaded', getRealSeconds);
  document.addEventListener('DOMContentLoaded', period1);
  document.addEventListener('DOMContentLoaded', period2);
  document.addEventListener('DOMContentLoaded', period3);
  document.addEventListener('DOMContentLoaded', period4);
  document.addEventListener('DOMContentLoaded', period5);
  document.addEventListener('DOMContentLoaded', period6);
  document.addEventListener('DOMContentLoaded', period7);
  document.addEventListener('DOMContentLoaded', period8);
  document.addEventListener('DOMContentLoaded', period9);
})();










