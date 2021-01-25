let bar = document.querySelector("#main");
let logo = document.querySelector(".logo");
let main = document.querySelector("main");
let space = bar.offsetTop;


function helloBuddy() {
  if (window.scrollY >= space) {
    bar.classList.add("newnav");
    logo.style.maxWidth = "10%";
    main.style.paddingTop = "10%";
  }
  else {
    bar.classList.remove("newnav");
    logo.style.maxWidth = "0";
    main.style.paddingTop = "5%";
  }
}

window.addEventListener("scroll", helloBuddy);


let foot = document.querySelector("footer");
foot.innerHTML = `<div>
<nav>
<a href="index.html">Accueil</a></li>
<a href="#">Produits</a></li>
<a href="#">Services</a></li>
<a href="#">Contact</a></li>
</nav>
</div>
<div class="socials">
  <a href="#"><i class="fab fa-facebook-square"></i></a>
  <a href="#"><i class="fab fa-instagram"></i></a>
  <a href="#"><i class="fab fa-twitter"></i></a>
  <a href="#"><i class="fab fa-youtube"></i></a>
  <a href="#"><i class="fab fa-pinterest-square"></i></a>
  <a href="#"><i class="fab fa-snapchat-square"></i></a>
</div>
<span>&copy; MONSTERA Team 2020</span> `