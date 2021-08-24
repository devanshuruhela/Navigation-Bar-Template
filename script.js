const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const nav5 = document.getElementById("na5");

function navtoggle() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if(overlay.classList.contains('overlay-active'))
  {
    overlay.classList.remove('overlay-disable')
    overlay.classList.add('overlay-enable');

  }
  else
  {
    overlay.classList.remove("overlay-enable");
    overlay.classList.add("overlay-disable");
  }
}
function navhide()
{
   menuBars.classList.toggle("change");
}

menuBars.addEventListener("click", navtoggle);
nav1.addEventListener("click", navhide);
nav2.addEventListener("click", navhide);
nav3.addEventListener("click", navhide);
nav4.addEventListener("click", navhide);
nav5.addEventListener("click", navhide);
