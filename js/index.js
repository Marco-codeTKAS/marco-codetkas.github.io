
let observerMenu = new IntersectionObserver(AnimaMenu, options={threshold:1,});
let observerHabilities = new IntersectionObserver(AnimaHabilities, options={threshold:0.19,});
const habilitiesImage= document.querySelectorAll(".habiliti-img");
const selecHeadder = document.querySelector("#headder");
observerMenu.observe(selecHeadder);
observerHabilities.observe(habilitiesImage[0]);

function HoverLogo() {
  let logoImg = document.getElementById("logo-img");
  let logoName = document.createElement("div");
  logoName.className = "logo-name";

  let text = document.createTextNode("Marco Antonio");
  logoName.appendChild(text);

  logo.addEventListener("mouseover", () => {    
    logo.appendChild(logoName);
  });

  logo.addEventListener("mouseleave", () => {
    // logo.style.removeProperty("animation-play-state");
    logo.removeChild(logoName);
    logo.classList.add("act-animacion");
  });

}
function AnimaMenu(entries) {
  const logo = document.querySelector("#logo");
  const selecNav = document.getElementById("nav");
  if (entries[0].isIntersecting) {
    selecNav.classList.replace("navscroll", "nav-top");
    logo.setAttribute("style", "top:10px;");
  } else {
    if (entries[0].isIntersecting == false) {
      selecNav.classList.replace("nav-top", "navscroll");
      logo.setAttribute("style", "top:0px;");
    }
  }
}
function AnimaHabilities(entries) {   
  const iconsJobs = document.getElementById("icons").children;
  console.log(entries[0]);
  if (entries[0].isIntersecting) {
        
    habilitiesImage[0].classList.remove("img-animation-out");
    habilitiesImage[0].classList.add("img-animation-in");
        
    habilitiesImage[1].classList.remove("img-animation-out");
    habilitiesImage[1].classList.add("img-animation-in");
        for (let index = 0; index < iconsJobs.length; index++) {
          iconsJobs[index].classList.remove("img-animation-out");
          iconsJobs[index].classList.add("img-animation-in");
        }
        cont = 1;
        window.event;
  } else {
    
    // habilitiesImage[0].classList.remove("img-animation-in");
    habilitiesImage[0].classList.toggle("img-animation-out");

    // habilitiesImage[1].classList.remove("img-animation-in");
    habilitiesImage[1].classList.toggle("img-animation-out");
         
         for (let index = 0; index < iconsJobs.length; index++) {           
          //  iconsJobs[index].classList.remove("img-animation-in");
           iconsJobs[index].classList.toggle("img-animation-out");
    } 
    
      }
}


HoverLogo();