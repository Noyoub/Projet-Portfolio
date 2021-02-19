//Gestion du menu responsive

var x = document.querySelector("header ul");

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

//Animation titre

const txtAnim = document.querySelector('.title h2');

new Typewriter(txtAnim, {
  deleteSpeed: 30
})
.changeDelay(30)
.typeString('Bienvenue sur mon portfolio !')
.pauseFor(300)
.deleteChars(29)
.typeString('Je suis étudiant en informatique, passionné du développement web.')
.start()

gsap.registerPlugin(ScrollTrigger);

//Animations de la section "about"

window.addEventListener("load", () => {
  const TL = gsap.timeline();

  TL
  .staggerTo(".title h1", 1, { top: 0, opacity: 1, ease: "back.out(8.7)" }, 0.2)
  .staggerFrom(".about_img img", 1, { right: -500, opacity: 0, ease: "power2.out" }, 0.2, "-=1")
  .staggerTo(".about_img img", 1, { opacity: 1}, 0.2, "-=1")
  .staggerTo(".title h2", 1, { right: 0, opacity: 1, ease: "back.out(1.7)" }, 0.2)
  .staggerTo(".dl_cv", 1, { opacity: 1, ease: "power2.out" }, 0.2, "-=1");
});

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


