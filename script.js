//Gestion du menu responsive

var x = document.querySelector("nav ul");

function myFunction() {
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function myFunction2() {
  if(window.innerWidth <= 1080)
    x.style.display = "none";
}

//Animations de la section "Header"

const txtAnim = document.querySelector('.title h2');

new Typewriter(txtAnim, {
  deleteSpeed: 10
})
.changeDelay(30)
.typeString('Bienvenue sur mon portfolio !')
.pauseFor(1000)
.deleteChars(29)
.typeString('Je suis étudiant en informatique, passionné du développement web.')
.start()

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const TL = gsap.timeline();

  TL
  .staggerTo(".title h1", 1, { top: 0, opacity: 1, ease: "back.out(3.7)" }, 0.2)
  .staggerTo(".title h2", 1, { right: 0, opacity: 1, ease: "back.out(1.7)" }, 0.2)
  .staggerTo(".dl_cv", 1, { opacity: 1, ease: "power2.out" }, 0.2, "-=1");
});



//Animations de la section "skills"

var descrips_skills = document.querySelectorAll(".responsive_box p");
var skills_boxs = document.querySelectorAll('.responsive_box');

for (let index = 0; index < descrips_skills.length; index++) {
  skills_boxs[index].addEventListener('mouseenter', event => {
    if(window.innerWidth >= 1080)
      descrips_skills[index].style.filter = "invert(100%)";
  })
  skills_boxs[index].addEventListener('mouseleave', event => {
    if(window.innerWidth >= 1080)
      descrips_skills[index].style.filter = "invert(0)";
  })
}

//Animations de la section "portfolio"

var tl_portfolio = gsap.timeline({
  scrollTrigger: {
    trigger: "#portfolio"
  }
});

tl_portfolio
.to(".c1", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)"})
.to(".c2", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)"}, "-=0.5")
.to(".c3", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)"})
.to(".c4", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)"}, "-=0.5")
.to(".c5", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)"}, "-=0.5")

//Animations de la section "footer

var tl_footer = gsap.timeline({
  scrollTrigger: {
    trigger: "footer a"
  }
});

tl_footer
.to("#gt_logo", { y: 0, opacity: 1, duration: 0.3, ease: "back.out(0.7)"})
.to("#ig_logo", { y: 0, opacity: 1, duration: 0.3, ease: "back.out(0.7)"}, "-=0.2")
.to("#ld_logo", { y: 0, opacity: 1, duration: 0.3, ease: "back.out(0.7)"}, "-=0.2");

