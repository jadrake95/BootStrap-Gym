const myArrow = document.querySelector(".my-arrow");
const hero = document.querySelector("#hero");

if (window.screen.width < 650) {
  hero.classList.remove("hero-bg");
  hero.classList.add("hero-bg-mob");
} else if (window.screen.width > 651) {
  hero.classList.remove("hero-bg-mob");
  hero.classList.add("hero-bg");
}

window.addEventListener("resize", function () {
  console.log(window.screen.width);
  if (window.screen.width < 650) {
    hero.classList.remove("hero-bg");
    hero.classList.add("hero-bg-mob");
  } else if (window.screen.width > 651) {
    hero.classList.remove("hero-bg-mob");
    hero.classList.add("hero-bg");
  }
});

myArrow.addEventListener("click", function () {
  const welcome = document.querySelector("#welcome");
  const headerOffset = 66;
  const elementPosition = welcome.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("#homeNav");
  const logo = document.querySelector("#mainLogo");
  if (window.scrollY > navbar.offsetTop + navbar.offsetHeight) {
    navbar.classList.add("bg-light");
    navbar.classList.add("navbar-light");
    navbar.classList.remove("bg-transparent");
    navbar.classList.remove("navbar-dark");
    logo.src = "public/images/NEW_LOGO.svg";
  } else {
    navbar.classList.remove("bg-light");
    navbar.classList.remove("navbar-light");
    navbar.classList.add("bg-transparent");
    navbar.classList.add("navbar-dark");
    logo.src = "public/images/NEW_LOGO(light).svg";
  }
});

(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
