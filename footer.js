
//aficher le footer
let foot = document.querySelector("footer");
 foot.innerHTML = `<div>
 <nav>
 <a href="../index.html">Accueil</a></li>
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


//aficher le nav
let sub  = document.querySelector("#subnav");
sub.innerHTML = ` <nav id="">
<ul>
  <li class="logo"><a href="#header"><img src="LOGOS/Smalllogo.svg" alt="small_logo"></a></li>
  <li><a href="../index.html">Accueil</a></li>
  <li><a href="Product_page/product.html">Produits</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact</a></li>
  <li><a class="button" href="#"><i class="fas fa-shopping-cart"></i>Panier</a></li>
</ul>
</nav>`

