


//function myFunction(){
//  setTimeout(function(){preloader.style.display = "none"}, 1980);
//}

var schedule = "A";
function Apressed() {
  schedule = "A";
  document.getElementById("Abutton").style.backgroundColor = "118ab2";////
  document.getElementById("Bbutton").style.backgroundColor = "90e0ef";
  document.getElementById("Cbutton").style.backgroundColor = "90e0ef";
  defineTiming();
}
function Bpressed() {
  schedule = "B";
  document.getElementById("Abutton").style.backgroundColor = "90e0ef";
  document.getElementById("Bbutton").style.backgroundColor = "118ab2";////
  document.getElementById("Cbutton").style.backgroundColor = "90e0ef";
  defineTiming();
}
function Cpressed() {
  schedule = "C";
  document.getElementById("Abutton").style.backgroundColor = "90e0ef";
  document.getElementById("Bbutton").style.backgroundColor = "90e0ef";
  document.getElementById("Cbutton").style.backgroundColor = "118ab2";////
  defineTiming();
}

var h1;
var m1;
var h2;
var m2;
var h3;
var m3;
var hx;
var mx;
var h4;
var m4;
var h5;
var m5;
var h6;
var m6;
var h7;
var m7;
var h8;
var m8;
var h9;
var m9;

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

function defineTiming() {
  //sets the variables of each period end time based on the schedule

  if (schedule == "A") {
    h1 = 23;
    m1 = 37;
    h2 = 23;
    m2 = 24;
    h3 = 23;
    m3 = 0;
    hx = 23;
    mx = 0; //period X
    h4 = 21;
    m4 = 16; //4a
    h5 = 19;
    m5 = 46; //4b
    h6 = 19;
    m6 = 12; //4c
    h7 = 19;
    m7 = 3;
    h8 = 19;
    m8 = 50;
    h9 = 23;
    m9 = 37;
  } else {
    if (schedule == "B") {
      h1 = 23;
      m1 = 37;
      h2 = 23;
      m2 = 24;
      h3 = 23;
      m3 = 11;
      h4 = 23;
      m4 = 58;
      h5 = 23;
      m5 = 45;
      h6 = 23;
      m6 = 32;
      h7 = 23;
      m7 = 19;
      h8 = 23;
      m8 = 6;
      h9 = 23;
      m9 = 53;
    } else {
      if (schedule == "C") {
        h1 = 23;
        m1 = 22;
        h2 = 23;
        m2 = 4;
        h3 = 23;
        m3 = 46;
        h4 = 23;
        m4 = 20; // 5th Period
        h5 = 23;
        m5 = 54; // 6th Period
        h6 = 23;
        m6 = 28; // lunch 4a
        h7 = 23;
        m7 = 2; // lunch 4b
        h8 = 23;
        m8 = 31; // lunch 4c
        h9 = 23;
        m9 = 0; // Period 7
      }
    }
  }
}

function displayPeriods() {
  setTimeout(function() {
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
  }, 0);
}

var realSeconds;

