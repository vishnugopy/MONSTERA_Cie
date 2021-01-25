let bar = document.querySelector("#main");
let logo = document.querySelector(".logo");
let space = bar.offsetTop;


function helloBuddy() {
  if (window.scrollY >= space) {
    bar.classList.add("newnav");
    logo.style.maxWidth = "10%";
  }
  else {
    bar.classList.remove("newnav");
    logo.style.maxWidth = "0";
  }
}

window.addEventListener("scroll", helloBuddy);