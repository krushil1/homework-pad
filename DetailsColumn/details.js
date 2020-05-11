
var colorCount = 0;
var hide = 0;
function details()
{ 

  if (hide == 0) {
  document.getElementById("detail").style.top = "2%";
  hide = 1;
  }
  else {
  document.getElementById("detail").style.top = "-1000px";
    hide = 0;
  }
}