(function() {
  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function getRealSeconds() {
    var start = new Date();
    start.setHours(21, 0, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var ss = pad(remain % 60);
    realSeconds = ss;
    setTimeout(getRealSeconds, 1000);
  }

  function period1() {
    var start = new Date();
    start.setHours(h1, m1, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    //var text1 = "Period 1 Ends In: &nbsp" + hh + ":" + mm + ":" + realSeconds;
    //var Text12 = text1.fontcolor("white"); //controls the "Ends In:" text color
    // var Text1 = Text12.fontsize(9);

    if (hh > 8) {
      document.getElementById("period1").innerHTML = "Period 1 Is Over!";
      //displayPeriod1 = End1;
    } else {
      document.getElementById("period1").innerHTML =
        "Period 1 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      //displayPeriod1 = Text1 + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period1, 100);
    if (hh > 8) {
      document.getElementById("period1").style.fontSize = "7.69vmin";
    } else {
      document.getElementById("period1").style.fontSize = "7vh";
    }
  }

  function period2() {
    var start = new Date();
    start.setHours(h2, m2, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("period2").innerHTML = "Period 2 Is Over!";
      //displayPeriod2 = End2;
    } else {
      document.getElementById("period2").innerHTML =
        "Period 2 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      //displayPeriod2 = Text2 + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period2, 100);
    if (hh > 8) {
      document.getElementById("period2").style.fontSize = "7.68vmin";
    } else {
      document.getElementById("period2").style.fontSize = "7vmin";
    }
  }

  function period3() {
    var start = new Date();
    start.setHours(h3, m3, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("period3").innerHTML = "Period 3 Is Over!";
      //displayPeriod2 = End2;
    } else {
      document.getElementById("period3").innerHTML =
        "Period 3 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      //displayPeriod2 = Text2 + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period3, 100);
    if (hh > 8) {
      document.getElementById("period3").style.fontSize = "7.68vmin";
    } else {
      document.getElementById("period3").style.fontSize = "7vmin";
    }
  }

  function periodx() {
    //Period X
    var start = new Date();
    start.setHours(hx, mx, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("periodx").innerHTML = "Period X Is Over!";
      document.getElementById("periodx").style.fontSize = "7.5vh";
      //displayPeriodx = Txtx;
    } else {
      document.getElementById("periodx").innerHTML =
        "Period X Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      document.getElementById("periodx").style.fontSize = "6.89vh";
      //displayPeriodx = Textx + hh + ":" + mm + ":" + realSeconds;
    }

    setTimeout(periodx, 100);
    if (schedule == "B" || schedule == "C") {
      document.getElementById("periodx").innerHTML = "No Period X Today!";
      document.getElementById("periodx").style.fontSize = "6.66vh";
      //displayPeriodx = Endx;
    }
  }

  function period4() {
    //4a
    var start = new Date();
    start.setHours(h4, m4, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("period4").innerHTML = "Lunch 4a Is Over!";
      document.getElementById("period4").style.fontSize = "7.26vh";
      //displayPeriod4 = End4a;
    } else {
      document.getElementById("period4").innerHTML =
        "Lunch 4a Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      document.getElementById("period4").style.fontSize = "6.75vh";
      //displayPeriod4 = fourA + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period4, 100);
    if (schedule == "A") {
      h4 = 23;
      m4 = 16;
    } else if (schedule == "B") {
      h4 = 23;
      m4 = 5;
    } else if (schedule == "C") {
      h4 = 23;
      m4 = 52; //Period 5 if the schedule equal C
    }

    if (schedule == "A") {
      if (hh > 8) {
        document.getElementById("period4").innerHTML = "Lunch 4a Is Over!";
        document.getElementById("period4").style.fontSize = "7.26vh";
        //displayPeriod4 = End4a;
      } else {
        document.getElementById("period4").innerHTML =
          "Lunch 4a Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period4").style.fontSize = "6.75vh";
        //displayPeriod4 = fourA + hh + ":" + mm + ":" + realSeconds;
        //document.getElementById("displayPeriod4").style.fontSize = "xx-large";
      }
    } else if (schedule == "B") {
      if (hh > 8) {
        document.getElementById("period4").innerHTML = "Lunch 4a Is Over!";
        document.getElementById("period4").style.fontSize = "7.293vh";
        //displayPeriod4 = End4a;
      } else {
        document.getElementById("period4").innerHTML =
          "Lunch 4a Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period4").style.fontSize = "6.77vh";
        //displayPeriod4 = fourA + hh + ":" + mm + ":" + realSeconds;
        //document.getElementById("displayPeriod4").style.fontSize = "xx-large";
      }
    } else if (schedule == "C") {
      if (hh > 8) {
        document.getElementById("period4").innerHTML = "Period 5 Is Over!";
        document.getElementById("period4").style.fontSize = "7.48vh";
        //displayPeriod4 = End5
      } else {
        document.getElementById("period4").innerHTML =
          "Period 5 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period4").style.fontSize = "7vh";
        //displayPeriod4 = Text5 + hh + ":" + mm + ":" + realSeconds;
        //document.getElementById("displayPeriod4").style.fontSize = "xx-large";
      }
    }
  }

  function period5() {
    //4b
    var start = new Date();
    start.setHours(h5, m5, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("period5").innerHTML = "Lunch 4b Is Over!";
      document.getElementById("period5").style.fontSize = "7.16vh";
      //displayPeriod5 = End4b;
    } else {
      document.getElementById("period5").innerHTML =
        "Lunch 4b Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      document.getElementById("period5").style.fontSize = "7vh";
      //displayPeriod5 = Text4b + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period5, 100);
    if (schedule == "A") {
      h5 = 23;
      m5 = 46;
    } else if (schedule == "B") {
      h5 = 23;
      m5 = 45;
    } else if (schedule == "C") {
      h5 = 23;
      m5 = 54; //Period 6 if the schedule equal C
    }
    if (schedule == "A") {
      if (hh > 8) {
        document.getElementById("period5").innerHTML = "Lunch 4b Is Over!";
        document.getElementById("period5").style.fontSize = "7.16vh";
      } else {
        document.getElementById("period5").innerHTML =
          "Lunch 4b Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period5").style.fontSize = "6.71vh";
        //displayPeriod5 = Text4b + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "B") {
      if (hh > 8) {
        document.getElementById("period5").innerHTML = "Lunch 4b Is Over!";
        document.getElementById("period5").style.fontSize = "7.16vh";
      } else {
        document.getElementById("period5").innerHTML =
          "Lunch 4b Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period5").style.fontSize = "6.75vh";
        //displayPeriod5 = Text4b + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "C") {
      if (hh > 8) {
        document.getElementById("period5").innerHTML = "Period 6 Is Over!";
        document.getElementById("period5").style.fontSize = "7.48vh";
      } else {
        document.getElementById("period5").innerHTML =
          "Period 6 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period5").style.fontSize = "7vh";
        //displayPeriod5 = Text6 + hh + ":" + mm + ":" + realSeconds;
      }
    }
  }

  function period6() {
    //4c
    var start = new Date();
    start.setHours(h6, m6, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("period6").innerHTML = "Lunch 4c Is Over!";
      document.getElementById("period6").style.fontSize = "7.17vh";
      //displayPeriod6 = End4c;
    } else {
      document.getElementById("period6").innerHTML =
        "Lunch 4c Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      document.getElementById("period6").style.fontSize = "7vh";
      //displayPeriod6 = Text4c + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period6, 100);
    if (schedule == "A") {
      h6 = 23;
      m6 = 12;
    } else if (schedule == "B") {
      h6 = 23;
      m6 = 32;
    } else if (schedule == "C") {
      h6 = 23;
      m6 = 28; //lunch 4c if the schedule equal C
    }

    if (schedule == "A") {
      if (hh > 8) {
        document.getElementById("period6").innerHTML = "Lunch 4c Is Over!";
        document.getElementById("period6").style.fontSize = "7.17vh";
        //displayPeriod6 = End4c;
      } else {
        document.getElementById("period6").innerHTML =
          "Lunch 4c Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period6").style.fontSize = "6.77vh";
        //displayPeriod6 = Text4c + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "B") {
      if (hh > 8) {
        document.getElementById("period6").innerHTML = "Lunch 4c Is Over!";
        document.getElementById("period6").style.fontSize = "7.17vh";
        //displayPeriod6 = End4c;
      } else {
        document.getElementById("period6").innerHTML =
          "Lunch 4c Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period6").style.fontSize = "6.74vh";
        //displayPeriod6 = Text4c + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "C") {
      if (hh > 8) {
        document.getElementById("period6").innerHTML = "Lunch 4a Is Over!";
        document.getElementById("period6").style.fontSize = "7.293vh";
        //displayPeriod6 = End4a;
      } else {
        document.getElementById("period6").innerHTML =
          "Lunch 4a Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period6").style.fontSize = "6.79vh";
        //displayPeriod6 = fourA + hh + ":" + mm + ":" + realSeconds;
      }
    }
  }

  function period7() {
    //Period 5
    var start = new Date();
    start.setHours(h6, m6, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("period7").innerHTML = "Period 5 Is Over!";
      document.getElementById("period7").style.fontSize = "7.48vh";
      //displayPeriod7 = End5;
    } else {
      document.getElementById("period7").innerHTML =
        "Period 5 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      document.getElementById("period7").style.fontSize = "7vh";
      //displayPeriod7 = Text5 + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period7, 100);
    if (schedule == "A") {
      h7 = 21;
      m7 = 3;
    } else if (schedule == "B") {
      h7 = 21;
      m7 = 19;
    } else if (schedule == "C") {
      h7 = 21;
      m7 = 2; //Period 5 if the schedule equal C
    }
    if (schedule == "A") {
      if (hh > 8) {
        document.getElementById("period7").innerHTML = "Period 5 Is Over!";
        document.getElementById("period7").style.fontSize = "7.48vh";
        //displayPeriod7 = End5;
      } else {
        document.getElementById("period7").innerHTML =
          "Period 5 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period7").style.fontSize = "7vh";
        //displayPeriod7 = Text5 + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "B") {
      if (hh > 8) {
        document.getElementById("period7").innerHTML = "Period 5 Is Over!";
        document.getElementById("period7").style.fontSize = "7.48vh";
        //displayPeriod7 = End5;
      } else {
        document.getElementById("period7").innerHTML =
          "Period 5 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period7").style.fontSize = "7vh";
        //displayPeriod7 = Text5 + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "C") {
      if (hh > 8) {
        document.getElementById("period7").innerHTML = "Lunch 4b Is Over!";
        document.getElementById("period7").style.fontSize = "7.16vh";
      } else {
        document.getElementById("period7").innerHTML =
          "Lunch 4b Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period7").style.fontSize = "6.8vh";
        //displayPeriod7 = Text4b + hh + ":" + mm + ":" + realSeconds;
      }
    }
  }

  function period8() {
    //Period 6
    var start = new Date();
    start.setHours(h6, m6, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh > 8) {
      document.getElementById("period8").innerHTML = "Period 6 Is Over!";
      document.getElementById("period8").style.fontSize = "7.48vh";
      //displayPeriod8 = End6;
    } else {
      document.getElementById("period8").innerHTML =
        "Period 6 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      document.getElementById("period8").style.fontSize = "7vh";
      //displayPeriod8 = Text6 + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period8, 100);
    if (schedule == "A") {
      h8 = 21;
      m8 = 3;
    } else if (schedule == "B") {
      h8 = 21;
      m8 = 19;
    } else if (schedule == "C") {
      h8 = 21;
      m8 = 2; //Period 5 if the schedule equal C
    }

    if (schedule == "A") {
      if (hh > 8) {
        document.getElementById("period8").innerHTML = "Period 6 Is Over!";
        document.getElementById("period8").style.fontSize = "7.48vh";
        //displayPeriod8 = End6;
      } else {
        document.getElementById("period8").innerHTML =
          "Period 6 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period8").style.fontSize = "7vh";
        //displayPeriod8 = Text6 + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "B") {
      if (hh > 8) {
        document.getElementById("period8").innerHTML = "Period 6 Is Over!";
        document.getElementById("period8").style.fontSize = "7.48vh";
        //displayPeriod8 = End6;
      } else {
        document.getElementById("period8").innerHTML =
          "Period 6 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period8").style.fontSize = "7vh";
        //displayPeriod8 = Text6 + hh + ":" + mm + ":" + realSeconds;
      }
    } else if (schedule == "C") {
      if (hh > 8) {
        document.getElementById("period8").innerHTML = "Lunch 4c Is Over!";
        document.getElementById("period8").style.fontSize = "7.17vh";
        //displayPeriod8 = End4c;
      } else {
        document.getElementById("period8").innerHTML =
          "Lunch 4c Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
        document.getElementById("period8").style.fontSize = "6.77vh";
        //displayPeriod8 = Text4c + hh + ":" + mm + ":" + realSeconds;
      }
    }
  }

  function period9() {
    var start = new Date();
    start.setHours(h9, m9, 0);
    var now = new Date();
    if (now > start) {
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var endtxt1 = hh + ":" + mm + ":" + realSeconds;
    //    var EndTxt = endtxt1.fontcolor("#00BD56"); //controls the "Ends In:" text color
    //    if (schedule == "C"){
    //      End7 = "<p style=font-size:7.45vh>Period 7 Is Over!</p>";
    //    }
    if (hh > 8) {
      document.getElementById("period9").innerHTML = "Period 7 Is Over!";
      document.getElementById("period9").style.fontSize = "7.48vh";
      //displayPeriod9 = End7;
    } else {
      document.getElementById("period9").innerHTML =
        "Period 7 Ends In:&nbsp" + hh + ":" + mm + ":" + realSeconds;
      document.getElementById("period9").style.fontSize = "7vh";
      //displayPeriod9 = Text7 + hh + ":" + mm + ":" + realSeconds;
    }
    setTimeout(period9, 100);
  }

  displayPeriods();
  document.addEventListener("DOMContentLoaded", getRealSeconds);
  document.addEventListener("DOMContentLoaded", period1);
  document.addEventListener("DOMContentLoaded", period2);
  document.addEventListener("DOMContentLoaded", period3);
  document.addEventListener("DOMContentLoaded", periodx);
  document.addEventListener("DOMContentLoaded", period4);
  document.addEventListener("DOMContentLoaded", period5);
  document.addEventListener("DOMContentLoaded", period6);
  document.addEventListener("DOMContentLoaded", period7);
  document.addEventListener("DOMContentLoaded", period8);
  document.addEventListener("DOMContentLoaded", period9);
  //})();
})();













