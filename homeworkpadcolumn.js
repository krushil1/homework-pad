var hide1 = 0;
function Homeworkpad()
{ 

  if (hide1 == 0) {
  document.getElementById("homeworkpad").style.top = "0%";
  hide1 = 1;
  }
  else {
  document.getElementById("homeworkpad").style.top = "-1000px";
    hide1 = 0;
  }
}
