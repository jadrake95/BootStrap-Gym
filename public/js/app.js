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
