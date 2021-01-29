
//aficher le footer
let foot = document.querySelector("footer");
 foot.innerHTML = `<div>
 <nav>
 <a href="../index.html">Accueil</a></li>
 <a href="../Product_page/product.html">Produits</a></li>
 <a href="../service_page/services.html">Services</a></li>
 <a href="../contact_page/contact.html">Contact</a></li>
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


//aficher le nav
let sub  = document.querySelector("#subnav");
sub.innerHTML = ` 
<ul class="listofnavs">
  <li class="sublogo"><a href="../index.html"><img  src="../logos/Smalllogo.svg" alt="small_logo"></a></li>
  <li><a href="../index.html">Accueil</a></li>
  <li><a href="../Product_page/product.html">Produits</a></li>
  <li><a href="../service_page/services.html">Services</a></li>
  <li><a href="../contact_page/contact.html">Contact</a></li>
  <li><a class="button" href="#"><i class="fas fa-shopping-cart"></i>Panier</a></li>
</ul>
`



