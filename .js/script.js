const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

//kontaktformular//

const formular = document.getElementById("kontakt-formular");

formular.addEventListener("submit", function (e) {
  e.preventDefault();

  const navn = document.getElementById("navn").value;
  const mail = document.getElementById("mail").value;
  const besked = document.getElementById("besked").value;

  if (navn === "" || mail === "" || besked === "") {
    alert("Udfyld venligst alle felter");
  } else {
    alert("Tak for din besked, " + navn + "! Jeg vender tilbage hurtigst muligt.");
    formular.reset();
  }
});
