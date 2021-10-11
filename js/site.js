//kode javascript untuk index.html
const hamburger = document.getElementById('hamburger');
const nav_menu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () =>{
  nav_menu.classList.toggle('show');
});