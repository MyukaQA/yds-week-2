//kode javascript untuk index.html
const hamburger = document.getElementById('hamburger');
const nav_menu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () =>{
  nav_menu.classList.toggle('show');
});

var height_body = document.body.scrollHeight;
var percent = 25;
var btn_scroll = document.getElementById('btn-scroll');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > (height_body/100*percent) || document.documentElement.scrollTop > (height_body/100*percent)){
    btn_scroll.style.display = 'block';
  }else{
    btn_scroll.style.display = 'none';
  }
}

function btnTopFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
