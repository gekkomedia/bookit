var menuToggle = document.querySelector('.toggle');
var menumobToggle = document.querySelector('.toggle2');
let mobileToggle = document.querySelector('.burguer');
let nightMode = document.querySelector('.dark');
var lightMode = document.getElementById("ngt");
let desplegarMenu = document.querySelector('.Responsive-M');
menuToggle.onclick = function(){
  menuToggle.classList.toggle('active')
  menumobToggle.classList.toggle('active')
  nightMode.classList.toggle('active')
  lightMode.classList.toggle('active')
}
menumobToggle.onclick = function(){
  menuToggle.classList.toggle('active')
  menumobToggle.classList.toggle('active')
  nightMode.classList.toggle('active')
  lightMode.classList.toggle('active')
}
mobileToggle.onclick = function(){
  mobileToggle.classList.toggle('active')
  desplegarMenu.classList.toggle('oculto')
}
