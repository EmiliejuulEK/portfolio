const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// Kontaktformular — kun hvis den findes på siden
const formular = document.getElementById("kontakt-formular");
if (formular) {
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
}

// Slideshow
document.querySelectorAll(".slideshow").forEach(function (slideshow) {
  const slides = slideshow.querySelectorAll(".slide");
  let aktivSlide = 0;

  function visSlide(n) {
    slides[aktivSlide].classList.remove("aktiv");
    aktivSlide = (n + slides.length) % slides.length;
    slides[aktivSlide].classList.add("aktiv");
  }

  slideshow.querySelector(".next").addEventListener("click", function () {
    visSlide(aktivSlide + 1);
  });

  slideshow.querySelector(".prev").addEventListener("click", function () {
    visSlide(aktivSlide - 1);
  });
});
