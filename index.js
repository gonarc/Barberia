var menuHamburguesa = document.getElementById("id-icon-nav");
var abrirMenu = document.getElementById("id-container-nav-r");
var cerrarMenu = document.querySelector(".container-nav-r");
var menu1 = document.querySelector("#menu1");
var menu2 = document.querySelector("#menu2");


menuHamburguesa.addEventListener("click", () => {
  abrirMenu.style.left = "0px";
  menu1.style.opacity= "0";
  menu2.style.opacity= "1";

});
cerrarMenu.addEventListener("click", () => {
  abrirMenu.style.left = "-600px";
  menu1.style.opacity= "1";
  menu2.style.opacity= "0";
});
function initMap() {
  var coord = { lat: -34.75108213866823, lng: -58.2258952176551 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: coord,
  });
  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
}
