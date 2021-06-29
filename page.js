
//scroll animation
let bar = document.querySelector("#main");
let logo = document.querySelector(".logo");
let main = document.querySelector("main");
let space = bar.offsetTop;


function fixMyNav() {
  if (window.scrollY >= space) {
    bar.classList.add("newnav");
    logo.style.maxWidth = "25%";
    main.style.paddingTop = "10%";
  }
  else {
    bar.classList.remove("newnav");
    logo.style.maxWidth = "0";
    main.style.paddingTop = "5%";
  }
}
window.addEventListener("scroll", fixMyNav);

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


 let foot = document.querySelector("footer");
 foot.innerHTML = `<div>
 <nav>
 <a href="index.html" >Accueil</a></li>
 <a href="Product_page/produits.html">Produits</a></li>
 <a href="service_page/services.html">Services</a></li>
 <a href="contact_page/contact.html">Contact</a></li>
 </nav>
 </div>
 <div class="socials">
   <a href="#" target="_blank" ><i class="fab fa-facebook-square"><span>Facebook<span></i></a>
   <a href="#" target="_blank" ><i class="fab fa-instagram"><span>Instagram<span></i></a>
   <a href="#" target="_blank" ><i class="fab fa-twitter"><span>Twitter<span></i></a>
   <a href="#" target="_blank" ><i class="fab fa-youtube"><span>YouTube<span></i></a>
   <a href="#" target="_blank" ><i class="fab fa-pinterest-square"><span>Pinterest<span></i></a>
   <a href="#" target="_blank" ><i class="fab fa-snapchat-square"><span>Snapchat<span></i></a>
 </div>
 <span>&copy; MONSTERA Team 2020</span> `

 let easter = document.querySelector('h2');
 function easteregg(){
    document.documentElement.style.setProperty('--green', '#393939');
    document.documentElement.style.setProperty('--brown', 'white');
    document.documentElement.style.setProperty('--whitish', '#EDE8E2');
    document.documentElement.style.setProperty('--white', '#000000');
    document.documentElement.style.setProperty('--black', '#ffffff');
 }

 easter.addEventListener("drag",easteregg);

//random quotes
 const quotesData = [
  {
    "text": "Tenez les plantes éloignées de toute source de chaleur."
  },
  {
    "text": "Ne placez pas vos plantes dans l'obscurité, les plantes ont besoin de lumière pour se nourrir."
  },
  {
    "text": "N'utilisez pas d'eau froide pour arroser vos plantes, mais de l'eau à température ambiante."
  },
  {
    "text": "Ne laissez pas d'eau dans la soucoupe, cela peut provoquer la pourriture des racines."
  },
  {
    "text": "Ne pas trop arroser, même les plantes tropicales."
  }

]


let quoteplace = document.querySelector('#quotes');
let currentQuote = '';

function getRandomQuote() {
  const randomQuote = quotesData[
    Math.floor(Math.random() * quotesData.length)
  ];

  currentQuote = randomQuote.text;
  quoteplace.innerHTML = `&ldquo; ${currentQuote} &rdquo;` ;

}

setInterval(getRandomQuote,3000);

 

