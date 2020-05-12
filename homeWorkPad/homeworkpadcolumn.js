
var colorCount = 0;
var hide = 0;
function Homeworkpad()
{ 

  if (hide == 0) {
  document.getElementById("homeworkpad").style.top = "4%";
  hide = 1;
  }
  else {
  document.getElementById("homeworkpad").style.top = "-1000px";
    hide = 0;
  }
}


