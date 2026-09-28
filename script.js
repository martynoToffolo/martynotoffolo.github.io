// Mostra la data di oggi nel footer di ogni pagina
window.addEventListener("DOMContentLoaded", function () {
  var oggi = new Date().toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  var p = document.createElement("p");
  p.style.margin = "0.5rem 0 0";
  p.textContent = "Oggi è " + oggi;
  document.querySelector("footer").appendChild(p);
});
