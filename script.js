//Gestion du menu responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

//Gestion affichage des descriptions des projets
var containers = document.getElementsByClassName('container2');
var contents = document.getElementsByClassName('content2');


containers[0].addEventListener("mouseenter", function(){ 
  contents[0].style.visibility="visible"; });
containers[0].addEventListener("mouseleave", function(){ 
  contents[0].style.visibility="hidden"; });

containers[1].addEventListener("mouseenter", function(){ 
  contents[1].style.visibility="visible"; });
containers[1].addEventListener("mouseleave", function(){ 
  contents[1].style.visibility="hidden"; });

containers[2].addEventListener("mouseenter", function(){ 
  contents[2].style.visibility="visible"; });
containers[2].addEventListener("mouseleave", function(){ 
  contents[2].style.visibility="hidden"; });

containers[3].addEventListener("mouseenter", function(){ 
  contents[3].style.visibility="visible"; });
containers[3].addEventListener("mouseleave", function(){ 
  contents[3].style.visibility="hidden"; });

