var Index = 0;

animation();

function animation() {
  var i;
  var x = document.getElementsByClassName("diapo");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  Index++;
  if (Index > x.length) {Index = 1}    
  x[Index-1].style.display = "block";  
  setTimeout(animation, 3000); // Change tous les 3 seconds
}