
function date(){
  var n =  new Date();
  var y = n.getFullYear();
  var m = n.getMonth() + 1;
  var d = n.getDate();
  document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
}
     
   