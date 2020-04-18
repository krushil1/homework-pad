
var preloader = document.getElementById('loading');
function myFunction(){
  setTimeout(function(){preloader.style.display = "none"}, 2900);
}
//function myFunction(){
//  setTimeout(function(){preloader.style.display = "none"}, 1980);
//}



  





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






  var schedule = 'A';
  
  function Apressed() {
    schedule = 'A';
    document.getElementById("Abutton").style.backgroundColor = "db3d3d";
    document.getElementById("Bbutton").style.backgroundColor = "white";
    document.getElementById("Cbutton").style.backgroundColor = "white";
    defineTiming();
  }
   function Bpressed() {
    schedule = 'B';
     document.getElementById("Abutton").style.backgroundColor = "white";
     document.getElementById("Bbutton").style.backgroundColor = "db3d3d";
     document.getElementById("Cbutton").style.backgroundColor = "white";
    defineTiming();
  }
   function Cpressed() {
    schedule = 'C';
      document.getElementById("Abutton").style.backgroundColor = "white";
     document.getElementById("Bbutton").style.backgroundColor = "white";
     document.getElementById("Cbutton").style.backgroundColor = "db3d3d";
    defineTiming();
  }
   

var h1; var m1;
var h2; var m2;
var h3; var m3;
var hx; var mx;
var h4; var m4;
var h5; var m5;
var h6; var m6;
var h7; var m7;
var h8; var m8;
var h9; var m9;

var displayPeriod1;
var displayPeriod2;
var displayPeriod3;
var displayPeriodx;
var displayPeriod4;
var displayPeriod5;
var displayPeriod6;
var displayPeriod7;
var displayPeriod8;
var displayPeriod9;

function defineTiming() {   //sets the variables of each period end time based on the schedule
  
  if (schedule == 'A') {
    h1 = 8;  m1 = 37;
    h2 = 9;  m2 = 24;
    h3 = 10; m3 = 11;
    hx = 10; mx = 44; //period X
    h4 = 11; m4 = 16; //4a
    h5 = 11; m5 = 46; //4b
    h6 = 12; m6 = 12; //4c
    h7 = 13; m7 = 3;
    h8 = 13; m8 = 50;
    h9 = 14;m9 = 37;
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
        h4 = 10; m4 = 20; // 5th Period
        h5 = 10; m5 = 54; // 6th Period
        h6 = 11; m6 = 28; // lunch 4a
        h7 = 12; m7 = 2; // lunch 4b
        h8 = 12; m8 = 31; // lunch 4c
        h9 = 13; m9 = 0; // Period 7
      } 
    }
  }
}

function displayPeriods() {
  setTimeout(function () {
    
    document.getElementById("time1").innerHTML = displayPeriod1;
    document.getElementById("time2").innerHTML = displayPeriod2;
    document.getElementById("time3").innerHTML = displayPeriod3;
    document.getElementById("timex").innerHTML = displayPeriodx;
    document.getElementById("time4").innerHTML = displayPeriod4;
    document.getElementById("time5").innerHTML = displayPeriod5;
    document.getElementById("time6").innerHTML = displayPeriod6;
    document.getElementById("time7").innerHTML = displayPeriod7;
    document.getElementById("time8").innerHTML = displayPeriod8;
    document.getElementById("time9").innerHTML = displayPeriod9;
    
    displayPeriods();
  }, 0)
}

  
var text1 = "Period 1 Ends In:&nbsp"; 
var Text1 = text1.fontcolor("white"); //controls the "Ends In:" text color
 
var end1 = "Period 1 is Over!";
var End1 = end1.fontcolor("white"); //controls the "is Over!" text color

var text2 = "Period 2 Ends In:&nbsp"; 
var Text2 = text2.fontcolor("white"); //controls the "Ends In:" text color
 
var end2 = "Period 2 is Over!";
var End2 = end2.fontcolor("white");

var text3 = "Period 3 Ends In:&nbsp"; 
var Text3 = text3.fontcolor("white"); //controls the "Ends In:" text color
 
var end3 = "Period 3 is Over!";
var End3 = end3.fontcolor("white");

var endtext9 = "is Over!";
var End9 = endtext9.fontcolor("#00BD56"); //controls the "is Over!" text color

var text9 = "Ends In:&nbsp"; 
var Text9 = text9.fontcolor("#00BD56"); //controls the "Ends In:" text color

var textx = "Period X Ends In:&nbsp";
var Textx = textx.fontcolor("white"); //controls the text color for Period X

var endx = "No Period X";
var Endx = endx.fontcolor("white");

var txtx = "Period X is Over!";
var Txtx = txtx.fontcolor("white");


var foura = "Lunch 4a Ends In: &nbsp";
var fourA = foura.fontsize("white");

var end4a = "Lunch 4a is Over!";
var End4a = end4a.fontcolor("white");

var text4b = "Lunch 4b Ends In:&nbsp"; 
var Text4b = text4b.fontcolor("white"); //controls the "Ends In:" text color
 
var end4b = "Lunch 4b is Over!";
var End4b = end4b.fontcolor("white");

var text4c = "Lunch 4c Ends In:&nbsp"
var Text4c = text4c.fontcolor("white");

var end4c = "Lunch 4c is Over!"
var End4c = end4c.fontcolor("white");

var text5 = "Period 5 Ends In:&nbsp"
var Text5 = text5.fontcolor("white");

var end5 = "Period 5 is Over!"
var End5 = end5.fontcolor("white");

var text6 = "Period 6 Ends In:&nbsp"
var Text6 = text6.fontcolor("white");

