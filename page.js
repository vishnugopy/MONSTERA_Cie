
//scroll animation
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

 //changer le image qui est dans le home page
 let myImage = document.getElementById("mainImage");

 let imageArray = ["imgs/entreprise.jpg","imgs/entreprise4.jpg",
 "imgs/entreprise3.jpg"];
  
 let imageIndex = 0; 
 
 function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
 imageIndex = (imageIndex + 1) % imageArray.length;
 }
 
 setInterval(changeImage, 2500);