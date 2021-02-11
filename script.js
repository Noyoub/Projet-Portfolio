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
var img1 = document.getElementById('img1');
var content1 = document.getElementById('content1');

var img2 = document.getElementById('img2');
var content2 = document.getElementById('content2');

var img3 = document.getElementById('img3');
var content3 = document.getElementById('content3');

var img4 = document.getElementById('img4');
var content4 = document.getElementById('content4');

img1.addEventListener("mouseenter", function(){ 
  content1.style.visibility="visible"; });
img1.addEventListener("mouseleave", function(){ 
  content1.style.visibility="hidden"; });

img2.addEventListener("mouseenter", function(){ 
  content2.style.visibility="visible"; });
img2.addEventListener("mouseleave", function(){ 
  content2.style.visibility="hidden"; });

img3.addEventListener("mouseenter", function(){ 
  content3.style.visibility="visible"; });
img3.addEventListener("mouseleave", function(){ 
  content3.style.visibility="hidden"; });

img4.addEventListener("mouseenter", function(){ 
  content4.style.visibility="visible"; });
img4.addEventListener("mouseleave", function(){ 
  content4.style.visibility="hidden"; });