var end6 = "Period 6 is Over!"
var End6 = end6.fontcolor("white");






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
       displayPeriod1 = End1; 
    } else {
    displayPeriod1 = Text1 + hh + ":" + mm + ":" + realSeconds;
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
     displayPeriod2 = End2;
    } else {
    displayPeriod2 = Text2 + hh + ":" + mm + ":" + realSeconds;
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
      displayPeriod3 = End3;
    } else {
    displayPeriod3 = Text3 + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period3, 100);
  }
  
   function periodx() { //Period X
    var start = new Date;
    start.setHours(hx, mx, 0);
    var now = new Date;
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
     if (hh > 8){
       displayPeriodx = Txtx;
     }else{
       displayPeriodx = Textx + hh + ":" + mm + ":" + realSeconds;
     }
     
     setTimeout(periodx, 100);
     if (schedule == "B" || schedule == "C"){
       displayPeriodx = Endx; 
     }
   }
     
     
     
     
 
  
  
  
  
  
  
  
  
  
  
 function period4() { //4a
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
      displayPeriod4 = End4a;
    }else {
    displayPeriod4 = fourA + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period4, 100);
    if (schedule == "A"){
      h4 = 11; m4 = 16;
    } else if (schedule == "B"){
      h4 = 12; m4 = 5;
    } else if (schedule == "C"){
      h4 = 16; m4 = 52; //Period 5 if the schedule equal C
    }
    if (schedule == "A"){
      if (hh > 8){
        displayPeriod4 = End4a;
      }else{
        displayPeriod4 = fourA + hh + ":" + mm + ":" + realSeconds;
      }
    }else if (schedule == "B"){
      if (hh > 8){
        displayPeriod4 = End4a;
      }else{
        displayPeriod4 = fourA + hh + ":" + mm + ":" + realSeconds;
      }
    }else if (schedule == "C"){
      if (hh > 8){
        displayPeriod4 = End5
      }else{
        displayPeriod4 = Text5 + hh + ":" + mm + ":" + realSeconds;
      }
    }
     
  }
  
  
   function period5() { //4b
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
      displayPeriod5 = End4b;
    }else {
    displayPeriod5 = Text4b + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period5, 100);
    if (schedule == "A"){
      h5 = 11; m5 = 46;
    } else if (schedule == "B"){
      h5 = 11; m5 = 45;
    } else if (schedule == "C"){
      h5 = 10; m5 = 54; //Period 6 if the schedule equal C
    }
    if (schedule == "A"){
      if (hh > 8){
        displayPeriod5 = End4b;
      }else{
        displayPeriod5 = Text4b + hh + ":" + mm + ":" + realSeconds;
      }
    }else if (schedule == "B"){
      if (hh > 8){
        displayPeriod5 = End4b;
      }else{
        displayPeriod5 = Text4b + hh + ":" + mm + ":" + realSeconds;
      }
    }else if (schedule == "C"){
      if (hh > 8){
        displayPeriod5 = End6;
      }else{
        displayPeriod5 = Text6 + hh + ":" + mm + ":" + realSeconds;
      }
    }
     
  }
  
   function period6() { //4c
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
      displayPeriod6 = End4c;
    }else {
    displayPeriod6 = Text4c + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period6, 100);
    if (schedule == "A"){
      h6 = 12; m6 = 12;
    } else if (schedule == "B"){
      h6 = 12; m6 = 32;
    } else if (schedule == "C"){
      h6 = 11; m6 = 28; //lunch 4c if the schedule equal C
    }
    if (schedule == "A"){
      if (hh > 8){
        displayPeriod6 = End4c;
      }else{
        displayPeriod6 = Text4c + hh + ":" + mm + ":" + realSeconds;
      }
    }else if (schedule == "B"){
      if (hh > 8){
        displayPeriod6 = End4c;
      }else{
        displayPeriod6 = Text4c + hh + ":" + mm + ":" + realSeconds;
      }
    }else if (schedule == "C"){
      if (hh > 8){
        displayPeriod5 = End6;
      }else{
        displayPeriod5 = Text6 + hh + ":" + mm + ":" + realSeconds;
      }
    }
     
  }
  
  
  
  
  
  
  
 
 function period6() { //4c
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
      displayPeriod6 = End;
    } else {
    displayPeriod6 = Text + hh + ":" + mm + ":" + realSeconds;
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
      displayPeriod7 = End;
    } else {
    displayPeriod7 = Text + hh + ":" + mm + ":" + realSeconds;
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
      displayPeriod8 = End;
    } else {
    displayPeriod8 = Text + hh + ":" + mm + ":" + realSeconds;
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
    var endtxt1 = hh + ":" + mm + ":" + realSeconds; 
    var EndTxt = endtxt1.fontcolor("#00BD56"); //controls the "Ends In:" text color
     if (hh > 8) {
      displayPeriod9 = End9;
    } else {
    displayPeriod9 = Text9 + EndTxt;
    }
    setTimeout(period9, 100);
  }
  
  displayPeriods();
  document.addEventListener('DOMContentLoaded', getRealSeconds);
  document.addEventListener('DOMContentLoaded', period1);
  document.addEventListener('DOMContentLoaded', period2);
  document.addEventListener('DOMContentLoaded', period3);
  document.addEventListener('DOMContentLoaded', periodx);  
  document.addEventListener('DOMContentLoaded', period4);
  document.addEventListener('DOMContentLoaded', period5);
  document.addEventListener('DOMContentLoaded', period6);
  document.addEventListener('DOMContentLoaded', period7);
  document.addEventListener('DOMContentLoaded', period8);
  document.addEventListener('DOMContentLoaded', period9);
})();










